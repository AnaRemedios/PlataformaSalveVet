import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect } from 'react';
import CardVeterinarios from './cardveterinarios';


interface CarouselVeterinariosProps {
  veterinariansIds: string[]; // Lista de IDs
}

const CarouselVeterinarios: React.FC<CarouselVeterinariosProps> = ({ veterinariansIds }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: 'center', // Centraliza o carrossel
    breakpoints: {
      '(max-width: 640px)': { slidesToScroll: 1 }, // 1 slide visível em telas pequenas
      '(min-width: 641px) and (max-width: 1024px)': { slidesToScroll: 2 }, // 2 slides visíveis em tablets
      '(min-width: 1025px)': { slidesToScroll: 4 }, // 4 slides visíveis em telas grandes
    },
  });

  const queryClient = new QueryClient();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0);
        }
      });
    }
  }, [emblaApi]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container flex">
          {veterinariansIds.map(id => (
            <div className="embla__slide flex-[0_0_25%] " key={id}>
              <CardVeterinarios id={id} />
            </div>
          ))}
        </div>
        <button
          className="embla__button embla__button--prev absolute left-1 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollPrev}
          style={{ background: 'none', border: 'none', color: '#000' }}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className="embla__button embla__button--next absolute right-1 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollNext}
          style={{ background: 'none', border: 'none', color: '#000' }}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </QueryClientProvider>
  );
};

export default CarouselVeterinarios;
