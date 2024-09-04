'use client';
import ButtonLoginTutor from "@/components/buttonlogintutor";
import ButtonLoginVet from "@/components/buttonloginvet";
import CardBuscar from "@/components/cardbuscar";
import CarouselBlog from "@/components/carouselpostblog";
import CarouselVeterinarios from "@/components/carouselveterinarios";
import Navbar from "@/components/navbar";
import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";



export default function Home() {

  const veterinariansIds = ['1', '2', '7', '8', '9', '10', '11']; // IDs dos veterinários simulados
  const postIds = ['1', '2', '3', '4'];
  return (

    <main >

      <div className="relative bg-gradient-to-b from-[#C699D8] to-[#E2FBF9] h-[720px]">

        <Navbar />

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 ">

          <div className="max-w-lg flex flex-col justify-center ml-0 md:ml-48 text-center md:text-left">
            <h1 className="font-fraunces text-4xl md:text-5xl">
              Conectando Tutores e Médicos Veterinários
            </h1>
            <p className="font-open-sans md:text-2xl mt-4 md:mt-12">
              Seja Bem-Vindo a SalveVet. <br /> <br />
              Aqui simplificamos e agilizamos os cuidados <br />
              veterinários ao conectar tutores de pets com <br />
              veterinários qualificados de forma rápida e segura
            </p>
          </div>

          <div className="flex justify-center flex-grow items-center gap-10 mr-0 md:mr-20 mt-8 md:mt-0">
            <Image
              src="/assets/images/web1dog.svg"
              alt="cachorrinho"
              width={220}
              height={200}
              className="hidden md:block"
            />
            <Image
              src="/assets/images/web1cat.svg"
              alt="gatinho"
              width={260}
              height={240}
              className="hidden md:block mr-0 md:mr-10"
            />
          </div>

        </div>

        <div className="relative z-10 mt-[50px] ">
          <CardBuscar />
        </div>
      </div>

      <div className="flex justify-center mt-28">
        <Link href="/veterinarios"> {/* direciona pro marketingplace */}
          <h1 className="font-fraunces text-colortext hover:underline text-2xl md:text-4xl">
            Encontre o melhor Veterinário para você!
          </h1>
        </Link>
      </div>

      {/* Carrossel de Veterinários */}
      <div className="flex justify-center mt-10 mb-10">
        <CarouselVeterinarios veterinariansIds={veterinariansIds} />
      </div>

      <Divider
        sx={{ my: 0 }}
        className="border-2 border-[#1D7263] shadow-xl rounded-lg"
      />

      {/* Parte Tutor */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 bg-[#FFFDF8] px-4 md:px-0">
        {/* Coluna da esquerda */}
        <div className="flex flex-col justify-center ml-0 md:ml-48 text-center md:text-left">
          <h1 className="font-fraunces text-4xl md:text-5xl mb-4">Para Tutores</h1>
          <p className="font-open-sans md:text-2xl mb-8 md:mb-12">
            Entendemos que o seu tempo é <br /> precioso e que a saúde do seu pet é <br /> prioridade.
            Nossa plataforma oferece uma<br /> solução completa, onde você pode <br /> agendar consultas domiciliares ou <br /> teleconsultas com veterinários <br /> qualificados de forma rápida e <br /> prática.
          </p>
          <Image
            src="/assets/images/webTutor1.svg"
            alt="foto de tutor"
            width={220}
            height={200}
            className="hidden md:block"
          />
        </div>

        {/* Coluna da direita */}
        <div className="flex flex-col justify-center items-center gap-6 mt-8 md:mt-0 mr-0 md:mr-20">
          <Image
            src="/assets/images/webTutor2.svg"
            alt="gatinho"
            width={260}
            height={240}
            className="hidden md:block"
          />
          <p className="font-open-sans md:text-2xl text-center md:text-left mb-4">
            Esqueça a burocracia e as <br /> dificuldades no pagamento dos <br /> serviços veterinários.<br />
            Na SalveVet, você pode pagar <br /> diretamente pela plataforma usando <br /> PIX ou cartões de crédito, com total <br /> segurança e praticidade.<br />
            Experimente a conveniência e a <br /> confiança de cuidar do seu amigo <br /> peludo com a SalveVet.
          </p>
          <ButtonLoginTutor />
        </div>
      </div>

      <Divider
        sx={{ my: 0 }}
        className="border-2 border-[#1D7263] shadow-xl rounded-lg"
      />

      {/* Parte Veterinários */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 bg-[#DFD7FF] relative">
        {/* Título Centralizado no Topo */}
        <div className="absolute top-0 left-0 w-full flex justify-center mt-4">
          <h1 className="font-fraunces text-4xl md:text-5xl text-center">
            Para Veterinários
          </h1>
        </div>

        {/* Coluna da Esquerda com as Imagens */}
        <div className="flex flex-col justify-center items-start ml-0 md:ml-48 mt-20">
          <Image
            src="/assets/images/webVet1.svg"
            alt="imagem médica"
            width={220}
            height={200}
            className="mb-8"
          />
          <Image
            src="/assets/images/webVet2.svg"
            alt="veterinária"
            width={260}
            height={240}
            className="relative -ml-10 mt-4"
            style={{ zIndex: 10 }}
          />
        </div>

        {/* Coluna da Direita com h5 e p */}
        <div className="flex flex-col justify-center items-start gap-10 mt-8 md:mt-0 mr-0 md:mr-20">
          {/* Primeira dupla de h3 e p */}
          <div className="ml-0 md:ml-10">
            <h3 className="font-open-sans underline">Expanda Sua Base de Clientes com Facilidade:</h3>
            <p className="font-open-sans md:text-2xl mt-4">
              A SalveVet é a plataforma ideal para você, veterinário, <br />
              que deseja se conectar com novos clientes e expandir <br />
              sua base de atendimento. <br /> <br />
              Você pode oferecer consultas domiciliares e <br />
              teleconsultas, alcançando tutores de pets que <br />
              precisam dos seus serviços de maneira rápida e prática.
            </p>
          </div>

          {/* Segunda dupla de h5 e p */}
          <div className="ml-0 md:ml-20">
            <h3 className="font-open-sans underline">Perfil Profissional e Gestão Centralizada:</h3>
            <p className="font-open-sans md:text-2xl mt-4">
              Apresente-se de forma profissional com um <br />
              perfil completo na SalveVet e destaque suas <br />
              qualificações e especializações.<br /> <br />
              Gerencie suas consultas e documentações de <br />
              forma centralizada. <br /> <br />
              Simplifique a gestão de sua carreira e foque <br />
              no que você faz de melhor: cuidar dos animais.
            </p>
          </div>

          {/* Botão no lado direito */}
          <div className="self-end">
            <ButtonLoginVet />
          </div>

        </div>

      </div>

      {/* Carrossel de Posts do Blog */}
      <div className="flex justify-center mt-10 mb-10">
        <CarouselBlog postIds={postIds} />
      </div>

    </main>
  );
}
