import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gymvana-primary border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-gymvana-secondary text-sm mb-4 md:mb-0">
            © {currentYear} Gymvana. Todos los derechos reservados.
          </p>
          
          {/* Redes Sociales */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-gymvana-secondary hover:text-gymvana-accent transition-colors p-2 rounded-full hover:bg-gymvana-accent/10"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gymvana-secondary hover:text-gymvana-accent transition-colors p-2 rounded-full hover:bg-gymvana-accent/10"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-gymvana-secondary hover:text-gymvana-accent transition-colors p-2 rounded-full hover:bg-gymvana-accent/10"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Links adicionales */}
        <div className="mt-6 pt-6 border-t border-border/20">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gymvana-secondary">
            <a href="/politica-privacidad" className="hover:text-gymvana-accent transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos-condiciones" className="hover:text-gymvana-accent transition-colors">
              Términos y Condiciones
            </a>
            <a href="/contacto" className="hover:text-gymvana-accent transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 