export const Logo = ({ white = false }: { white?: boolean }) => {
  return (
    <div>
      <a href="#" className={`flex flex-col text-xl font-bold uppercase ${white && 'text-white'}`}>
        Yulia
        <span className="-mt-1 text-sm">Lohvynenko</span>
      </a>
    </div>
  );
};
