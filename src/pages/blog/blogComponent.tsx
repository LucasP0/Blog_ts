/* eslint-disable prefer-const */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogList } from '../../config/data';
import { Link } from 'react-router-dom';

import * as React from 'react';
import { Chip } from '../../components/common/Chip/Chip';
import { EmptyList } from '../../components/common/EmptyList';

export interface IBlogProps {
  createdAt: string;
  title: string;
  subCategory: any;
  cover: string;
  category: any;
  description: string;
}

export const BlogComponent = () => {
  const { id }: any = useParams();
  const [blog, setBlog] = useState<IBlogProps>();

  useEffect(() => {
    let blog: any = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <div className="bg-gray-100">
      <Link
        className="text-base text-[#a9a9] font-medium p-2 mb-8 block"
        to={`/`}
      >
        <span>&#8592;</span>Go Back
      </Link>

      {blog ? (
        <div className="w-[900px] max-md:w-full flex flex-col  justify-center items-center m-auto">
          <header className="text-center">
            <p className="text-xl text-[#a9a9] font-medium">
              Published {blog.createdAt}
            </p>
            <h1 className="font-extrabold text-4xl">{blog.title}</h1>
            <div className="flex flex-row gap-4 items-start justify-center p-4">
              {blog.subCategory.map((category: any, index: any) => (
                <div>
                  <Chip key={index} label={category} />
                </div>
              ))}
            </div>
          </header>
          <div className="flex flex-col items-center justify-center gap-6">
            <img className="w-full rounded-sm" src={blog.cover} alt="cover" />
            <p className="text-justify max-md:p-4">{blog.description}</p>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};
