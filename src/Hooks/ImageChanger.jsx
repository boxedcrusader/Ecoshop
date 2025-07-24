import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define available animation classes
const animations = [
  'animate-fadeIn',   // Fading animation
  'animate-zoomIn',   // Zoom in animation
  'animate-slideIn',  // Slide in animation
  'animate-rotateIn'  // Rotate in animation
];

const SliderHook = ({ images, texts, transitionTime = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setAnimationClass(animations[Math.floor(Math.random() * animations.length)]); // Pick a random animation
  };

  const handlePreviousSlide = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }
      return prevIndex - 1;
    });
    setAnimationClass(animations[Math.floor(Math.random() * animations.length)]);
  };

  const calculateMaxHeight = () => {
    let maxImageHeight = 0;
    images.forEach((image) => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        if (img.height > maxImageHeight) {
          maxImageHeight = img.height;
          setMaxHeight(maxImageHeight);
        }
      };
    });
  };

  useEffect(() => {
    calculateMaxHeight();
  }, [images]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, transitionTime);
    return () => clearInterval(intervalId);
  }, [transitionTime]);

  return (
    <div className="relative w-full" style={{ height: `${maxHeight}px` }}>
      <img
        src={images[currentImageIndex].url}
        alt={`Slide ${currentImageIndex}`}
        className={`w-full h-full object-cover ${animationClass}`} // Apply animation here
      />

      <div className={`absolute bottom-4 left-4 p-4 rounded ${texts[currentImageIndex].textStyle}`}>
        <h1 className="text-md">{texts[currentImageIndex].title}</h1>
        <p className="text-2xl font-semibold mt-1">{texts[currentImageIndex].priceText}</p>
        <p className="mt-2">{texts[currentImageIndex].description}</p>
        <button className={`mt-4 py-2 px-4 rounded ${texts[currentImageIndex].buttonStyle}`}>
          {texts[currentImageIndex].buttonText}
        </button>
      </div>

      {/* Previous Button with Preview (Left) */}
      <button
        onClick={handlePreviousSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 opacity-70 hover:opacity-100 text-2xl font-bold"
      >
        &#60;
      </button>

      {/* Next Button with Preview (Right) */}
      <button
        onClick={handleNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 opacity-70 hover:opacity-100 text-2xl font-bold"
      >
        &#62;
      </button>
    </div>
  );
};

SliderHook.propTypes = {
  images: PropTypes.array.isRequired,
  texts: PropTypes.array.isRequired,
  transitionTime: PropTypes.number,
};

export default SliderHook;
