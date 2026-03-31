import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useTheme } from '../hooks/useTheme'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="noise min-h-screen flex flex-col">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
