export const Textarea = ({
  className,
  placeholder,
  ...props
}: {
  className?: string;
  placeholder?: string;
}) => {
  return (
    <textarea
      className={` w-full rounded-[20px] px-4 py-[30px] outline-accent-primary ${className}`}
      {...props}
      rows={10}
      placeholder={placeholder}
    />
  );
};
