import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../BlogProvider';

export default function Blogs() {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [activeBlog, setActiveBlog] = useState(null); 
  const navigate = useNavigate();

  const handleShowMore = (item) => {
    navigate(`/blog/${item.id}`, { state: { description: item.description } });
  };

  const deleteCard = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleActivateCard = (id) => {
    if (activeBlog === id) {
      setActiveBlog(null);
    } else {
      setActiveBlog(id); 
    }
  };

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '50px'}}>
      {blogs.map((item) => (
        <div
          key={item.id}
          onClick={() => handleActivateCard(item.id)} 
          style={{
            border: '1px solid #ccc',
            padding: '16px',
            width: '200px',
            marginLeft: '100px',
            marginTop: '20px',
            backgroundColor: activeBlog === item.id ? 'green' : 'transparent', 
            cursor: 'pointer',
          }}
        >
          <button onClick={() => deleteCard(item.id)} style={{border: 'none', background: 'none'}}>X</button>
          <h2 style={{maxWidth: '200px'}}>{item.title}</h2>
          <p>ID: {item.id}</p>
          <p style={{maxWidth: '200px;'}}>Desc: {item.description}</p>
          <button onClick={() => handleShowMore(item)}>Show More</button>
        </div>
      ))}
    </div>
  );
}
