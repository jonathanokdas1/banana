import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react"; // Importa o SessionProvider do NextAuth

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="h-full min-h-screen flex">
          {/* Barra lateral */}
          <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
            <Sidebar />
          </div>

          {/* Conteúdo principal */}
          <div className="flex-1 md:pl-72 flex flex-col">
            <Navbar />
            <main className="flex-1 w-full max-w-screen-lg mx-auto p-6">
              {children} {/* O conteúdo das páginas será renderizado aqui */}
            </main>
          </div>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default DashboardLayout;
