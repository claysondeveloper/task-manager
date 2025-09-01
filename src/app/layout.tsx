// src/app/layout.tsx
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import AuthProvider from "./providers/auth-provider";

export const metadata = {
  title: "Task Manager",
  description: "Gerencie suas tarefas e solicitações",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="flex">
        {/* Sidebar fixa */}
        <AuthProvider>
          <Sidebar />
          {/* Conteúdo principal */}
          <main className="flex-1 flex items-center justify-center min-h-screen md:ml-40 p-6">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
