import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  h1?: boolean;
  className?: string;
}

export const Title = ({ children, h1 = false, className = '' }: TitleProps) => {
  const Tag = h1 ? 'h1' : 'h2';
  return (
    <Tag
      className={`text_32px text-center text-3xl font-bold lg:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </Tag>
  );
};
