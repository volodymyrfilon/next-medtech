import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Не знайдено | Терапія Душі',
  robots: {
    index: false,
    follow: false,
  },
};

const Layout404 = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout404;
