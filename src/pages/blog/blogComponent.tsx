import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogList } from '../../config/data';

export const BlogComponent = () => {
  const { id }: any = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    let blog: any = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);
};
