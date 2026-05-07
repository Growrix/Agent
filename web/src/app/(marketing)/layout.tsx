import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { AuthModalProvider } from "@/components/providers/AuthModalProvider";
import { AuthModal } from "@/components/ui/AuthModal";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthModalProvider>
      <Header />
      <div className="pb-mobile-nav lg:pb-0">{children}</div>
      <Footer />
      <MobileBottomNav />
      <AuthModal />
    </AuthModalProvider>
  );
}



