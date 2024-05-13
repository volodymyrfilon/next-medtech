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
          <Link href="#">Про мене</Link>
        </li>
        <li>
          <Link href="#">Запити</Link>
        </li>
        <li>
          <Link href="#">Результати зустрічей</Link>
        </li>
        <li>
          <Link href="#">Відгуки</Link>
        </li>
        <li>
          <Link href="#">Послуги та вартість</Link>
        </li>
      </ol>
    </nav>
  );
};
