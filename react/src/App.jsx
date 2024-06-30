import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto">
            <NavLink to="/register" className={({ isActive }) => (isActive ? 'text-white font-bold' : 'text-white')}>
              Register
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-white font-bold ml-4' : 'text-white ml-4')}>
              Login
            </NavLink>
          </div>
        </nav>
        <main className="flex-grow">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2024 My Application
        </footer>
      </div>
    </Router>
  );
}

export default App;
