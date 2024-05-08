import Link from 'next/link';

export const Logo = ({
  white = false,
  animateOnHover = false,
}: {
  white?: boolean;
  animateOnHover?: boolean;
}) => {
  return (
    <Link
      href="/"
      className={`flex flex-col font-eUkraineHead text-xl font-bold uppercase ${animateOnHover && 'logo-hover-animate'} ${white && 'text-white'}`}
    >
      Yulia
      <span className="-mt-1 text-sm">Lohvynenko</span>
    </Link>
  );
};
