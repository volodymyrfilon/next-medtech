import { ReactNode, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CheckboxProps {
  className?: string;
  register: UseFormRegisterReturn;
  disabled?: boolean;
  title?: string;
  children?: ReactNode;
}

export const Checkbox = ({
  className = '',
  register,
  disabled = false,
  title,
  children,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex items-start">
      <div
        onClick={() => setIsChecked(!isChecked)}
        className={`ring-offset-background focus-visible:ring-ring peer h-6 w-6 flex-shrink-0 rounded bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      >
        <input type="checkbox" className="hidden" {...register} disabled={disabled} />
        <div
          className={`flex items-center justify-center rounded text-current ${disabled ? 'opacity-50' : ''} ${isChecked ? 'bg-accent-primary' : ''}`}
        >
          <svg
            className={`h-6 w-6 `}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13L9 17L19 7"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="ml-2">
        <div className="font-medium">{title}</div>
        <div className="font-eUkraine text-sm font-light opacity-70">{children}</div>
      </div>
    </div>
  );
};
