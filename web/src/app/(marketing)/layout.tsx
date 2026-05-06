import HeaderShell from '@/components/layout/HeaderShell'
import FooterTrust from '@/components/layout/FooterTrust'
import MobileSupportDock from '@/components/layout/MobileSupportDock'
import MobileBottomNav from '@/components/layout/MobileBottomNav'
import PageMotionWrapper from '@/components/layout/PageMotionWrapper'
import AuthModal from '@/components/ui/AuthModal'
import { AuthModalProvider } from '@/components/providers/AuthModalProvider'
import QuoteCalculatorModal from '@/components/ui/QuoteCalculatorModal'
import { QuoteModalProvider } from '@/components/providers/QuoteModalProvider'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthModalProvider>
      <QuoteModalProvider>
        <HeaderShell />
        <PageMotionWrapper>{children}</PageMotionWrapper>
        <MobileSupportDock />
        <FooterTrust />
        <MobileBottomNav />
        <AuthModal />
        <QuoteCalculatorModal />
      </QuoteModalProvider>
    </AuthModalProvider>
  )
}
