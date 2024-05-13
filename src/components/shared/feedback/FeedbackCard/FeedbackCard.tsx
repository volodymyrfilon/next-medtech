import { Button } from '@/components/ui/button';
import { BadgeInfo, Instagram } from 'lucide-react';
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
    <div className="relative flex min-h-[500px] flex-col items-center justify-between gap-y-6 rounded-[30px] bg-accent-gray px-8 py-16">
      <ICONS.QUOTE className="absolute left-8 top-8 w-7 fill-accent-primary" />
      <div className="font-didactGothic flex items-center justify-center gap-x-2 rounded-[20px] bg-accent-primary px-2.5 py-1.5 text-white">
        <BadgeInfo className="h-5 w-5 stroke-1" />
        {data.category}
      </div>
      <p className="font-didactGothic text-center opacity-70">{data.feedback}</p>
      <Link href="https://www.instagram.com/julisadhu_/" rel="nofollow noreffer" target="_blank">
        <Button variant="icon" className=" !bg-accent-primary">
          <Instagram className="h-5 w-5 stroke-white" />
        </Button>
      </Link>
      <ICONS.QUOTE className="absolute bottom-8 right-8 w-7 rotate-180 fill-accent-primary" />
    </div>
  );
};
