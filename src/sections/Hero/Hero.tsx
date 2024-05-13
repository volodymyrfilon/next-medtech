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
}

const services: ServiceProps[] = [
  {
    buttonClassName: 'border border-accent-dark/10 focus:outline-accent-dark/10',
    variant: 'gray',
    title: 'Цвяхотерапія',
    link: '/',
    icon: <Plus className="h-5 w-5 text-accent-dark" />,
  },
  {
    buttonClassName: 'border border-accent-dark/10 focus:outline-accent-dark/10',
    variant: 'gray',
    title: 'Розбір Матриці Долі',
    link: '/',
    icon: <Plus className="h-5 w-5 text-accent-dark" />,
  },
  {
    buttonClassName: 'border border-accent-dark/10 focus:outline-accent-dark/10',
    variant: 'gray',
    title: 'МАК-карти',
    link: '/',
    icon: <Plus className="h-5 w-5 text-accent-dark" />,
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
    <section id="hero" className="mt-8">
      <Title h1>
        Нумеролог та цвяхотерапевт <span className="text-accent-primary">Юлія Логвиненко</span>
      </Title>
      <div className="mt-6 flex h-[342px] w-80 items-end justify-center rounded-[30px] bg-accent-gray bg-matrix-layer bg-contain bg-center bg-no-repeat ">
        <Image
          src="/images/hero/author.png"
          alt="Image of author"
          height={230}
          width={230}
          priority
          className=""
        />
      </div>
      <div className="mt-8 flex flex-col gap-y-4">
        {services.map((service, index) => (
          <Card variant={service.variant} title={service.title} link={service.link} key={index}>
            <Button variant="icon" className={service.buttonClassName} aria-label={service.title}>
              {service.icon}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};
