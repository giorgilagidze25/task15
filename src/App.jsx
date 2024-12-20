import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Blogs from './Pages/Blogs';
import Blog from './Pages/Blog';
import Creat from './Pages/Creat';
import { BlogProvider } from './BlogProvider';

function App() {
  return (
    <BlogProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/creat" element={<Creat />} />
        <Route path="*" element={<h1>Page Not Found </h1>} />
      </Routes>

    </BlogProvider>
  );
}

export default App;
