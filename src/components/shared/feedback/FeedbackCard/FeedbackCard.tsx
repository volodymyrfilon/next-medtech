import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { ICONS } from '../../icons';

export const FeedbackCard = ({
  data,
}: {
  data: {
    category?: string;
    feedback: string;
  };
}) => {
  return (
    <div className="relative flex min-h-[570px] select-none flex-col items-center gap-y-6 rounded-[30px] bg-accent-gray px-8 py-16 sm:min-h-[460px]">
      <ICONS.QUOTE className="absolute left-8 top-8 w-7 fill-accent-primary" />
      <div className="absolute right-7 top-7 flex items-center justify-center gap-x-2 rounded-[20px] bg-accent-primary px-3 py-1.5 font-didactGothic text-sm text-white">
        {data.category}
      </div>
      <p className="mt-2 text-center font-didactGothic opacity-70">{data.feedback}</p>
      <Link
        href="https://www.instagram.com/julisadhu_/"
        rel="nofollow noreffer"
        target="_blank"
        className="mt-auto"
      >
        <Button
          variant="icon"
          className="!bg-accent-primary"
          aria-label="Перейти на сторінку в Інстаграм"
        >
          <Instagram className="h-5 w-5 stroke-white" />
        </Button>
      </Link>
      <ICONS.QUOTE className="absolute bottom-8 right-8 w-7 rotate-180 fill-accent-primary" />
    </div>
  );
};
