'use client';

import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ICONS } from '../shared/icons';

interface SelectOption {
  icon: JSX.Element;
  value: string;
}
interface SelectProps {
  className?: string;
  register: UseFormRegisterReturn;
  disabled?: boolean;
  title?: string;
  options: SelectOption[];
}

export const Select = ({
  className = '',
  disabled = false,
  title,
  options,
  register,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectOption>(options[1]);

  const onChangeSelected = (selectedOption: SelectOption) => {
    setSelected(selectedOption);
    setIsOpen(false);
  };

  return (
    <label className="relative">
      <span className="">{title}</span>
      <div
        className={`flex h-[88px] items-center gap-x-4 rounded-[20px] bg-white p-2.5 pl-4 leading-[68px] focus:outline-accent-primary ${className}`}
      >
        {selected ? (
          <>
            {selected.icon}
            {selected.value}
          </>
        ) : (
          'Виберіть опцію'
        )}
        {isOpen && (
          <ul className="bg-accent absolute z-10 flex w-full -translate-x-4 translate-y-3/4 cursor-pointer flex-col rounded-md rounded-b-[20px] border bg-white">
            {options.map(option => (
              <li
                key={option.value}
                onClick={() => onChangeSelected(option)}
                className={`flex items-center justify-start gap-x-4 px-4 last:rounded-b-[20px] hover:bg-accent-dark/20 ${
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
        onClick={() => setIsOpen(prev => !prev)}
      >
        <ICONS.ARROW_DOWN
          className={`h-8 w-8 fill-white duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      {/* <input type="hidden" {...register} value={value} /> */}
    </label>
  );
};
