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
        className={`font-didactGothic flex flex-col gap-x-8 lg:flex-row hover:[&>*]:underline ${className}`}
        onClick={onClick}
      >
        <li>
          <Link href="/#about">Про мене</Link>
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
          <Link href="/#contact">Послуги та вартість</Link>
        </li>
      </ol>
    </nav>
  );
};
