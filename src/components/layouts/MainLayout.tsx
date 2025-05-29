import Header from "@/components/organisms/Header"
import Footer from "@/components/organisms/Footer"
import ChatPopupButton from "@/components/organisms/ChatPopupButton"

type MainLayoutProps = {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        {children}
      </div>
      
      <Footer />
      <ChatPopupButton />
    </div>
  )
} 