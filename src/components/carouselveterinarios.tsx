import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Slider from "react-slick";
import CardVeterinarios from './cardveterinarios';

interface CarouselVeterinariosProps {
  veterinariansIds: string[]; // Lista de IDs
}

const CarouselVeterinarios: React.FC<CarouselVeterinariosProps> = ({ veterinariansIds }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const queryClient = new QueryClient(); // Criação do QueryClient

  return (
    <QueryClientProvider client={queryClient}>
      <Slider {...settings}>
        {veterinariansIds.map(id => (
          <CardVeterinarios key={id} id={id} />
        ))}
      </Slider>
    </QueryClientProvider>
  );
};

export default CarouselVeterinarios;
