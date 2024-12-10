import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ImageCarousel from "@/components/imageCarousel";
import { useTranslation } from "react-i18next";

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { t } = useTranslation();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        
      const response = await axios.post('/api/admin/login', {
        username,
        password,  // This should be the raw password (e.g., '1234')
      });
      console.log(username,password)
      localStorage.setItem('token', response.data.token);
      router.push('/admin/dashboard');
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message);
    }
  };

  return (
    <div>
      <ImageCarousel
        textContent={t("admin")}
        image={"/images/visit_photo.jpg"}
      />
      <div className="mt-[50vh] w-full">
        {/* Placeholder for future content */}
      </div>

      <div className="w-full flex justify-center">
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input 
              type="text" 
              value={username}  // Fix: use username state instead of email
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {t("login")} {/* Translated login button */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
