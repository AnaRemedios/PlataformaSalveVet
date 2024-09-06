import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-[#E2FBF9] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">

        {/* Logo e Endereço */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={200}
            height={100}
          />
          <p className="mt-4 text-sm text-gray-600 text-center md:text-left">
            Rua Exemplo, 123 <br />
            Bairro Exemplo, Cidade Exemplo, Estado
          </p>
        </div>

        {/* Links Centrais */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <ul className="space-y-2">
            <li>
              <Link href="/guia-uso" className="text-gray-600 hover:underline">
                Guia de Uso da Plataforma
              </Link>
            </li>
            <li>
              <Link href="/sou-veterinario" className="text-gray-600 hover:underline">
                Sou Veterinário
              </Link>
            </li>
            <li>
              <Link href="/politica-privacidade" className="text-gray-600 hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/central-ajuda" className="text-gray-600 hover:underline">
                Central de Ajuda
              </Link>
            </li>
          </ul>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex justify-center md:justify-start space-x-4">
          <Link href="https://www.instagram.com" target="_blank">
            <Instagram sx={{ color: 'gray', '&:hover': { color: 'black' }, fontSize: 32 }} />
          </Link>
          <Link href="https://www.facebook.com" target="_blank">
            <Facebook sx={{ color: 'gray', '&:hover': { color: 'black' }, fontSize: 32 }} />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <LinkedIn sx={{ color: 'gray', '&:hover': { color: 'black' }, fontSize: 32 }} />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
