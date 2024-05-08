import { Title } from '@/components/shared/Title';
import { ICONS } from '@/components/shared/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface result {
  number: number;
  title: string;
  subtitle: string;
}

const results: result[] = [
  {
    number: 1,
    title: 'Вивчаємо проблему',
    subtitle: 'Детально вивчимо проблему, поставимо чітку та зрозумілу мету.',
  },
  {
    number: 2,
    title: 'Змінюємо сенс проблеми',
    subtitle: 'Змінимо старий сенс, що вкладався в проблему і створимо новий.',
  },
  {
    number: 3,
    title: 'Як створюються проблеми',
    subtitle: 'Виявимо, як ваш мозок створює проблему за допомогою мислення.',
  },
  {
    number: 4,
    title: 'Трансформація проблеми',
    subtitle: 'Внесемо необхідні ресурси для трансформації проблеми.',
  },
  {
    number: 5,
    title: 'Закріплення змін',
    subtitle: 'Закріпимо зміни, щоб вони стали автоматичними.',
  },
];

export const Results = () => {
  return (
    <section id="result" className="grid grid-cols-1 grid-rows-1 gap-y-8">
      <Title>Що ви отримаєте від зустрічей?</Title>
      <Card
        subtitle="Після проведення першої безкоштовної зустрічі ви озвучуєте свою проблему і що хочете натомість. І ми йдемо до цього результату упродовж п'яти зустрічей. Кожна зустріч має свою мету, відповідно після кожної ви отримуєте свої результати:"
        link="/"
        buttonEnd={false}
        className="!px-10 !py-12"
      >
        <Button
          variant="black"
          className="flex w-[152px] gap-x-1"
          aria-label="Читати результати проведеної зустрічі"
        >
          Докладніше
          <ICONS.ARROW_RIGHT className="h-6 w-6 fill-white" />
        </Button>
      </Card>
      <div className="flex flex-col gap-y-4">
        {results.map(result => (
          <Card
            variant="gray"
            key={result.number}
            number={result.number}
            title={result.title}
            subtitle={result.subtitle}
          />
        ))}
      </div>
      <Card
        variant="primary"
        number={1}
        title="Записатися на зустріч"
        subtitle="Познайомимося, обговоримо, як можна вирішити проблему на наступних зустрічах."
        link="/"
      >
        <Button variant="icon" className="bg-white" aria-label="Записатися на зустріч">
          <ICONS.ARROW_RIGHT className="h-6 w-6 fill-accent-dark" />
        </Button>
      </Card>
    </section>
  );
};
