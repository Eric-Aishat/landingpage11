
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BRANDS = () => {
  const imagesRef = useRef([]);
  const videoRef = useRef(null);
  
  const textRef = useRef(null);

  const imageUrls = [
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/oy67rae9fi4aqqhc330j/NIKE+SHOX+R4.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/274f9e45-17c2-4de4-9ca0-148de86bd1f3/NIKE+SHOX+R4.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9cb44d8d-b86f-4a4c-806e-06571cc1a9aa/WMNS+NIKE+AIR+MAX+MUSE.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f8fe556-4f8b-4018-8f63-838e2c191ab4/NIKE+SHOX+R4.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/07be609b-7348-4d10-847c-7983a349dee3/WMNS+AIR+JORDAN+1+RETRO+LOW+OG.png",
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ad0a29a3-0bc6-4967-a345-69cd9c48d86a/FFF+W+NSW+HR+WVN+WR+PANT.png"
  ];

  useEffect(() => {
    gsap.fromTo(videoRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2 });

    imagesRef.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { opacity: 0, y: 50, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1 + index * 0.2, ease: 'power3.out', delay: index * 0.2 }
        );

        gsap.to(img, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.1,
        });

        gsap.to(img, {
          scale: 1.05,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.3,
        });
      }
    });
    gsap.to(textRef.current, {
        y: -10,
        duration: 1.2,
        ease: 'bounce.out',
        repeat: -1,
        yoyo: true
      });
  }, []);

  return (
    <div className="p-6">
    <div ref={textRef}>
      <p
      ref={textRef}
       className="mt-10 ml-5 text-xl text-red-500 font-semibold">ENJOIN OUR BRAND HIGHLIGHT!!!</p>

      <h1 className='ml-20 text-gray-800 mt-5'>  THE QULITY IS TOP <br /> 
       SOFT STAMP <br />
       COMFORTABLE STAMP
       </h1>
    </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <video
          ref={videoRef}
          src="https://videos.pexels.com/video-files/8533122/8533122-sd_640_360_25fps.mp4"
          className="rounded w-full"
          autoPlay
          muted
          loop
          playsInline
        />
        {imageUrls.map((src, i) => (
          <img
            key={i}
            ref={(el) => (imagesRef.current[i] = el)}
            src={src}
            alt={`brand-${i}`}
            className="w-full object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default BRANDS;