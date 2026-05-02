export default function AdminLeadsLoading() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  )
}
