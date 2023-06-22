import * as React from 'react';
import { useState } from 'react';
export interface ICloneMeProps {
  text: string;
}

export const CloneMe = ({ text = 'é isso' }: ICloneMeProps) => {
  return (
    <div className=" flex flex-col items-start justify-center">
      <div>
        <h1>{text}</h1>
      </div>
    </div>
  );
};
