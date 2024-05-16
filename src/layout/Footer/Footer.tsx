import { Socials } from '@/components/shared/Socials';
import Link from 'next/link';
import { Logo } from '../Logo';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`flex flex-col gap-y-8 rounded-[30px] bg-accent-dark px-10 py-12 text-white ${className}`}
    >
      <Logo white animateOnHover />
      <Socials />
      {/* privacy policy & copyright*/}
      <div className="mt-auto text-xs">
        <Link
          href="/privacy-policy"
          className=" underline hover:text-accent-primary focus:text-accent-primary"
        >
          Умови користування та Політика конфіденційності.
        </Link>
        <div className="mt-1">
          Copyright 2024©
          <Link
            href="https://www.linkedin.com/in/volodymyr-filon/"
            className="underline hover:text-accent-primary focus:text-accent-primary"
            rel="nofollow noreffer"
            target="_blank"
          >
            Volodymyr Filon
          </Link>
          .&nbsp;Усі права захищено.
        </div>
      </div>
    </footer>
  );
};
