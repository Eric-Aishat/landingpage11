


import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
const DROPS = ({ cart, setCart }) => {

  const imageRefs = useRef([]);
  const [openSizeIndex, setOpenSizeIndex] = useState(null); 

  const products = [
    {
      img: "https://www.basketballshop24.de/thumbnail/55/5e/b6/1749136501/b5f57c4a0d72a6de13c18ce77b78591e_1920x1920.jpg",
      name: "Air Jordan",
      price: 109.99,
      size: "M"
    },
    {
      img: "https://m.media-amazon.com/images/I/61TtsffIKwL._AC_SY695_.jpg",
      name: "Nike Air Max",
      price: 190.69,
      size: "L"
    },
    {
      img: "https://images.footlocker.com/is/image/FLEU/314217342204_01?wid=500&hei=500&fmt=png-alpha",
      name: "Nike Air Max Tuned 1",
      price: 160.00,
      size: "M"
    },
    {
      img: "https://www.pace-sneakers.de/out/pictures/generated/product/1/380_340_75/nike_damen_freizeitschuhe_sneakers_ah6789_606_1342.jpg",
      name: "Nike Air Max LTD 3 Nike men",
      price: 129.99,
      size: "S"
    }
  ];

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      if (img) {
        gsap.to(img, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        gsap.to(img, {
          rotation: 3,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">FEATURED DROPS</h1>
      <h5 className="mb-6">the hottest releases that define the culture</h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 mt-5"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-sm text-gray-500">Size: {product.size || "N/A"}</p>

            <div 
            
            className="flex items-center gap-3 mt-2">
              <button 
            onClick={() => setCart([...cart,product])} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Add to cart
              </button>

              
              <button
                className="w-16 border border-red-500 text-sm px-2 py-1 rounded"
                onClick={() =>
                  setOpenSizeIndex(openSizeIndex === index ? null : index)
                }
              >
                Size
              </button>
            </div>

            
            {openSizeIndex === index && (
              <img
                src="https://cdn.shopify.com/s/files/1/2716/1006/files/archies-sizechart_a6368212-d6d5-49f5-b087-a52805e2c7d0_480x480.jpg?v=1731304693"
                alt="Size chart"
                className="mt-4 w-full rounded"
              />
            )}
          </div>

        ))}

      </div>
            
         
        
            </div>
            
            
            
         
    
  );
};

export default DROPS;