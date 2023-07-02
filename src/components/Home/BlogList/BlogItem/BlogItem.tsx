import * as React from 'react';
import { Chip } from '../../../common/Chip/Chip';
import { Link } from 'react-router-dom';

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
    <div className="">
      <img className="h-40 w-full" src={cover} alt="cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="">{description}</p>

      <footer>
        {/* blogItem-author */}
        <div>
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h3>{authorName}</h3>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link to={`/blog/${id}`} />
      </footer>
    </div>
  );
};
