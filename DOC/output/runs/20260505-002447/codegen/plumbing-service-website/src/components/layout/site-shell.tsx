import { Header } from "@/components/marketing/sections/header";
import { Footer } from "@/components/marketing/sections/footer";
import { StickyContactDock } from "@/components/marketing/sections/sticky-contact-dock";
import { PosthogProvider } from "@/components/providers/posthog-provider";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <PosthogProvider enabled={false}>
      <a className="skip-link focus-ring" href="#main-content">
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="page-shell flex-1 pt-32 md:pt-36">{children}</div>
        <Footer />
        <StickyContactDock />
      </div>
    </PosthogProvider>
  );
}