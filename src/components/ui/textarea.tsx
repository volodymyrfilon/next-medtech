import { UseFormRegisterReturn } from 'react-hook-form';

export const Textarea = ({
  className,
  placeholder,
  register,
  error,
}: {
  className?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
}) => {
  return (
    <>
      <textarea
        className={` w-full rounded-[20px] p-4 text-sm outline-accent-primary ${className}`}
        {...register}
        rows={10}
        placeholder={placeholder}
      />
      {error && <span className="-mt-3 text-sm text-red-500">{error}</span>}
    </>
  );
};
