import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogContext } from '../BlogProvider';

export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs } = useContext(BlogContext);

  const blog = blogs.find((b) => b.id === parseInt(id));

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleGoBack} style={{ marginTop: '20px', marginLeft:'100px', borderRadius:'10px', padding:'10px'  }}>
        Back
      </button>
      <h1>ID: {blog?.id}</h1>
      <h1>TITLE: {blog?.title}</h1>
      <h1>Desc: {blog?.description}</h1>
    </div>
  );
}
