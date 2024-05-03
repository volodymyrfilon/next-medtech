import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';

const WithLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default WithLayout;
