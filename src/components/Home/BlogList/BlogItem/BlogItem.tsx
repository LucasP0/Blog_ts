import * as React from 'react';
import { Chip } from '../../../common/Chip/Chip';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface IBlogItemProps {
  blog: any;
}

export const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover,
  },
}: IBlogItemProps) => {
  return (
    // blogItem wrap
    <div className="flex flex-col mt-20 p-2">
      <Link className="no-underline text-inherit" to={`/blog/${id}`}>
        <img
          className=" w-[500px] h-[350px] max-lg:h-64 object-cover rounded-md mb-2 hover:scale-105"
          src={cover}
          alt="cover"
        />
      </Link>
      <Chip label={category} />
      <h3 className="m-2 flex-1 font-extrabold text-lg">{title}</h3>
      <p className="relative max-h-14 overflow-hidden text-sm text-[#a9a9a] before:absolute before:content-['...'] before:bottom-0 before:right-0">
        {description}
      </p>
      <footer className="flex items-center mt-4 justify-between">
        {/* blogItem-author */}
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-[50%] object-cover mr-2"
            src={authorAvatar}
            alt="avatar"
          />
          <div className="text-xs text-gray-500 font-semibold">
            <h3>{authorName}</h3>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="no-underline text-inherit" to={`/blog/${id}`}>
          <ArrowRight />
        </Link>
      </footer>
    </div>
  );
};
