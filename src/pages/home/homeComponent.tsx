import { BlogList } from '../../components/Home/BlogList/BlogList';
import { Header } from '../../components/Home/Header/Header';
import { SearchBar } from '../../components/Home/SearchBar/SearchBar';
import { EmptyList } from '../../components/common/EmptyList';
import { blogList } from '../../config/data';

import { useState } from 'react';

export const HomeComponent = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  // Search Submit
  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    handleSearchResults();
  };
  // Search for blogs my category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()),
    );
    setBlogs(filteredBlogs);
  };
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e: any) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};
