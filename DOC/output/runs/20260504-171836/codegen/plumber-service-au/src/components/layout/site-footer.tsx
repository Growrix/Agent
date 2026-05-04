export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-primary/15 bg-primary px-4 py-12 text-white">
      <div className="container-shell grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">Plumber AU</h3>
          <p className="mt-2 text-sm text-white/85">
            Licensed and insured plumbing services. Transparent pricing, rapid response, and local teams.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Service Areas</h4>
          <p className="mt-2 text-sm text-white/85">Sydney, Melbourne, Brisbane, Perth, Adelaide</p>
          <p className="mt-1 text-sm text-white/85">Mon-Sun: 24 hours emergency support</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm text-white/85">Phone: 0000 000 000</p>
          <p className="text-sm text-white/85">WhatsApp: +61 0000 000 000</p>
          <p className="text-sm text-white/85">ABN: 00 000 000 000</p>
        </div>
      </div>
    </footer>
  );
}
