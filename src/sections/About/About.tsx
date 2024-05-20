import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { replaceText } from '../../../utils/formatText';

const aboutData: { title: string; text: string }[] = [
  {
    title: 'Про мене',
    text: 'Я практикуючий провідник з цвяхостояння та нумеролог з методом розбору Матриці Долі. Навчаюсь на психолога в європейському університеті на магістратурі. Удосконалюю свої знання і навички додатковими вузькопрофільними курсами. Вже 2 роки допомагаю своїм довірникам змінювати своє життя, долати страхи, чути своє тіло, прислухатися до справжньої себе, проживати емоції в екологічний спосіб. Від пів року консультую своїх клієнтів, розбираючи їхні Матриці Долі, даю інструкцію до життя і все детально пояснюю; за потреби працюємо з картами МАК і пропрацювуємо блоки - проблеми на рівні підсвідомості.',
  },
  {
    title: 'Про метод',
    text: 'Працюю під Ваш запит, який найбільше турбує на даний момент в житті. За допомогою дошки Садху, ми відслідковуємо реакцію тіла на ситуацію, і в цілому, де є блоки і пропрацьовуємо їх. З глибин підсвідомості дістаємо інформацію, яку давно приховуємо від себе або не усвідомлюємо чи просто не хочемо. Це чудовий спосіб, щоб розслабитися, почути і обрати себе, випустити емоції і вийти із кабінету з чистими думками і ясною головою. /paragraph/ Розбір Матриці Долі - це чудовий метод самопізнання. Працююємо під Ваш запит з вашими енергіями. На консультації пояснюю все простими і зрозумілими словами, висилаю ще все в текстовому форматі, де окрім енергій, описую, як їх пропрацювати, де краще наповнюватися енергією та з чого почати. /paragraph/ Звісно ж завжди залишаюсь на зв’язку і відповідаю на всі питання, якщо щось не зрозуміло чи просто потрібна моя підтримка.',
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-x-10 gap-y-12 rounded-[30px] bg-accent-dark px-10 py-12 md:flex-row md:justify-between xl:gap-x-32"
    >
      {aboutData.map((item, index) => (
        <div key={index} className="flex flex-col gap-y-8 ">
          <h2 className="text_32px font-bold text-white">{item.title}</h2>
          <p className="font-didactGothic text-white/70">{replaceText(item.text)}</p>
          <Button
            variant="white"
            className="flex w-[152px] gap-x-1"
            aria-label={`Докладніше ${item.title}`}
          >
            Докладніше
            <ChevronRight className="h-5 w-5 text-accent-dark" />
          </Button>
        </div>
      ))}
    </section>
  );
};
