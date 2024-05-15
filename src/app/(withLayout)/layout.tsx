import { ScrollBtn } from '@/components/shared/ScrollBtn';
import { Header } from '@/layout/Header';

const WithLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="mt-16 flex flex-col gap-y-8 px-5 2xl:mx-auto 2xl:w-[1440px]">
        {children}
        <ScrollBtn />
      </main>
    </>
  );
};

export default WithLayout;
