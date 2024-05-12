import { UseFormRegisterReturn } from 'react-hook-form';

export const Textarea = ({
  className,
  placeholder,
  register,
}: {
  className?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
}) => {
  return (
    <textarea
      className={` w-full rounded-[20px] px-4 py-[30px] outline-accent-primary ${className}`}
      {...register}
      rows={10}
      placeholder={placeholder}
    />
  );
};
