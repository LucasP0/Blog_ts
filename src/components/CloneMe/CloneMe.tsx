import { useState } from 'react';
export interface ICloneMeProps {
  text: string;
}

export const CloneMe = ({ text = 'é isso' }: ICloneMeProps) => {
  const [counter, setCounter] = useState(0);
  const changeNumber = () => {
    setCounter(counter + 1);
  };
  const changeLessNumber = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else return counter;
  };

  const [title, setTitle] = useState('Esse testo irá se alterar');

  const handleChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };

  return (
    <div className=" flex flex-col justify-center items-center w-full bg-blue-300 h-screen">
      <div className="flex flex-col items-center justify-center gap-6 bg-slate-400 rounded-md w-[350px] h-[350px] ">
        <h1 className="text-xl font-bold">{text}</h1>
        <button
          onClick={changeNumber}
          className="bg-blue-500
        rounded-sm p-2
        "
        >
          ChangeNumber
        </button>
        <button
          className="bg-black
         text-white rounded-sm p-2"
          onClick={changeLessNumber}
        >
          Less Counter
        </button>
        <h1>{counter}</h1>
        <h1>{title}</h1>
        <input
          onChange={handleChangeTitle}
          className="p-2 rounded-md"
          type="text"
          name=""
          id=""
          placeholder="digite aqui"
        />
      </div>
    </div>
  );
};
