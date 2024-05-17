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
    title: 'Вивчаємо Ваш запит',
    subtitle:
      'Якщо це цвяхотерапія - при зустрічі. Якщо це Матриця Долі - відразу. Якщо Ви хочете, щоб я проаналізувала вашу Матриці для роботи зі цвяхами, то відповідно обговорюємо проблему відразу.',
  },
  {
    number: 2,
    title: 'Аналізуємо',
    subtitle:
      'Я задаю Вам питання - шукаємо корінь проблеми і саме з ним починаємо працювати. Наприклад Вам тяжко робити вибір в житті - проблема з дитинства, з батьками - працюємо спочатку з цим. В Матриці все простіше і я відразу Вам говорю чому так, а Ви вже мені підказуєте. ',
  },
  {
    number: 3,
    title: 'Інструктаж',
    subtitle:
      'Я пояснюю Вам, як пройти больовий поріг, про що думає Ваш мозок під час цвяхотерапії, налаштовую на практику, підключаю медитацію за потреби.',
  },
  {
    number: 4,
    title: 'Трансформація проблеми',
    subtitle:
      'З точно сформульованим запитом, ми стаємо на цвяхи, проходимо біль на перших секундах і йдемо далі в трансформацію, вчимося чути себе і своє тіло, розслабляємося і відпускаємо образи.',
  },
  {
    number: 5,
    title: 'Час змін',
    subtitle:
      'Після того, як Ви будете готові - обережно сходимо з дошки Садху, обговорюємо весь процес, про що він, що дав для Вас. Закріплюємо картами МАК за потреби і відслідковуємо стан протягом двох тижнів.',
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
