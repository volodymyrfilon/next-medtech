import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  h1?: boolean;
  className?: string;
}

export const Title = ({ children, h1 = false, className }: TitleProps) => {
  const Tag = h1 ? 'h1' : 'h2';
  return (
    <Tag className={`text-center text-3xl text-[32px] font-bold leading-[38px] ${className}`}>
      {children}
    </Tag>
  );
};
