'use client';
import ButtonLoginTutor from "@/components/buttonlogintutor";
import ButtonLoginVet from "@/components/buttonloginvet";
import CardBuscar from "@/components/cardbuscar";
import CarouselBlog from "@/components/carouselpostblog";
import CarouselVeterinarios from "@/components/carouselveterinarios";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";



export default function Home() {

  const veterinariansIds = ['1', '2', '7', '8', '9', '10', '11']; // IDs dos veterinários simulados
  const postIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; // IDs dos posts simulados
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

      <div className="flex justify-center mt-28 p-8">
        <Link href="/veterinarios"> {/* direciona pro marketingplace */}
          <h1 className="font-fraunces text-colortext hover:underline text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 sm:mt-6 md:mt-10">
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
      <div className="flex flex-col items-center justify-between bg-[#FFFDF8] px-6 md:px-24 py-8">
        {/* Título Centralizado */}
        <h1 className="font-fraunces text-3xl md:text-4xl mb-4 text-center p-8">
          Para Tutores
        </h1>

        {/* Colunas */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Coluna da esquerda */}
          <div className="flex flex-col justify-center text-center md:text-left gap-6 p-10 md:ml-20">
            <p className="font-open-sans md:text-2xl mb-8 md:mb-0 sm:mb-0">
              Entendemos que o seu tempo é <br /> precioso e que a saúde do seu pet é <br /> prioridade.
              Nossa plataforma oferece uma<br /> solução completa, onde você pode <br /> agendar consultas domiciliares ou <br /> teleconsultas com veterinários <br /> qualificados de forma rápida e <br /> prática.
            </p>
            <Image
              src="/assets/images/webTutor1.svg"
              alt="foto de tutor"
              width={300}
              height={260}
              className="hidden md:block mx-auto md:mx-0"
            />
          </div>

          {/* Coluna da direita */}
          <div className="flex flex-col justify-center items-center text-center md:text-left gap-6 p-10  mt-8 md:mt-0 md:mr-20">
            <Image
              src="/assets/images/webTutor2.svg"
              alt="gatinho"
              width={300}
              height={260}
              className="md:block mx-auto md:mx-0 sm:mb-4 md:mb-0"
            />
            <p className="font-open-sans md:text-2xl mb-4">
              Esqueça a burocracia e as <br /> dificuldades no pagamento dos <br /> serviços veterinários.<br />
              Na SalveVet, você pode pagar <br /> diretamente pela plataforma usando <br /> PIX ou cartões de crédito, com total <br /> segurança e praticidade.<br />
              Experimente a conveniência e a <br /> confiança de cuidar do seu amigo <br /> peludo com a SalveVet.
            </p>
          </div>
        </div>

        {/* Botão Centralizado */}
        <div className="flex justify-center p-10">
          <ButtonLoginTutor />
        </div>
      </div>


      <Divider
        sx={{ my: 0 }}
        className="border-2 border-[#1D7263] shadow-xl rounded-lg"
      />

      {/* Parte Veterinários */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#DFD7FF] py-16 relative">
        {/* Título Centralizado no Topo */}
        <div className="absolute top-0 left-0 w-full flex justify-center">
          <h1 className="font-fraunces text-3xl md:text-4xl text-center p-6 mt-4 sm:mt-8">
            Para Veterinários
          </h1>
        </div>

        {/* Coluna da Esquerda com as Imagens */}
        <div className="flex flex-col justify-center items-center md:items-start ml-0 md:ml-48 mt-28">
          <Image
            src="/assets/images/webVet1.svg"
            alt="procedimento médico"
            width={300}
            height={260}
            className="mb-4 sm:mb-8 ml-0 md:ml-10"
          />
          {/* Esconder a segunda imagem em telas pequenas */}
          <Image
            src="/assets/images/webVet2.svg"
            alt="veterinária"
            width={300}
            height={260}
            className="relative -ml-10 mt-4 hidden md:block"
            style={{ zIndex: 10 }}
          />
        </div>

        {/* Coluna da Direita com h3 e p */}
        <div className="flex flex-col justify-center items-center md:items-start gap-8 mt-8 md:mt-0 mr-0 md:mr-20 text-center md:text-left">
          {/* Primeira dupla de h3 e p */}
          <div className="ml-0 md:ml-8 mr-10">
            <h2 className="font-open-sans underline md:text-2xl text-xl">Expanda Sua Base de Clientes com Facilidade:</h2>
            <p className="font-open-sans md:text-2xl mt-4 text-base">
              A SalveVet é a plataforma ideal para você, veterinário, <br className="hidden md:block" />
              que deseja se conectar com novos clientes e expandir <br className="hidden md:block" />
              sua base de atendimento. <br /> <br />
              Você pode oferecer consultas domiciliares e <br />
              teleconsultas, alcançando tutores de pets de maneira rápida e prática.
            </p>
          </div>

          {/* Segunda dupla de h3 e p */}
          <div className="ml-0 md:ml-40">
            <h2 className="font-open-sans underline md:text-2xl text-xl">Perfil Profissional e Gestão Centralizada:</h2>
            <p className="font-open-sans md:text-2xl mt-4 text-base">
              Apresente-se de forma profissional com um <br className="hidden md:block" />
              perfil completo na SalveVet e destaque suas <br className="hidden md:block" />
              qualificações e especializações.<br /> <br />
              Gerencie suas consultas e documentações de <br className="hidden md:block" />
              forma centralizada.
            </p>
          </div>

          {/* Botão Centralizado na Direção do Título */}
          <div className="self-center mt-8">
            <ButtonLoginVet />
          </div>
        </div>
      </div>



      <Divider
        sx={{ my: 0 }}
        className="border-2 border-[#1D7263] shadow-xl rounded-lg"
      />

      <div className="flex justify-center p-16">
        <Link href="/blog"> {/* direciona pro blog */}
          <h1 className="font-fraunces text-colortext hover:underline text-2xl md:text-4xl">
            Confira os conteúdos do nosso Blog
          </h1>
        </Link>
      </div>

      {/* Carrossel de Posts do Blog */}
      <div className="flex justify-center mt-10 mb-10">
        <CarouselBlog postIds={postIds} />
      </div>

      <Divider
        sx={{ my: 0 }}
        className="border-2 border-[#1D7263] shadow-xl rounded-lg"
      />

      <Footer />
    </main>
  );
}
