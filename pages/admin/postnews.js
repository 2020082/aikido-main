import { useState } from 'react';
import axios from 'axios';

export default function PostNews() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/news', { title, content });
      alert('News posted successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to post news');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="News Title" 
        required 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="News Content" 
        required 
      />
      <button type="submit">Post News</button>
    </form>
  );
}
