import { ShieldCheck, Clock, Award, ThumbsUp } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'Fully Licenced & Insured', sub: 'All work guaranteed' },
  { icon: Clock, label: '24/7 Emergency', sub: 'Fast response time' },
  { icon: Award, label: 'Upfront Pricing', sub: 'No hidden fees' },
  { icon: ThumbsUp, label: '5-Star Rated', sub: 'Trusted by locals' },
]

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="flex flex-col items-center text-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm"
        >
          <Icon className="h-8 w-8 text-brand-blue mb-2" />
          <p className="font-semibold text-sm text-gray-900">{label}</p>
          <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
        </div>
      ))}
    </div>
  )
}
