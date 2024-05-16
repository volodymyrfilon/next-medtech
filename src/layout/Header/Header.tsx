import { MobileMenu } from '@/components/shared/header/MobileMenu';
import { Navigation } from '@/components/shared/header/Navigation';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className="3xl:mx-auto 3xl:w-[1920px] fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-white/95 px-5 xl:px-8">
      <Logo animateOnHover />
      <Navigation className="hidden lg:flex" />
      <MobileMenu />
    </header>
  );
};
