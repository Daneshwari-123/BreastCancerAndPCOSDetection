import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <Link className='blogItem-link' to={`/blog/${id}`}>
        <img className='blogItem-cover' src={cover} alt='cover' />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className='blogItem-desc'>{description}</p>
        <div>

        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
