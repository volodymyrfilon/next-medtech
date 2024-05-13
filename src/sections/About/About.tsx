import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const aboutData: { title: string; text: string }[] = [
  {
    title: 'Про мене',
    text: 'Я приватний психолог та психотерапевт. Практикую протягом 6 років, самою психологією займаюся протягом 9 років. Маю диплом вищої спеціальної психологічної освіти, сертифікований спеціаліст НЛП. Використовую найсильніші методики цієї школи, спрямовані на терапію, щоб викликати зміни.',
  },
  {
    title: 'Про метод',
    text: 'Я приватний психолог та психотерапевт. Практикую протягом 6 років, самою психологією займаюся протягом 9 років. Маю диплом вищої спеціальної психологічної освіти, сертифікований спеціаліст НЛП. Використовую найсильніші методики цієї школи, спрямовані на терапію, щоб викликати зміни.',
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-y-12 rounded-[30px] bg-accent-dark px-10 py-12"
    >
      {aboutData.map((item, index) => (
        <div key={index} className="flex flex-col gap-y-8">
          <h3 className="text_32px font-bold text-white">{item.title}</h3>
          <p className="font-didactGothic text-white/70">{item.text}</p>
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
