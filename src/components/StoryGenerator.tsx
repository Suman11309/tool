import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StoryGenerator: React.FC = () => {
  const [theme, setTheme] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!theme.trim()) return;
    
    setIsGenerating(true);
    try {
      // TODO: Implement story generation logic with AI model
      // This will be implemented when we set up the backend
      const mockResponse = `In a world where ${theme}, a young protagonist discovers a magical realm filled with wonder and mystery...`;
      setGeneratedContent(mockResponse);
    } catch (error) {
      console.error('Error generating story:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-ghibli text-ghibli-yellow mb-8 text-center">
        Create Your Ghibli Story
      </h1>

      <div className="space-y-8">
        <div className="bg-white bg-opacity-90 rounded-lg p-6">
          <h2 className="text-xl font-ghibli text-ghibli-brown mb-4">
            Story Theme
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              placeholder="Enter a theme or keywords (e.g., 'flying castle', 'forest spirits')"
              className="w-full p-2 border border-ghibli-brown rounded"
            />
            
            <motion.button
              onClick={handleGenerate}
              disabled={!theme.trim() || isGenerating}
              className={`w-full py-2 px-4 rounded font-ghibli
                ${!theme.trim() || isGenerating
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-ghibli-green hover:bg-ghibli-green/90 text-white'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isGenerating ? 'Generating...' : 'Generate Story'}
            </motion.button>
          </div>
        </div>

        {generatedContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white bg-opacity-90 rounded-lg p-6"
          >
            <h2 className="text-xl font-ghibli text-ghibli-brown mb-4">
              Your Ghibli Story
            </h2>
            <p className="text-gray-800 leading-relaxed">
              {generatedContent}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StoryGenerator; 