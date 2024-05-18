import Link from 'next/link';

export const Navigation = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <nav>
      <ol
        className={`flex flex-col gap-x-8 font-didactGothic lg:flex-row lg:hover:[&>*]:text-accent-primary ${className}`}
        onClick={onClick}
      >
        <li>
          <Link href="/#about">Про мене</Link>
        </li>
        <li>
          <Link href="/#certificates">Сертифікати</Link>
        </li>
        <li>
          <Link href="/#result">Запити</Link>
        </li>
        <li>
          <Link href="/#feedback">Результати зустрічей</Link>
        </li>
        <li>
          <Link href="/#feedback">Відгуки</Link>
        </li>
        <li>
          <Link href="/#contact">Зв'язок</Link>
        </li>
      </ol>
    </nav>
  );
};
