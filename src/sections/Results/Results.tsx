import { Title } from '@/components/shared/Title';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

interface result {
  number: number;
  title: string;
  subtitle: string;
}

const results: result[] = [
  {
    number: 1,
    title: 'Формуємо запит',
    subtitle: 'Конкретизуємо та аналізуємо Ваш запит для розуміння проблеми.',
  },
  {
    number: 2,
    title: 'Аналізуємо',
    subtitle: 'Я задаю Вам питання - шукаємо корінь проблеми і саме з ним починаємо працювати.',
  },
  {
    number: 3,
    title: 'Інструктаж',
    subtitle:
      'Я пояснюю Вам, як пройти больовий поріг, про що думає Ваш мозок під час цвяхотерапії.',
  },
  {
    number: 4,
    title: 'Трансформація проблеми',
    subtitle: 'Стаємо на цвяхи, проходимо біль, трансформуємо проблему, розслабляємося.',
  },
  {
    number: 5,
    title: 'Час змін',
    subtitle:
      'Обговорюємо процес після сходження з дошки Садху, закріплюємо результат, відслідковуємо стан.',
  },
];

export const Results = () => {
  return (
    <section
      id="result"
      className="grid grid-cols-1 grid-rows-1 gap-5 md:grid-cols-2 xl:grid-cols-5 xl:grid-rows-2"
    >
      <Title className="md:pl-10 md:pt-10 md:text-left xl:col-span-2">
        Що ви отримаєте від зустрічей?
      </Title>
      <Card
        className="!px-10 !py-12 xl:col-span-2"
        subtitle="Після проведення першої зустрічі ви озвучуєте свою проблему і що хочете натомість. І ми йдемо до цього результату упродовж дукількох зустрічей. Кожна зустріч має свою мету, відповідно після кожної ви отримуєте свої результати:"
        link="/"
        buttonEnd={false}
      >
        <Button
          variant="black"
          className="flex w-[152px] gap-x-1"
          aria-label="Читати результати проведеної зустрічі"
        >
          Докладніше
          <ChevronRight className="h-5 w-5 text-white" />
        </Button>
      </Card>
      {results.map(result => (
        <Card
          className="xl:row-span-1 "
          variant="gray"
          key={result.number}
          number={result.number}
          title={result.title}
          subtitle={result.subtitle}
        />
      ))}
      <Card
        className="xl:col-start-5 xl:row-start-1"
        variant="primary"
        number={1}
        title="Записатися на зустріч"
        subtitle="Познайомимося, обговоримо, як можна вирішити проблему на наступних зустрічах."
        link="/#contact"
      >
        <Button variant="icon" className="bg-white" aria-label="Записатися на зустріч">
          <ChevronRight className="h-6 w-6 text-accent-dark" />
        </Button>
      </Card>
    </section>
  );
};
