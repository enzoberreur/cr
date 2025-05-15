"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Loader2, Plus, Search, Trash, Edit, Calendar, Eye } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

// Types pour les notes
type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  beneficiaryId?: string;
  beneficiaryName?: string;
};

export function VolunteerNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    beneficiaryId: ""
  });

  // Simulation de chargement des notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // Cette fonction serait remplacée par un vrai appel API
        setTimeout(() => {
          // Notes de démonstration
          const demoNotes: Note[] = [
            {
              id: "1",
              title: "Entretien avec M. Dupont",
              content: "M. Dupont a exprimé le besoin d'aide pour ses démarches administratives liées à sa demande de logement social. Il semble être en difficulté financière mais hésite à en parler. À suivre lors du prochain rendez-vous.",
              createdAt: "2023-10-15T10:30:00Z",
              updatedAt: "2023-10-15T10:30:00Z",
              beneficiaryId: "b1",
              beneficiaryName: "Marcel Dupont"
            },
            {
              id: "2",
              title: "Famille Martin - Suivi",
              content: "La famille a reçu une aide alimentaire d'urgence. Ils auront besoin d'un accompagnement pour l'inscription des enfants aux activités périscolaires. Mme Martin cherche également un emploi à temps partiel.",
              createdAt: "2023-10-10T14:15:00Z",
              updatedAt: "2023-10-12T09:20:00Z",
              beneficiaryId: "b2",
              beneficiaryName: "Famille Martin"
            },
            {
              id: "3",
              title: "Rappel - Formation PSC1",
              content: "Ne pas oublier de confirmer ma participation à la formation de recyclage PSC1 prévue le mois prochain. Vérifier si d'autres bénévoles y participent pour organiser un covoiturage.",
              createdAt: "2023-10-05T16:45:00Z",
              updatedAt: "2023-10-05T16:45:00Z"
            }
          ];
          setNotes(demoNotes);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Erreur lors du chargement des notes:", error);
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // Filtrer les notes en fonction de la recherche
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (note.beneficiaryName && note.beneficiaryName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentNote) {
      // Mode édition - mettre à jour une note existante
      const updatedNote = {
        ...currentNote,
        title: formData.title,
        content: formData.content,
        updatedAt: new Date().toISOString()
      };
      
      // Simuler la mise à jour via API
      setNotes(notes.map(note => note.id === currentNote.id ? updatedNote : note));
    } else {
      // Créer une nouvelle note
      const newNote: Note = {
        id: `note-${Date.now()}`,  // ID temporaire, serait généré par la BD
        title: formData.title,
        content: formData.content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      // Simuler l'ajout via API
      setNotes([newNote, ...notes]);
    }
    
    // Réinitialiser et fermer le dialogue
    resetForm();
    setIsDialogOpen(false);
  };

  // Supprimer une note
  const deleteNote = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette note ?")) {
      // Simuler la suppression via API
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  // Éditer une note existante
  const editNote = (note: Note) => {
    setCurrentNote(note);
    setFormData({
      title: note.title,
      content: note.content,
      beneficiaryId: note.beneficiaryId || ""
    });
    setIsDialogOpen(true);
  };

  // Voir le détail d'une note
  const viewNote = (note: Note) => {
    setCurrentNote(note);
    setIsViewDialogOpen(true);
  };

  // Réinitialiser le formulaire
  const resetForm = () => {
    setCurrentNote(null);
    setFormData({
      title: "",
      content: "",
      beneficiaryId: ""
    });
  };

  // Ouvrir le dialogue pour une nouvelle note
  const openNewNoteDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  // Formater la date
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "d MMMM yyyy à HH:mm", { locale: fr });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-[#E2001A]" />
        <span className="ml-2 text-gray-600">Chargement des notes...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Barre d'outils */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Rechercher dans les notes..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button 
          onClick={openNewNoteDialog}
          className="bg-[#E2001A] hover:bg-[#c0001a] w-full sm:w-auto gap-2"
        >
          <Plus className="h-4 w-4" />
          <span>Créer une note</span>
        </Button>
      </div>

      {/* Liste des notes */}
      {filteredNotes.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          {searchTerm ? (
            <p className="text-gray-500">Aucune note ne correspond à votre recherche.</p>
          ) : (
            <p className="text-gray-500">
              Vous n&apos;avez pas encore de notes. Créez une note pour garder des informations confidentielles sur vos bénéficiaires.
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 pb-3">
                <CardTitle className="text-lg font-medium truncate" title={note.title}>
                  {note.title}
                </CardTitle>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  {formatDate(note.updatedAt)}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 line-clamp-3 text-sm">
                  {note.content}
                </p>
                {note.beneficiaryName && (
                  <div className="mt-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {note.beneficiaryName}
                    </span>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-2 pb-3">
                <Button size="sm" variant="ghost" onClick={() => viewNote(note)}>
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => editNote(note)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-700" onClick={() => deleteNote(note.id)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {/* Formulaire de création/édition de note */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>{currentNote ? "Modifier la note" : "Créer une note"}</DialogTitle>
            <DialogDescription>
              {currentNote 
                ? "Modifiez les détails de votre note ci-dessous." 
                : "Les notes sont confidentielles et ne sont visibles que par vous."}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Input
                placeholder="Titre de la note"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Contenu de la note..."
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                required
                className="min-h-[150px] w-full"
              />
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Annuler
              </Button>
              <Button type="submit" className="bg-[#E2001A] hover:bg-[#c0001a]">
                {currentNote ? "Mettre à jour" : "Créer"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialogue de visualisation de note */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>{currentNote?.title}</DialogTitle>
            {currentNote?.beneficiaryName && (
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full inline-block mt-2">
                {currentNote.beneficiaryName}
              </span>
            )}
            <div className="flex items-center text-xs text-gray-500 mt-2">
              <Calendar className="h-3 w-3 mr-1" />
              {currentNote && formatDate(currentNote.updatedAt)}
            </div>
          </DialogHeader>
          
          <div className="mt-2 whitespace-pre-wrap">
            {currentNote?.content}
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => currentNote && editNote(currentNote)}
              className="mr-auto"
            >
              <Edit className="h-4 w-4 mr-2" />
              Modifier
            </Button>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
