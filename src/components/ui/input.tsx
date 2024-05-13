import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className="rounded-[20px] px-4 py-[30px] font-light outline-accent-primary"
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
