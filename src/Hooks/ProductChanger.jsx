import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProductChanger({ products }) {
  const [currentProducts] = useState(products);

  // Slick settings for slider behavior
  const settings = {
    dots: false,              // Show navigation dots below the slider
    infinite: true,          // Infinite looping
    speed: 500,              // Transition speed
    slidesToShow: 4,         // Number of products visible at once
    slidesToScroll: 1,       // Number of slides to scroll with each navigation
    autoplay: true,          // Enable automatic sliding
    autoplaySpeed: 3000,     // Slide change every 3 seconds
    arrows: true,            // Show arrows for manual navigation
    responsive: [
      {
        breakpoint: 1024,    // Settings for screens below 1024px width
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,     // Settings for screens below 768px width
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-36 mb-36 text-center flex flex-col mr-10 ml-10 justify-center items-center h-screen">
      {/* Top Section (Popular Products) */}
      <div className="text-center flex-shrink-0 mb-10">
        <h1 className="text-3xl font-bold text-gray-700">POPULAR PRODUCTS</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus maximus vehicula. <br />
          Sed feugiat, tellus vel tristique posuere, diam.
        </p>
      </div>

      {/* Slider Section */}
      <div className="w-full h-auto">
        <Slider {...settings}>
          {currentProducts.map((product, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col items-center justify-between">
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  className="w-full h-2/3 object-cover"
                />
                <div className="text-center p-4">
                  <h3 className="font-bold text-lg text-gray-600">{product.name}</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

ProductChanger.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductChanger;
