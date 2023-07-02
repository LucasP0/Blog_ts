import * as React from 'react';
import { Header } from '../../components/Home/Header/Header';
import { SearchBar } from '../../components/Home/SearchBar/SearchBar';
import { BlogList } from '../../components/Home/BlogList/BlogList';
import { blogList } from '../../config/data';

export const Home = () => {
  return (
    <div className="w-full flex flex-col items-center font-monster p-4">
      <Header />
      <SearchBar />
      <BlogList blogs={blogList} />
    </div>
  );
};
