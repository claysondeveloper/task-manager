"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, ListTodo, User, LogOut, List } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detecta se está em modo desktop
  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <>
      {/* Header fixo */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white flex items-center justify-between p-4 shadow-md z-50 h-16">
        <h1 className="font-bold text-lg">Task Manager</h1>
        {!isDesktop && (
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </header>

      {/* Sidebar */}
        <motion.aside
        initial={{ x: -250 }}
        animate={{ x: open || isDesktop ? 0 : -250 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-screen w-40 bg-gray-900 text-white z-40 p-6 pt-20 flex flex-col"
        >
        {/* Navegação principal */}
        <nav className="flex flex-col gap-4 flex-1">
            <Link href="/" className="flex items-center gap-2 hover:text-blue-400">
            <Home size={20} /> Início
            </Link>
            <Link href="/tasks" className="flex items-center gap-2 hover:text-blue-400">
            <List size={20} /> Minhas Tarefas
            </Link>
            <Link href="/profile" className="flex items-center gap-2 hover:text-blue-400">
            <User size={20} /> Perfil
            </Link>
        </nav>

        {/* Botão de sair no rodapé */}
        <button
        onClick={() => signOut()}
        className="flex items-center gap-2 text-red-400 hover:text-red-600 mt-auto"
        >
        <LogOut size={20} /> Sair
        </button>
        </motion.aside>

      {/* Overlay no mobile */}
      {open && !isDesktop && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
