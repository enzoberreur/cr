"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Tags,
  CalendarDays,
  FileText,
  Save,
  Star,
  X,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Interface pour les documents de la base de connaissance
interface KnowledgeDocument {
  id: string;
  title: string;
  content: string;
  tags: string[];
  importance: string;
  createdAt: string;
  updatedAt: string;
  uploadedBy: string;
  uploadedById?: string;
}

interface DocumentFormData {
  title: string;
  content: string;
  tags: string[];
  importance: string;
}

export default function RAGManager() {
  const [documents, setDocuments] = useState<KnowledgeDocument[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const [isEditSheetOpen, setIsEditSheetOpen] = useState<boolean>(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [selectedDocument, setSelectedDocument] = useState<KnowledgeDocument | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentTag, setCurrentTag] = useState<string>("");
  const [documentForm, setDocumentForm] = useState<DocumentFormData>({
    title: "",
    content: "",
    tags: [],
    importance: "medium",
  });
  const [error, setError] = useState<string | null>(null);

  // Charger les documents depuis l'API
  useEffect(() => {
    async function fetchDocuments() {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/admin/documents');
        
        if (!response.ok) {
          throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setDocuments(data);
      } catch (err) {
        console.error("Erreur lors de la récupération des documents:", err);
        setError("Impossible de charger les documents");
        // Laisser le tableau vide en cas d'erreur
        setDocuments([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDocuments();
  }, []);

  // Filtrer les documents en fonction du terme de recherche
  const filteredDocuments = documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Gérer la modification d'un document
  const handleEditDocument = (doc: KnowledgeDocument) => {
    setSelectedDocument(doc);
    setDocumentForm({
      title: doc.title,
      content: doc.content,
      tags: [...doc.tags],
      importance: doc.importance,
    });
    setIsEditSheetOpen(true);
  };

  // Gérer la suppression d'un document
  const handleDeleteDocument = (doc: KnowledgeDocument) => {
    setSelectedDocument(doc);
    setIsDeleteDialogOpen(true);
  };

  // Confirmer la suppression d'un document
  const confirmDeleteDocument = async () => {
    if (!selectedDocument) return;
    
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`/api/admin/documents/${selectedDocument.id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
      
      // Mise à jour de l'état local après succès
      setDocuments(documents.filter((d) => d.id !== selectedDocument.id));
    } catch (err) {
      console.error("Erreur lors de la suppression du document:", err);
      setError("Impossible de supprimer le document");
    } finally {
      setIsLoading(false);
      setIsDeleteDialogOpen(false);
      setSelectedDocument(null);
    }
  };

  // Ajouter un tag au formulaire
  const addTag = () => {
    if (currentTag.trim() && !documentForm.tags.includes(currentTag.trim())) {
      setDocumentForm({
        ...documentForm,
        tags: [...documentForm.tags, currentTag.trim()],
      });
      setCurrentTag("");
    }
  };

  // Supprimer un tag du formulaire
  const removeTag = (tagToRemove: string) => {
    setDocumentForm({
      ...documentForm,
      tags: documentForm.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  // Gérer la soumission du formulaire d'ajout
  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/documents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(documentForm),
      });
      
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
      
      const newDocument = await response.json();
      setDocuments([newDocument, ...documents]);
      setIsAddDialogOpen(false);
      setDocumentForm({
        title: "",
        content: "",
        tags: [],
        importance: "medium",
      });
    } catch (err) {
      console.error("Erreur lors de l'ajout du document:", err);
      setError("Impossible d'ajouter le document");
    } finally {
      setIsLoading(false);
    }
  };

  // Gérer la soumission du formulaire de modification
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDocument) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/admin/documents/${selectedDocument.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(documentForm),
      });
      
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
      
      const updatedDocument = await response.json();
      
      // Mise à jour de l'état local après succès
      setDocuments(documents.map((doc) =>
        doc.id === selectedDocument.id ? updatedDocument : doc
      ));
      
      setIsEditSheetOpen(false);
      setSelectedDocument(null);
    } catch (err) {
      console.error("Erreur lors de la modification du document:", err);
      setError("Impossible de modifier le document");
    } finally {
      setIsLoading(false);
    }
  };

  // Formater la date pour l'affichage
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 mr-4">
          <Input
            type="text"
            placeholder="Rechercher un document..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
            prefix={<Search className="h-4 w-4 text-gray-400" />}
          />
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" /> Ajouter un document
        </Button>
      </div>

      {error && (
        <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded-md text-red-700 flex items-center">
          <AlertTriangle className="h-4 w-4 mr-2" />
          {error}
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Base de connaissances</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
              <span className="ml-2">Chargement des documents...</span>
            </div>
          ) : filteredDocuments.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-2 opacity-20" />
              {searchTerm ? "Aucun document ne correspond à votre recherche." : "Aucun document disponible."}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Titre</TableHead>
                  <TableHead>Tags</TableHead>
                  <TableHead>Mise à jour</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        {doc.importance === "high" && (
                          <Star className="h-4 w-4 text-amber-500 mr-2" />
                        )}
                        {doc.title}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1 max-w-[300px]">
                        {doc.tags
                          .filter((tag) => tag !== "high" && tag !== "medium" && tag !== "low")
                          .map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <CalendarDays className="h-3.5 w-3.5 text-muted-foreground mr-1" />
                        <span className="text-sm text-muted-foreground">
                          {formatDate(doc.updatedAt)}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        par {doc.uploadedBy}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <span className="sr-only">Actions</span>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                            >
                              <path
                                d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleEditDocument(doc)}>
                            <Edit className="h-4 w-4 mr-2" /> Modifier
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDeleteDocument(doc)}
                            className="text-red-600"
                          >
                            <Trash2 className="h-4 w-4 mr-2" /> Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* Dialogue d'ajout de document */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Ajouter un document</DialogTitle>
            <DialogDescription>
              Ajoutez un nouveau document à la base de connaissances.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddSubmit}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Titre
                </label>
                <Input
                  id="title"
                  value={documentForm.title}
                  onChange={(e) =>
                    setDocumentForm({ ...documentForm, title: e.target.value })
                  }
                  placeholder="Titre du document"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium">
                  Contenu
                </label>
                <Textarea
                  id="content"
                  value={documentForm.content}
                  onChange={(e) =>
                    setDocumentForm({ ...documentForm, content: e.target.value })
                  }
                  placeholder="Contenu du document"
                  className="min-h-[200px] resize-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tag" className="text-sm font-medium">
                  Tags
                </label>
                <div className="flex items-center gap-2">
                  <Input
                    id="tag"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    placeholder="Ajouter un tag"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addTag}
                    className="whitespace-nowrap"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Ajouter
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {documentForm.tags.map((tag) => (
                    <Badge 
                      variant="outline"
                      key={tag}
                      className="pl-2 flex items-center gap-1 hover:bg-accent"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 rounded-full hover:bg-accent-foreground/20 p-1"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Importance</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="high"
                      name="importance"
                      checked={documentForm.importance === "high"}
                      onChange={() =>
                        setDocumentForm({ ...documentForm, importance: "high" })
                      }
                      className="mr-2"
                    />
                    <label htmlFor="high" className="text-sm">
                      Élevée
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="medium"
                      name="importance"
                      checked={documentForm.importance === "medium"}
                      onChange={() =>
                        setDocumentForm({ ...documentForm, importance: "medium" })
                      }
                      className="mr-2"
                    />
                    <label htmlFor="medium" className="text-sm">
                      Moyenne
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="low"
                      name="importance"
                      checked={documentForm.importance === "low"}
                      onChange={() =>
                        setDocumentForm({ ...documentForm, importance: "low" })
                      }
                      className="mr-2"
                    />
                    <label htmlFor="low" className="text-sm">
                      Basse
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Ajouter
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Panneau de modification de document */}
      <Sheet open={isEditSheetOpen} onOpenChange={setIsEditSheetOpen}>
        <SheetContent className="sm:max-w-[600px]">
          <SheetHeader>
            <SheetTitle>Modifier le document</SheetTitle>
            <SheetDescription>
              Apportez les modifications nécessaires à ce document.
            </SheetDescription>
          </SheetHeader>
          <form onSubmit={handleEditSubmit} className="space-y-6 mt-6">
            <div className="space-y-2">
              <label htmlFor="edit-title" className="text-sm font-medium">
                Titre
              </label>
              <Input
                id="edit-title"
                value={documentForm.title}
                onChange={(e) =>
                  setDocumentForm({ ...documentForm, title: e.target.value })
                }
                placeholder="Titre du document"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="edit-content" className="text-sm font-medium">
                Contenu
              </label>
              <Textarea
                id="edit-content"
                value={documentForm.content}
                onChange={(e) =>
                  setDocumentForm({ ...documentForm, content: e.target.value })
                }
                placeholder="Contenu du document"
                className="min-h-[300px] resize-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="edit-tag" className="text-sm font-medium">
                Tags
              </label>
              <div className="flex items-center gap-2">
                <Input
                  id="edit-tag"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  placeholder="Ajouter un tag"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={addTag}
                  className="whitespace-nowrap"
                >
                  <Plus className="h-4 w-4 mr-1" /> Ajouter
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {documentForm.tags.map((tag) => (
                  <Badge 
                    variant="outline"
                    key={tag}
                    className="pl-2 flex items-center gap-1 hover:bg-accent"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 rounded-full hover:bg-accent-foreground/20 p-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Importance</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="edit-high"
                    name="edit-importance"
                    checked={documentForm.importance === "high"}
                    onChange={() =>
                      setDocumentForm({ ...documentForm, importance: "high" })
                    }
                    className="mr-2"
                  />
                  <label htmlFor="edit-high" className="text-sm">
                    Élevée
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="edit-medium"
                    name="edit-importance"
                    checked={documentForm.importance === "medium"}
                    onChange={() =>
                      setDocumentForm({ ...documentForm, importance: "medium" })
                    }
                    className="mr-2"
                  />
                  <label htmlFor="edit-medium" className="text-sm">
                    Moyenne
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="edit-low"
                    name="edit-importance"
                    checked={documentForm.importance === "low"}
                    onChange={() =>
                      setDocumentForm({ ...documentForm, importance: "low" })
                    }
                    className="mr-2"
                  />
                  <label htmlFor="edit-low" className="text-sm">
                    Basse
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditSheetOpen(false)}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                Enregistrer
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>

      {/* Dialogue de confirmation de suppression */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action ne peut pas être annulée. Cela supprimera définitivement ce document de la base de connaissances.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={confirmDeleteDocument}
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
