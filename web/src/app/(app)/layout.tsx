import HeaderShell from '@/components/layout/HeaderShell'
import FooterTrust from '@/components/layout/FooterTrust'
import AuthModal from '@/components/ui/AuthModal'
import QuoteCalculatorModal from '@/components/ui/QuoteCalculatorModal'
import { AuthModalProvider } from '@/components/providers/AuthModalProvider'
import { QuoteModalProvider } from '@/components/providers/QuoteModalProvider'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthModalProvider>
      <QuoteModalProvider>
        <HeaderShell />
        <main id="main-content" className="min-h-screen bg-surface-canvas">
          {children}
        </main>
        <FooterTrust />
        <AuthModal />
        <QuoteCalculatorModal />
      </QuoteModalProvider>
    </AuthModalProvider>
  )
}
