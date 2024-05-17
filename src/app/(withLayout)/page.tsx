import { About } from '@/sections/About';
import { Certificates } from '@/sections/Certificates';
import { Contact } from '@/sections/Contact';
import { Feedbacks } from '@/sections/Feedbacks';
import { Hero } from '@/sections/Hero';
import { Results } from '@/sections/Results';

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Certificates />
      <Results />
      <Feedbacks />
      <Contact />
    </>
  );
};
export default page;
