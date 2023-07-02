import { Search } from 'lucide-react';

export const SearchBar = ({
  value,
  handleSearchKey,
  clearSearch,
  formSubmit,
}: any) => {
  return (
    // class searchBar-wrap
    <div className="flex items-center justify-center w-fit rounded-sm">
      <form onSubmit={formSubmit} className="flex flex-row items-center p-4">
        <div className="border-2 border-black/40 p-1 border-r-0 outline-none flex flex-row bg-[#f0f0f0]">
          <Search size={30} color="#a9a9a9" />
          <input
            type="text"
            className="bg-[#f0f0f0] ml-2 w-full"
            onChange={handleSearchKey}
            placeholder="Procure a categoria"
            value={value}
          />
          {value && (
            <span className="cursor-pointer" onClick={clearSearch}>
              X
            </span>
          )}
        </div>
        <button className="border-2 rounded-r-md outline-none border-black/40 p-[7px] bg-[#0f52ba] text-white">
          Go
        </button>
      </form>
    </div>
  );
};
