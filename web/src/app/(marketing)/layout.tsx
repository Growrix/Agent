import HeaderShell from '@/components/layout/HeaderShell'
import FooterTrust from '@/components/layout/FooterTrust'
import MobileSupportDock from '@/components/layout/MobileSupportDock'
import PageMotionWrapper from '@/components/layout/PageMotionWrapper'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderShell />
      <PageMotionWrapper>{children}</PageMotionWrapper>
      <MobileSupportDock />
      <FooterTrust />
    </>
  )
}
