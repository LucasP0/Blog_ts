import * as React from 'react';

export const Header = () => {
  return (
    <header className="w-full flex flex-col p-4 text-center">
      {/* home-header */}
      <h2 className="text-[3rem] font-extrabold text-[#0080ff]">
        Blog Diário das Suas manhãs
      </h2>
      <h1 className="font-extrabold text-[2rem] text-[#0f52ba] mb-4">
        <span> &#34;Blog&#34; </span>
      </h1>
      <p className="text-[#a9a9a9] font-[500]">
        Lugar incrivel para se fazer <br />
        Produções e manter-se atualizado com as produções diarias!
      </p>
    </header>
  );
};
