import Link from 'next/link';
import { ReactNode } from 'react';

interface CardProps {
  number?: number;
  title?: string;
  subtitle?: string;
  link?: string;
  isExternalLink?: boolean;
  variant?: 'primary' | 'gray';
  className?: string;
  children?: ReactNode;
  childrenContainerClassName?: string;
  buttonEnd?: boolean;
}

export const Card = ({
  number,
  title,
  subtitle,
  link,
  isExternalLink = false,
  variant,
  className = '',
  children,
  buttonEnd = true,
}: CardProps) => {
  return (
    <div
      className={`flex h-auto w-full flex-col gap-y-8 rounded-[30px] px-8 text-xl font-bold ${variant === 'primary' ? 'bg-accent-primary text-white' : 'bg-accent-gray text-accent-dark'} ${number ? 'min-h-[339px] items-center py-12 text-center' : ' items-end justify-between gap-y-10 py-8'} ${className}`}
    >
      {number ? (
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-primary text-white">
          {number}
        </span>
      ) : null}
      {title ? <h3 className={number ? '' : 'mr-auto'}>{title}</h3> : null}
      {subtitle ? (
        <p className="font-didactGothic text-base font-normal opacity-70">{subtitle}</p>
      ) : null}
      {link ? (
        <Link
          href={link}
          target={isExternalLink ? '_blank' : ''}
          rel={isExternalLink ? 'nofollow noreffer' : ''}
          className={`${number && children ? 'absolute' : ''} ${buttonEnd ? '' : 'mr-auto'}`}
        >
          {children}
        </Link>
      ) : null}
    </div>
  );
};
