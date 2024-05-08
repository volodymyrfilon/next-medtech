import { ICONS } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Feedbacks } from '@/sections/Feedbacks';
import { Hero } from '@/sections/Hero';
import { Results } from '@/sections/Results';

const page = () => {
  return (
    <>
      <Card
        number={3}
        title="Як створюються проблеми"
        subtitle="Виявимо, як ваш мозок створює проблему за допомогою мислення."
      ></Card>
      <Card
        title="Комунікація
        та відносини"
        link="/"
      >
        <Button variant="icon" className="border border-accent-dark/10">
          <ICONS.ADD className="h-6 w-6 fill-accent-dark" />
        </Button>
      </Card>
      <Card
        variant="primary"
        title="Безкоштовна зустріч"
        subtitle="Познайомимося, обговоримо, як можна вирішити проблему на наступних зустрічах."
        link="/"
        number={6}
      >
        <Button variant="icon" className="bg-white">
          <ICONS.ARROW_RIGHT className="h-6 w-6 fill-accent-dark" />
        </Button>
      </Card>
      <Hero />
      <About />
      <Results />
      <Feedbacks />
      <Contact />
    </>
  );
};
export default page;
