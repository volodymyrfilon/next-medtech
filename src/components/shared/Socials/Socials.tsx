import Link from 'next/link';
import { ICONS } from '../icons';

export const Socials = ({ containerStyles }: { containerStyles?: string }) => {
  return (
    <div className={`flex w-full gap-x-4 ${containerStyles}`}>
      <Link href="https://www.instagram.com/julisadhu_/" rel="nofollow noreffer" target="_blank">
        <ICONS.INSTAGRAM className="h-10 w-10 fill-white hover:fill-accent-primary" />
      </Link>
      <Link href="https://t.me/logvinenko_315" rel="nofollow noreffer" target="_blank">
        <ICONS.TELEGRAM className="h-10 w-10 fill-white hover:fill-accent-primary" />
      </Link>
    </div>
  );
};
