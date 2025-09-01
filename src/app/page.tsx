"use client";

import { useSession, signIn } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [task, setTask] = useState("");

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <h2 className="text-2xl font-bold">Bem-vindo ao Task Manager</h2>
        <p className="text-gray-600 mt-2">Faça login para continuar</p>

        <button
          onClick={() => signIn()}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Fazer Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <h2 className="text-2xl font-bold mb-4">Olá, {session.user?.name} 👋</h2>
      <p className="text-gray-600 mb-6">
        Adicione uma nova tarefa e organize seu dia!
      </p>

      <form className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Digite sua tarefa..."
          className="flex-1 p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
