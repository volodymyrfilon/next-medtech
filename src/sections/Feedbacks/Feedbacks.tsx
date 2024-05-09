import { Title } from '@/components/shared/Title';
import { FeedbackSlider } from '@/components/shared/feedback/FeedbackSlider';

const data = [
  {
    feedback:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quod laborum placeat sunt non vitae minus iste asperiores commodi impedit. Facilis molestiae aliquid autem earum vero sint eligendi sed incidunt!',
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt perferendis, necessitatibus voluptatibus corporis facilis est, expedita commodi saepe fugiat facere eos, et dolore cumque exercitationem quos fuga numquam harum.',
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur earum, soluta rerum voluptatum consectetur vero voluptas sed? Molestiae, perspiciatis nostrum! Cupiditate dolorum illum tenetur corrupti ex id placeat quas.',
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur earum, soluta rerum voluptatum consectetur vero voluptas sed? Molestiae, perspiciatis nostrum! Cupiditate dolorum illum tenetur corrupti ex id placeat quas.',
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur earum, soluta rerum voluptatum consectetur vero voluptas sed? Molestiae, perspiciatis nostrum! Cupiditate dolorum illum tenetur corrupti ex id placeat quas.',
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aspernatur earum, soluta rerum voluptatum consectetur vero voluptas sed? Molestiae, perspiciatis nostrum! Cupiditate dolorum illum tenetur corrupti ex id placeat quas.',
  },
];

export const Feedbacks = () => {
  return (
    <section id="feedback" className="flex flex-col gap-y-8 overflow-x-hidden">
      <Title>Результати клієнтів</Title>
      <div className="flex h-[384px] w-full items-center justify-center rounded-[30px] bg-gray-500">
        IMAGE / VIDEO
      </div>

      <FeedbackSlider data={data} />
    </section>
  );
};
