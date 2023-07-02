import * as React from 'react';

export interface IChipProps {
  label: any;
}

export const Chip = ({ label }: IChipProps) => {
  // chip
  return (
    <p
      className="font-[0.7rem] bg-gradient-to-r from-[#6190e8] to-[#a7bfe8]
    text-white p-2 rounded-md w-fit capitalize"
    >
      {label}
    </p>
  );
};
