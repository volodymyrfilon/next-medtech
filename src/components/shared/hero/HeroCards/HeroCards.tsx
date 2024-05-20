import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ServiceProps } from '@/sections/Hero';
import { ChevronRight } from 'lucide-react';

interface HeroCardsProps {
  className?: string;
  services: ServiceProps[];
  modalData: string;
}

export const HeroCards = ({ className, services, modalData }: HeroCardsProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 ${className}`}
    >
      {services.map((service, index) => (
        <Card
          variant={service.variant}
          title={service.title}
          link={service.link}
          key={index}
          className={`w-full duration-300 md:h-52 lg:hover:scale-105 ${service.layer}`}
        >
          <Button variant="icon" className="bg-white" aria-label={service.title}>
            <ChevronRight className="h-5 w-5 text-accent-dark" />
          </Button>
        </Card>
      ))}
    </div>
  );
};
