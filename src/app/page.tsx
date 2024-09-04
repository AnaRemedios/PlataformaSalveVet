'use client';
import CardBuscar from "@/components/cardbuscar";
import CarouselVeterinarios from "@/components/carouselveterinarios";
import Navbar from "@/components/navbar";
import { Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";



export default function Home() {

  const veterinariansIds = ['1', '2', '7', '8', '9', '10', '11']; // IDs dos veterinários simulados

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

      <Divider className="border-2 border-[#1D7263] my-5 shadow-xl rounded-lg" />

    </main>
  );
}
