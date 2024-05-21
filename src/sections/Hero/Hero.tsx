import Image from 'next/image';

import { Title } from '@/components/shared/Title';
import { HeroCards } from '@/components/shared/hero/HeroCards';

export interface ServiceProps {
  variant: 'primary' | 'gray';
  title: string;
  link: string;
  layer?: string;
}

const services: ServiceProps[] = [
  {
    variant: 'gray',
    title: 'Цвяхотерапія',
    link: '/#services',
    layer: 'bg-sadhu bg-cover bg-center bg-no-repeat',
  },
  {
    variant: 'gray',
    title: 'Розбір Матриці Долі',
    link: '/#services',
    layer: 'bg-matrix bg-cover bg-center bg-no-repeat',
  },
  {
    variant: 'gray',
    title: 'МАК-карти',
    link: '/#services',
    layer: 'bg-cards bg-cover bg-center bg-no-repeat',
  },
  {
    variant: 'primary',
    title: 'Записатися на консультацію',
    link: '/#contact',
  },
];

export const Hero = () => {
  return (
    <section
      id="hero"
      className="mt-8 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-rows-2"
    >
      <Title h1 className="w-full md:pl-10 md:pt-10 md:text-left xl:pl-20">
        Нумеролог та цвяхотерапевт <span className="text-accent-primary">Юлія Логвиненко</span>
      </Title>
      <div className="relative flex h-[342px] w-full items-end justify-center rounded-[30px] bg-accent-gray bg-matrix-layer bg-contain bg-center bg-no-repeat sm:h-[400px] md:row-span-full md:h-[438px] lg:h-[570px] xl:row-span-full xl:h-full">
        <Image
          src="/images/hero/author.webp"
          alt="Image of author"
          fill
          priority
          sizes="50vw"
          className="w-auto object-contain"
        />
      </div>
      <HeroCards
        className="col-span-full xl:col-span-1 xl:grid-cols-2 xl:grid-rows-2"
        services={services}
        modalData="zazaza"
      />
    </section>
  );
};
