import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Feedbacks } from '@/sections/Feedbacks';
import { Hero } from '@/sections/Hero';
import { Results } from '@/sections/Results';
import { FC } from 'react';

const page: FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Results />
      <Feedbacks />
      <Contact />
    </main>
  );
};

export default page;
