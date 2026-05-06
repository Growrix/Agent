export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main id="main-content" className="min-h-screen flex flex-col items-center justify-center bg-surface-canvas py-12 px-4">
      {children}
    </main>
  )
}
