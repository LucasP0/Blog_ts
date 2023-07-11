import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { blogList } from '../../config/data';

export const BlogComponent = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find(blog => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);

};