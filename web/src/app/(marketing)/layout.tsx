import HeaderShell from '@/components/layout/HeaderShell'
import FooterTrust from '@/components/layout/FooterTrust'
import MobileSupportDock from '@/components/layout/MobileSupportDock'
import MobileBottomNav from '@/components/layout/MobileBottomNav'
import PageMotionWrapper from '@/components/layout/PageMotionWrapper'
import AuthModal from '@/components/ui/AuthModal'
import { AuthModalProvider } from '@/components/providers/AuthModalProvider'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthModalProvider>
      <HeaderShell />
      <PageMotionWrapper>{children}</PageMotionWrapper>
      <MobileSupportDock />
      <FooterTrust />
      <MobileBottomNav />
      <AuthModal />
    </AuthModalProvider>
  )
}
