import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect } from 'react';
import CardPostBlog from './cardpostblog';

interface CarouselBlogProps {
  postIds: string[]; // Lista de IDs dos posts
}

const CarouselBlog: React.FC<CarouselBlogProps> = ({ postIds }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1, align: 'center' });

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
      <div className="embla relative mx-auto" ref={emblaRef} style={{ maxWidth: '90%' }}>
        <div className="embla__container flex">
          {postIds.map(id => (
            <div className="embla__slide flex-[0_0_30%] " key={id}>
              <CardPostBlog id={id} />
            </div>
          ))}
        </div>
        <button
          className="embla__button embla__button--prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollPrev}
          style={{ background: 'none', border: 'none', color: '#000' }}
        >
          <ArrowBackIosIcon />
        </button>
        <button
          className="embla__button embla__button--next absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={scrollNext}
          style={{ background: 'none', border: 'none', color: '#000' }}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </QueryClientProvider>
  );
};

export default CarouselBlog;
