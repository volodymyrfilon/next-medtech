import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Політика конфіденційності',
  robots: {
    index: false,
    follow: true,
  },
};

const WithoutLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default WithoutLayout;
