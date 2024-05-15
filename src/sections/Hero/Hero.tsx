import { Title } from '@/components/shared/Title';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';

interface ServiceProps {
  buttonClassName?: string;
  variant: 'primary' | 'gray';
  title: string;
  link: string;
  icon: ReactNode;
  layer?: string;
}

const services: ServiceProps[] = [
  {
    buttonClassName: 'border border-accent-dark/10 focus:outline-accent-dark/10',
    variant: 'gray',
    title: 'Цвяхотерапія',
    link: '/',
    icon: <Plus className="h-5 w-5 text-accent-dark" />,
    // layer: 'bg-sadhu-layer',
  },
  {
    buttonClassName: 'border border-accent-dark/10 focus:outline-accent-dark/10',
    variant: 'gray',
    title: 'Розбір Матриці Долі',
    link: '/',
    icon: <Plus className="h-5 w-5 text-accent-dark" />,
    // layer: 'bg-matrix-layer',
  },
  {
    buttonClassName: 'border border-accent-dark/10 focus:outline-accent-dark/10',
    variant: 'gray',
    title: 'МАК-карти',
    link: '/',
    icon: <Plus className="h-5 w-5 text-accent-dark" />,
    // layer: 'bg-cards-layer',
  },
  {
    buttonClassName: 'bg-white',
    variant: 'primary',
    title: 'Записатися на консультацію',
    link: '/',
    icon: <ChevronRight className="h-5 w-5 text-accent-dark" />,
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
          className="w-auto object-contain"
        />
      </div>
      <div className="col-span-full grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 xl:col-span-1 xl:grid-cols-2 xl:grid-rows-2">
        {services.map((service, index) => (
          <Card
            variant={service.variant}
            title={service.title}
            link={service.link}
            key={index}
            className={`w-full bg-cover bg-center bg-no-repeat md:h-52 ${service.layer}`}
          >
            <Button variant="icon" className={service.buttonClassName} aria-label={service.title}>
              {service.icon}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};
