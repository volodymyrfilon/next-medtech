import { FC } from 'react';
import { Logo } from '../Logo';

export const Header: FC = () => {
  return (
    <header className="flex h-[38px] items-center justify-between font-eUkraine font-light">
      <Logo />
      <nav>
        <ol className="flex gap-x-8 text-lg hover:[&>*]:underline">
          <li>
            <a href="#">Про мене</a>
          </li>
          <li>
            <a href="#">Запити</a>
          </li>
          <li>
            <a href="#">Результати зустрічей</a>
          </li>
          <li>
            <a href="#">Відгуки</a>
          </li>
          <li>
            <a href="#">Послуги та вартість</a>
          </li>
        </ol>
      </nav>
    </header>
  );
};
