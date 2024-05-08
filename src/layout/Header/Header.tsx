import { MobileMenu } from '@/components/shared/header/MobileMenu';
import { Navigation } from '@/components/shared/header/Navigation';
import { Logo } from '../Logo';

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-white/50 px-8 font-eUkraine font-light">
      <Logo />
      <Navigation containerStyles="hidden lg:flex" />
      <MobileMenu />
    </header>
  );
};
