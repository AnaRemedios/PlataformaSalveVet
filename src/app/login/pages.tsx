import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para submeter o login
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      <div className="flex bg-white rounded-lg shadow-lg w-full max-w-4xl">
        
        {/* Seção da Esquerda com Imagens */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 p-8">
          <Image
            src="/images/dog.png" // Substitua pelo caminho correto da imagem
            alt="Dog"
            width={250}
            height={250}
            className="rounded-lg mb-8"
          />
          <Image
            src="/images/cat.png" // Substitua pelo caminho correto da imagem
            alt="Cat"
            width={250}
            height={250}
            className="rounded-lg"
          />
        </div>

        {/* Seção da Direita - Formulário de Login */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <div className="text-center mb-8">
            <Image src="/images/logo.png" alt="SalveVet" width={150} height={50} />
            <h2 className="text-2xl font-bold mt-4">Acesse sua Conta</h2>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Digite sua senha"
              />
              <div className="text-right mt-2">
                <Link href="/esqueci-senha">
                  <a className="text-sm text-green-500 hover:underline">Esqueci a Senha</a>
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition duration-200"
            >
              ACESSAR
            </button>
          </form>

          <div className="text-center my-6">
            <p className="text-gray-400">OU</p>
            <button className="w-full py-3 bg-blue-500 text-white font-bold rounded-md flex justify-center items-center gap-2 hover:bg-blue-600 transition duration-200">
              <Image src="/images/google-icon.png" alt="Google" width={24} height={24} />
              Continue com o Google
            </button>
          </div>

          <Link href="/cadastro">
            <a className="text-center text-sm text-green-500 hover:underline">Novo Cadastro</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
