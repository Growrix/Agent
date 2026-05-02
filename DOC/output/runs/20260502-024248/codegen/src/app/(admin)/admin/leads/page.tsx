import type { Metadata } from 'next'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { listLeadEnquiriesService } from '@/server/services/lead-enquiries'

export const metadata: Metadata = {
  title: 'Leads Dashboard',
  robots: { index: false },
}

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; status?: string }>
}) {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  const params = await searchParams
  const page = Number(params.page ?? '1')
  const status = params.status as string | undefined

  const { leads, total, totalPages } = await listLeadEnquiriesService({ page, limit: 25, status })

  const statusBadge: Record<string, string> = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    quoted: 'bg-purple-100 text-purple-800',
    converted: 'bg-green-100 text-green-800',
    closed: 'bg-gray-100 text-gray-800',
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Leads</h1>
        <p className="text-sm text-gray-500">{total} total</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Name</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Email</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Phone</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Suburb</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Received</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{lead.name}</td>
                <td className="px-4 py-3 text-gray-600">{lead.email}</td>
                <td className="px-4 py-3 text-gray-600">{lead.phone}</td>
                <td className="px-4 py-3 text-gray-600">{lead.suburb ?? '—'}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      statusBadge[lead.status] ?? 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(lead.createdAt).toLocaleDateString('en-AU', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                  No leads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center gap-2 mt-4 justify-end">
          {page > 1 && (
            <a
              href={`?page=${page - 1}${status ? `&status=${status}` : ''}`}
              className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
            >
              Previous
            </a>
          )}
          <span className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <a
              href={`?page=${page + 1}${status ? `&status=${status}` : ''}`}
              className="px-3 py-1 border rounded text-sm hover:bg-gray-50"
            >
              Next
            </a>
          )}
        </div>
      )}
    </div>
  )
}
