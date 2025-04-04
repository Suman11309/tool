import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-ghibli-brown bg-opacity-90 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-ghibli-yellow text-2xl font-ghibli font-bold">
          Ghibli AI Generator
        </Link>
        <div className="space-x-4">
          <Link 
            to="/" 
            className="text-ghibli-yellow hover:text-white transition-colors duration-200"
          >
            Image Converter
          </Link>
          <Link 
            to="/story" 
            className="text-ghibli-yellow hover:text-white transition-colors duration-200"
          >
            Story Generator
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 