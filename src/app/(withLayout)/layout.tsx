import { ScrollBtn } from '@/components/shared/ScrollBtn';
import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';

const WithLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-16 px-5">{children}</main>
      <Footer />
      <ScrollBtn />
    </>
  );
};

export default WithLayout;
