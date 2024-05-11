export const Textarea = ({ className, ...props }: { className?: string }) => {
  return (
    <textarea
      className={` w-full rounded-[20px] px-4 py-[30px] outline-accent-primary ${className}`}
      {...props}
      rows={10}
    >
      textarea
    </textarea>
  );
};
