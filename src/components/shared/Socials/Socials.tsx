import { Instagram, Send } from 'lucide-react';
import Link from 'next/link';

export const Socials = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex w-full gap-x-4 ${className}`}>
      <Link href="https://www.instagram.com/julisadhu_/" rel="nofollow noreffer" target="_blank">
        <Instagram className="h-7 w-7 stroke-white hover:stroke-accent-primary" />
      </Link>
      <Link href="https://t.me/logvinenko_315" rel="nofollow noreffer" target="_blank">
        <Send className="h-7 w-7 stroke-white hover:stroke-accent-primary" />
      </Link>
    </div>
  );
};
