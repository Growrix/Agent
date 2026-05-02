import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-bold text-brand-blue">
          Admin
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/admin/leads" className="text-gray-600 hover:text-brand-blue font-medium">
            Leads
          </a>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
