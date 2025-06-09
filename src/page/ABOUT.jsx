
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ABOUT = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.2,
          }
        );

        gsap.to(card, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.1,
        });

        gsap.to(card, {
          scale: 1.02,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: i * 0.3,
        });
      }
    });
  }, []);

  const reviews = [
    {
      name: 'Ben John',
      location: 'Chicago, IL',
    },
    {
      name: 'joy Bello',
      location: 'Lagos, Nigeria',
    },
    {
      name: 'Liam Chen',
      location: 'Vancouver, Canada',
    },
    {
      name: 'Sofia Gomez',
      location: 'Madrid, Spain',
    },
    {
      name: 'Tariq Ali',
      location: 'Dubai, UAE',
    },
    {
      name: 'Emma Smith',
      location: 'London, UK',
    },
  ];

  const avatar = 'https://images.icon-icons.com/916/PNG/512/Human_icon-icons.com_71855.png';
  const rating = 'https://www.svgrepo.com/show/154010/rating.svg';

  return (
    <div className="bg-gray-900 w-full py-8 px-4">
      <p className="text-white text-lg sm:text-xl ml-2">WHAT THE CULTURE SAYS</p>
      <p className="text-white text-md sm:text-lg ml-4 mb-6">
        Real reviews from real <span className="text-red-500 font-bold">STAMP</span> lovers
      </p>

      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {reviews.map((review, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-full sm:w-80 bg-gray-600 p-5 m-3 rounded-xl shadow-xl shadow-black/30"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={avatar} alt="avatar" className="w-12 h-12 -mt-3" />
              <p className="text-white text-sm">
                {review.name} <br />
                {review.location}
              </p>
            </div>
            <img src={rating} alt="rating" className="w-16 ml-2 -mt-4" />
            <p className="text-white mt-3 text-sm">
              Finally found a brand that gives me value for money. The sneakers I got from STAMP were so comfortable—I love them!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ABOUT;