import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex space-x-3">
          <Link to="/register" className="hover:bg-blue-800 p-2">Register</Link>
          <Link to="/login" className="hover:bg-blue-800 p-2">Login</Link>
        </nav>
      </header>
      <main className="w-full max-w-md p-6 bg-white rounded shadow-md mx-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Your Company
      </footer>
    </div>
  );
}

export default GuestLayout;
