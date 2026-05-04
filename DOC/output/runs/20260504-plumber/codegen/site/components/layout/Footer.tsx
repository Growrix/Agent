export function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-extrabold text-[var(--primary)]">AusPlumb Pro</h3>
          <p className="mt-2 text-sm text-slate-600">
            Licensed, insured plumbing services with 24/7 emergency support.
          </p>
        </div>
        <div className="text-sm text-slate-700">
          <p className="font-semibold">Compliance</p>
          <p>ABN: 12 345 678 901</p>
          <p>Licence: NSW-PL-000000</p>
          <p>All advertised prices include GST.</p>
        </div>
        <div className="text-sm text-slate-700">
          <p className="font-semibold">Contact</p>
          <p>Phone: 1300 758 623</p>
          <p>WhatsApp: +61 400 000 000</p>
          <p>Hours: 24/7 Emergency, 7am-7pm General</p>
        </div>
      </div>
    </footer>
  );
}
