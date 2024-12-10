// /pages/admin/dashboard.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
    } else {
      // Ideally, validate the token with an API call
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Provide links to Post News and Add Student pages */}
      <a href="/admin/post-news">Post News</a>
      <a href="/admin/add-student">Add Student</a>
    </div>
  );
}
