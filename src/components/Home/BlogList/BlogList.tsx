import * as React from 'react';
import { Blog } from '../../../pages/blog';
import { BlogItem } from './BlogItem/BlogItem';

export interface IBlogListProps {
  blogs: any;
}

export const BlogList = ({ blogs }: IBlogListProps) => {
  return (
    // BlogList-wrap
    <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-sm:grid-cols-1">
      {blogs.map((blog: any) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};
