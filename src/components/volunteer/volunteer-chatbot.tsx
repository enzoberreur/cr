"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function VolunteerChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      const response = await fetch("/api/volunteer/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMessage.content,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }

      const data = await response.json();
      
      // Ajouter la réponse de l'assistant
      const assistantMessage: Message = {
        role: "assistant",
        content: data.response || "Je suis désolé, je n'ai pas pu traiter votre demande.",
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Erreur lors de la communication avec le chatbot:", error);
      
      // Ajouter un message d'erreur
      const errorMessage: Message = {
        role: "assistant",
        content: "Désolé, une erreur est survenue. Veuillez réessayer plus tard.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-50 p-4 rounded-md flex-1 overflow-y-auto border mb-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg shadow-sm ${
                message.role === "assistant" ? "bg-white" : "bg-blue-50 ml-4"
              }`}
            >
              <p className="text-sm font-medium">
                {message.role === "assistant" ? "Assistant" : "Vous"}
              </p>
              <p className="text-gray-700 whitespace-pre-wrap">{message.content}</p>
            </div>
          ))}
          
          {isLoading && (
            <div className="bg-white p-3 rounded-lg shadow-sm flex items-center space-x-2">
              <Loader2 className="h-4 w-4 animate-spin text-[#E2001A]" />
              <p className="text-sm text-gray-500">L'assistant réfléchit...</p>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez votre question..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !input.trim()}>
          Envoyer
        </Button>
      </form>
    </div>
  );
}
