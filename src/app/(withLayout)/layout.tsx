import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';

const WithLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-16 px-8">{children}</main>
      <Footer />
    </>
  );
};

export default WithLayout;
