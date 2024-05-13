'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface SelectOption {
  icon?: JSX.Element;
  value: string;
}
interface SelectProps {
  className?: string;
  name: string;
  title?: string;
  placeholder?: string;
  options: SelectOption[];
  setValue: (name: string, value: string) => void;
}

export const Select = ({
  className = '',
  title,
  options,
  name,
  placeholder,
  setValue,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectOption>(options[0]);

  setValue(name, selected.value);

  const handleClick = () => setIsOpen(!isOpen);
  const onChangeSelected = (selectedOption: SelectOption) => {
    setSelected(selectedOption);
    setValue(name, selectedOption.value);
    setIsOpen(false);
  };

  return (
    <label className="relative">
      <span className="block w-[90%]">{title}</span>
      <div
        id={name}
        className={`mt-1 flex h-[88px] items-center gap-x-4 rounded-[20px] bg-white p-2.5 pl-4 leading-[68px] ${className} ${selected === null ? ' font-medium text-accent-dark/40' : ''} ${isOpen ? 'outline outline-2 outline-accent-primary' : ''}`}
      >
        {selected ? (
          <>
            {selected.icon}
            {selected.value}
          </>
        ) : (
          placeholder
        )}
        {isOpen && (
          <ul className="bg-accent absolute z-10 flex w-full -translate-x-4 translate-y-[85%] cursor-pointer flex-col rounded-[20px] border-2 bg-white font-normal text-accent-dark">
            {options.map(option => (
              <li
                key={option.value}
                onClick={() => onChangeSelected(option)}
                className={`flex items-center justify-start gap-x-4 px-4 first:rounded-t-[20px] last:rounded-b-[20px] hover:bg-accent-dark/20 ${
                  selected === option ? 'bg-accent-dark/30' : ''
                }`}
              >
                {option.icon} {option.value}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        className="absolute bottom-2.5 right-4 flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-[20px] bg-accent-dark"
        onClick={handleClick}
      >
        <ChevronDown className={`h-6 w-6 text-white duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
    </label>
  );
};
