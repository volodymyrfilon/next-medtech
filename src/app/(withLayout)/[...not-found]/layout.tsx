import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Не знайдено | Терапія Душі',
};

const Layout404 = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout404;
