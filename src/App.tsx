import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageConverter from './components/ImageConverter';
import StoryGenerator from './components/StoryGenerator';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-ghibli-blue to-ghibli-green">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ImageConverter />} />
            <Route path="/story" element={<StoryGenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 