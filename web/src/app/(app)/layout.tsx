import { AuthModalProvider } from "@/components/providers/AuthModalProvider";
import { AuthModal } from "@/components/ui/AuthModal";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthModalProvider>
      {children}
      <AuthModal />
    </AuthModalProvider>
  );
}



