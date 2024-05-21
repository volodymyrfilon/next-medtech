import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'black' | 'white' | 'icon';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  disabled = false,
  children,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center rounded-full px-5 py-2.5 font-eUkraine text-xs font-light outline-none duration-300 active:scale-90 active:outline-none [&>*]:duration-300 ${className} ${
        !disabled
          ? variant === 'primary'
            ? 'bg-accent-primary text-white focus:outline-accent-primary  lg:hover:bg-accent-primary/50 [&>*]:lg:hover:translate-x-3'
            : variant === 'black'
              ? 'bg-accent-dark text-white focus:outline-accent-dark  lg:hover:bg-accent-dark/50 [&>*]:lg:hover:translate-x-3'
              : variant === 'icon'
                ? 'rounded-full bg-transparent !p-3 focus:outline-white'
                : 'bg-white focus:outline-white lg:hover:text-accent-dark/50 [&>*]:lg:hover:translate-x-3'
          : 'pointer-events-none bg-gray-200 text-gray-400'
      }`}
      onClick={onClick}
      {...props}
    >
      <>{children}</>
    </button>
  );
};
