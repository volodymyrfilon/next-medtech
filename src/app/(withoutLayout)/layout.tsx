import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Політика конфіденційності',
};

const WithoutLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default WithoutLayout;
