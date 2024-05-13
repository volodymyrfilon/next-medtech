import Link from 'next/link';

export const Logo = ({
  white = false,
  animateOnHover = false,
  onClick,
}: {
  white?: boolean;
  animateOnHover?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link
      href="/"
      className={`flex flex-col font-eUkraineHead text-xl font-bold uppercase ${animateOnHover && 'logo-hover-animate'} ${white && 'text-white'}`}
      onClick={onClick}
    >
      Yulia
      <span className="-mt-1.5 text-sm">Lohvynenko</span>
    </Link>
  );
};
