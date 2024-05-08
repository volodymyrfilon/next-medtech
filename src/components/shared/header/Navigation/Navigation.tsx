import Link from 'next/link';

export const Navigation = ({ className }: { className?: string }) => {
  return (
    <nav>
      <ol
        className={`flex flex-col gap-x-8 text-sm lg:flex-row hover:[&>*]:underline ${className}`}
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
