import { Instagram, Mail, Send } from 'lucide-react';
import Link from 'next/link';

export const Socials = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex w-full gap-x-4 text-white [&>*]:focus:[&>*]:text-accent-primary lg:[&>*]:hover:[&>*]:text-accent-primary ${className}`}
    >
      <Link
        href="https://www.instagram.com/julisadhu_/"
        rel="nofollow noreffer"
        target="_blank"
        aria-label="Посилання на Інстаграм"
      >
        <Instagram className="h-7 w-7 " />
      </Link>
      <Link
        href="https://t.me/logvinenko_315"
        rel="nofollow noreffer"
        target="_blank"
        aria-label="Посилання на Телеграм"
      >
        <Send className="h-7 w-7 " />
      </Link>
      <Link
        href="mailto:julia.lohvynenko.psychology@gmail.com"
        rel="nofollow noreffer"
        target="_blank"
        aria-label="Відправити мейл"
      >
        <Mail className="h-7 w-7 " />
      </Link>
    </div>
  );
};
