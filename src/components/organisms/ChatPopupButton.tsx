"use client"

import { MessageSquare } from "lucide-react"

export default function ChatPopupButton() {
  const handleChatClick = () => {
    // TODO: Implementar funcionalidad de chatbot
    console.log("Abrir chat")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleChatClick}
        className="bg-gymvana-accent hover:bg-gymvana-accent/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        aria-label="Abrir chat de ayuda"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>
      
      {/* Tooltip opcional */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none">
        ¿Necesitas ayuda?
      </div>
    </div>
  )
} 