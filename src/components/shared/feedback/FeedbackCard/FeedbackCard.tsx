import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ICONS } from '../../icons';

export const FeedbackCard = ({ data }: { data: string }) => {
  return (
    <div className="relative flex flex-col items-center gap-y-6 rounded-[30px] bg-accent-gray px-12 py-16">
      <ICONS.QUOTE className="absolute left-8 top-8 w-7 fill-accent-primary" />
      <p className="text-center font-eUkraine text-base font-extralight">{data}</p>
      <Link href="https://www.instagram.com/julisadhu_/" rel="nofollow noreffer" target="_blank">
        <Button variant="icon" className=" !bg-accent-primary">
          <ICONS.INSTAGRAM className="h-6 w-6 fill-white" />
        </Button>
      </Link>
      <ICONS.QUOTE className="absolute bottom-8 right-8 w-7 rotate-180 fill-accent-primary" />
    </div>
  );
};
