
import gsap from 'gsap';
import { useEffect,useRef } from 'react';
import React from 'react';

const Hero = () => {
    const textRef = useRef(null);
    const imageRef = useRef (null);

  useEffect(() => {
    
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
    
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.4 }
    );

    
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -3,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div className="bg-red-200 w-full pt-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        
        <div ref = {textRef}className="text-center md:text-left md:ml-10">
          <p className="text-3xl font-bold leading-tight">
            SNKEAKERS <br />
            <span className="text-red-800">THAT HIT.</span> <br />
            DIFFERENT
          </p>
          <p className="mt-2 text-sm md:text-base text-gray-700">next.gen streetwear. Designed to stand</p>

          <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
            <button className="w-40 text-white bg-red-600 h-10 rounded">SHOP THE DROP</button>
            <button className="w-44 h-10 border border-red-700 px-3 text-red-500 rounded">
              EXPLORE BRANDS
            </button>
          </div>
        </div>

        
        <div ref={imageRef}>
          <img
            className="w-60 sm:w-72 md:w-80 lg:w-96"
            src="https://images.footlocker.com/is/image/FLEU/316705803704_01?wid=500&hei=500&fmt=png-alpha"
            alt="Sneaker"
          />
          <p className='ml-20'><a href="/DROPS">Drops</a>  </p>
          <img className='w-10 ml-20 mb-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ40ZHlHKxmpNGsLTjUHj01MHmp74on8xwbbw&s'/>
        </div>
      </div>
    </div>
  );
};

export default Hero;