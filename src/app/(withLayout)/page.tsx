import { ICONS } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Feedbacks } from '@/sections/Feedbacks';
import { Hero } from '@/sections/Hero';
import { Results } from '@/sections/Results';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <Button>default</Button>
      <Button disabled>disabled</Button>
      <Button variant="primary">primary</Button>
      <Button variant="black">dark</Button>
      <Button variant="white">white</Button>
      <Button variant="icon">
        <ICONS.ARROW_RIGHT className={`h-6 w-6`} aria-label={''} />
      </Button>
      <Link href={'/'}>
        <Button variant="black">
          Докладніше
          <ICONS.ARROW_RIGHT className={`h-6 w-6`} aria-label={''} />
        </Button>
      </Link>
      <Hero />
      <About />
      <Results />
      <Feedbacks />
      <Contact />
    </>
  );
};
export default page;
