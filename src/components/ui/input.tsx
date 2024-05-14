import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <>
        <input
          className={`flex h-20 w-full items-center rounded-[20px] px-4 text-sm font-light outline-accent-primary ${className}`}
          type={type}
          ref={ref}
          {...props}
        />
        {error && <span className="-mt-3 text-sm text-red-500">{error}</span>}
      </>
    );
  }
);

Input.displayName = 'Input';
