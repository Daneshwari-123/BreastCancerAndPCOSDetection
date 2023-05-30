import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../data/Data';
import Chip from '../common/Chip';
import EmptyList from "../common/EmptyList"
import './Style.css';
import { Link } from 'react-router-dom';

const NewBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/blog'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <div>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
          </div>
          <img src={blog.cover} alt='cover' style={{ marginTop: "20px" }} />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default NewBlog;
