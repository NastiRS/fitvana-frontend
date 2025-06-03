import { ReactNode } from 'react'
import Link from 'next/link'
import { Search, User } from 'lucide-react'
import Logo from '@/components/atoms/Logo'
import LogoText from '@/components/atoms/LogoText'
import MainHeader from '@/components/organisms/MainHeader'
import Footer from '@/components/organisms/Footer'
import ChatPopupButton from "@/components/organisms/ChatPopupButton"

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-background dark">
      <div className="layout-container flex h-full grow flex-col">
        <MainHeader />
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {children}
          </div>
        </div>
        <Footer />
      </div>
      <ChatPopupButton />
    </div>
  )
} 