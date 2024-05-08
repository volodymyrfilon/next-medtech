import Image from 'next/image';
import Link from 'next/link';

import { ICONS } from '@/components/shared/icons';

const page = () => {
  return (
    <section className="flex h-screen select-none flex-col items-center justify-center px-8">
      <h1 className="h1 extended text-center">Сторінку не знайдено! :(</h1>
      <Image
        src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif"
        priority
        height={500}
        width={650}
        alt={`Сторінку не знайдено!`}
      />
      <Link href="/" className="flex items-center gap-x-2">
        {/* <Button className="flex items-center gap-x-2"> */}
        <ICONS.ARROW_LEFT className={`h-6 w-6`} aria-label={''} />
        На головну
        {/* </Button> */}
      </Link>
    </section>
  );
};

export default page;