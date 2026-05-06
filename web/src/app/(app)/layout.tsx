import HeaderShell from '@/components/layout/HeaderShell'
import FooterTrust from '@/components/layout/FooterTrust'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderShell />
      <main id="main-content" className="min-h-screen bg-surface-canvas">
        {children}
      </main>
      <FooterTrust />
    </>
  )
}
