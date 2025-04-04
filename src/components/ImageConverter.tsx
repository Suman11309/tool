import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';

const ImageConverter: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  });

  const handleConvert = async () => {
    if (!image) return;
    
    setIsConverting(true);
    try {
      // TODO: Implement image conversion logic with AI model
      // This will be implemented when we set up the backend
      console.log('Converting image...');
    } catch (error) {
      console.error('Error converting image:', error);
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-ghibli text-ghibli-yellow mb-8 text-center">
        Transform Your Image into Ghibli Art
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
            ${isDragActive ? 'border-ghibli-yellow bg-ghibli-yellow bg-opacity-10' : 'border-ghibli-pink'}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input {...getInputProps()} />
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="max-h-64 mx-auto rounded-lg"
            />
          ) : (
            <div className="text-ghibli-pink">
              <p className="text-xl mb-4">Drag & drop an image here</p>
              <p className="text-sm">or click to select a file</p>
            </div>
          )}
        </motion.div>

        <div className="space-y-4">
          <div className="bg-white bg-opacity-90 rounded-lg p-6">
            <h2 className="text-xl font-ghibli text-ghibli-brown mb-4">
              Conversion Options
            </h2>
            <div className="space-y-4">
              <select className="w-full p-2 border border-ghibli-brown rounded">
                <option value="totoro">My Neighbor Totoro Style</option>
                <option value="spirited">Spirited Away Style</option>
                <option value="mononoke">Princess Mononoke Style</option>
              </select>
              
              <motion.button
                onClick={handleConvert}
                disabled={!image || isConverting}
                className={`w-full py-2 px-4 rounded font-ghibli
                  ${!image || isConverting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-ghibli-green hover:bg-ghibli-green/90 text-white'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isConverting ? 'Converting...' : 'Convert to Ghibli Style'}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageConverter; 