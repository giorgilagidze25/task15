import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../BlogProvider';

export default function Creat() {
  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const newBlog = {
      id: parseInt(id, 10),
      title,
      description,
    };

    addBlog(newBlog);
    navigate('/'); 
  };
  const handleGoBack = () => {
    navigate('/');
  };
  return (
    <div >
     <button onClick={handleGoBack} style={{ marginTop: '20px', marginLeft:'100px', borderRadius:'10px', padding:'10px'  }}>
        Back
      </button>
      <form  onSubmit={handleSubmit} style={{padding:'20px', border:'1px solid black', borderRadius:'10px', width:'400px', marginLeft:'500px' }}>
        <h1 style={{marginLeft:'100px'}}>creat new blog</h1>
        <div  style={{display:'flex'}}>
          <h2>ID:</h2>
          <input
          style={{width:'300px', height:'30px', borderRadius:'10px', marginTop:'20px', marginLeft:'20px', paddingLeft:'20px' }}
          
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
            required
            />
        </div>
        <div style={{display:'flex'}}>
          <h2>Title:</h2>
          <input
          style={{width:'300px', height:'30px', borderRadius:'10px', marginTop:'20px', marginLeft:'20px', paddingLeft:'20px' }}
          
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div style={{display:'flex'}}>
          <h2>Description:</h2>
          <input
           style={{width:'300px', height:'30px', borderRadius:'10px', marginTop:'20px', marginLeft:'20px', paddingLeft:'20px' }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter desc"
            required
          />
        </div>
        <button type="submit" style={{width:'200px', marginLeft:'100px', border:'none', borderRadius:'10px', padding:'10px', backgroundColor:'gray'  }}>Add Blog</button>
      </form>
    </div>
  );
}
