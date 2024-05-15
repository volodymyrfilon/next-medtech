import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const page = () => {
  return (
    <section
      className="flex h-[90vh] select-none flex-col items-center justify-center"
      id="not-found"
    >
      <h1 className="h1 extended text-center">Сторінку не знайдено! :(</h1>
      <Image
        src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif"
        priority
        height={500}
        width={650}
        alt={`Сторінку не знайдено!`}
      />
      <Link href="/" className="flex items-center gap-x-2 text-white">
        <Button
          variant="primary"
          className="flex items-center gap-x-2 [&>*]:hover:!-translate-x-3"
          aria-label="Повернутись на головну сторінку"
        >
          <ChevronLeft className="h-5 w-5" />
          На головну
        </Button>
      </Link>
    </section>
  );
};

export default page;
