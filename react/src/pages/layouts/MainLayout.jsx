import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

function MainLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex space-x-3">
          <Link to="/dashboard" className="hover:bg-blue-800 p-2">Dashboard</Link>
          <button onClick={handleLogout} className="hover:bg-blue-800 p-2">Logout</button>
        </nav>
      </header>
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Your Company
      </footer>
    </div>
  );
}

export default MainLayout;
