import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'lorem 1', description: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'lorem 2', description: 'Lorem, ipsum dolor.' },
    { id: 3, title: 'lorem 3', description: 'Lorem ipsum dolor sit.' },
  ]);

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
