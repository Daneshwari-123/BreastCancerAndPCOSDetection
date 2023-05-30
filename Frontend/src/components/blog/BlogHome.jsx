import React, { useState } from 'react';
import BlogList from './BlogList/BlogList';
import Header from '../common/header/Header';
import { blogList } from '../data/Data';
import Back from '../common/Back';
import Heading from '../common/Heading';
import img from "../images/banner2.jpg"
const BlogHome = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  return (
    <div>
      <section className="">
        <Back name="" title="Blog" cover={img} />
        <div className="">
          <Heading
            title=""
            subtitle=""
          />
          <section className="">
            <div className="">
              {!blogs.length ? 'nothing' : <BlogList blogs={blogs} />}
            </div>
          </section>
        </div>
      </section>

    </div>
  );
};

export default BlogHome;
