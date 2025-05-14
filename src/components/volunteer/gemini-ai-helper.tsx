"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send, Bot, X, MessageSquare } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function GeminiAiHelper() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour ! Je suis votre assistant IA Croix-Rouge. Je peux vous aider avec des informations basées sur la documentation interne. Comment puis-je vous aider aujourd'hui ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fonction pour faire défiler vers le bas lorsque de nouveaux messages apparaissent
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    // Si un nouveau message apparaît et que le chat est fermé, incrémenter le compteur
    if (messages.length > 1 && !isOpen) {
      setUnreadCount((prev) => prev + 1);
    }
  }, [messages, isOpen]);

  // Réinitialiser le compteur quand on ouvre le chat
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Envoyer la question à l'API
      const response = await fetch("/api/volunteer/gemini-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMessage.content,
          history: messages.map(msg => msg.content),
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }

      const data = await response.json();
      
      // Ajouter la réponse de l'assistant
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || "Je suis désolé, je n'ai pas pu trouver d'informations pertinentes à ce sujet dans notre documentation.",
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Erreur lors de la communication avec l'assistant:", error);
      
      // Ajouter un message d'erreur
      const errorMessage: Message = {
        role: "assistant",
        content: "Désolé, une erreur est survenue lors de la recherche d'informations. Veuillez réessayer plus tard.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction pour réinitialiser la conversation
  const resetConversation = () => {
    setMessages([
      {
        role: "assistant",
        content: "Bonjour ! Je suis votre assistant IA Croix-Rouge. Je peux vous aider avec des informations basées sur la documentation interne. Comment puis-je vous aider aujourd'hui ?",
      },
    ]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Bouton flottant pour ouvrir le chat */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg bg-[#E2001A] hover:bg-[#c0001a] text-white"
        >
          {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
              {unreadCount}
            </span>
          )}
        </Button>
      </div>

      {/* Chat flottant en bas à droite */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-[400px] shadow-lg rounded-lg overflow-hidden z-40 bg-white border">
          {/* En-tête du chat */}
          <div className="bg-[#E2001A] text-white py-3 px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <h2 className="font-medium">Assistant IA Croix-Rouge</h2>
            </div>
            <Button 
              onClick={resetConversation} 
              variant="ghost" 
              size="sm"
              className="text-white text-xs hover:bg-[#c0001a]"
            >
              Nouvelle conversation
            </Button>
          </div>
          
          {/* Corps du chat avec les messages */}
          <div className="bg-gray-50 p-4 h-[350px] overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 mb-3 rounded-lg ${
                  message.role === "assistant" 
                    ? "bg-white border-l-4 border-[#E2001A]" 
                    : "bg-blue-50 ml-4 border-l-4 border-blue-500"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`p-1 rounded-full ${
                    message.role === "assistant" ? "bg-[#E2001A]" : "bg-blue-500"
                  }`}>
                    <Bot className="h-4 w-4 text-white" />
                  </span>
                  <p className="font-medium">
                    {message.role === "assistant" ? "Assistant" : "Vous"}
                  </p>
                </div>
                <div className="ml-7 text-gray-700">
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="bg-white p-3 mb-3 rounded-lg border-l-4 border-[#E2001A] flex items-center space-x-3">
                <Loader2 className="h-5 w-5 animate-spin text-[#E2001A]" />
                <p className="text-gray-600">Recherche en cours...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Formulaire pour envoyer un message */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t">
            <div className="relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="pr-10 w-full"
                disabled={isLoading}
                autoFocus
              />
              {input.trim() && !isLoading && (
                <Button 
                  type="submit" 
                  size="icon" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-[#E2001A] hover:bg-[#c0001a]"
                >
                  <Send className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
