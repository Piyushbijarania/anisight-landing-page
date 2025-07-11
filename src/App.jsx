import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const App = () => {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 40,
      transformOrigin: "50% 50%",
      scale: 2,
      duration: 1.5,
      ease: "expo.inOut",
    })
    .to(".vi-mask-group", {
      // rotate: 100,
      transformOrigin: "50% 50%",
      scale: 10,
      duration: 2,
      delay: -1.5,
      ease: "power4.inOut",
      opacity: 0,
      onUpdate: function() {
        if(this.progress() >= 0.9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg1", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg2", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".logo", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".bg1", {
        x: xMove,
      });
      gsap.to(".bg2", {
        x: xMove * 1.7,
      });
    });

    // Logo scroll effect
    gsap.to(".logo", {
      y: "-60vh", // Move up by 60% of viewport height
      scale: 1.5, // Optionally shrink a bit
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom top",
        scrub: true, // Smoothly follows scroll
      }
    });
    gsap.to(".text", {
      y: "-60vh", // Move up by 60% of viewport height
      scale: 1.5, // Optionally shrink a bit
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom top",
        scrub: true, // Smoothly follows scroll
      }
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className="vi-mask-group">
              <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black"
                >
                PEKI
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="./bg.png"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
        />
      </svg>
      </div>
              {showContent && (
          <div className="main w-full h-screen bg-black">
            <div className='navbar absolute top-0 left-0 w-full z-20 py-2 px-8 flex items-center justify-between bg-black/10 backdrop-blur-sm'>
                <div className='flex items-center gap-4'>
                  <div className='flex flex-col gap-1'>
                    <div className='w-10 h-1 bg-white rounded'></div>
                    <div className='w-7 h-1 bg-white rounded'></div>
                    <div className='w-4 h-1 bg-white rounded'></div>
                  </div>
                  <span className='text-white text-lg font-bold tracking-wide'>PEKI</span>
                </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen flex items-center justify-center">
                {/* Backgrounds */}
                <img className="absolute top-0 left-0 w-full h-full object-cover bg1 z-0" src="./bg1.png" alt="" />
                <img className="absolute top-0 left-0 w-full h-full object-cover bg2 z-0" src="./bg2.png" alt="" />

                {/* Centered Text */}
                <div className="absolute top-1/4 left-1/2 w-full transform -translate-x-1/2 z-10 text-8xl font-extrabold text-amber-400 drop-shadow-[0_2px_8px_rgba(255,200,0,0.7)] text-center pointer-events-none text">
                  <h1>AniSight</h1>
                  <h1>Ai</h1>
                </div>

                {/* Centered Logo */}
                <img className="absolute left-1/2 bottom-20 transform -translate-x-1/2  logo" src="./logo.png" alt="" />
            </div>
            <div className='btmbar absolute bottom-0 left-0 w-full py-5 px-10 bg-gradient-to-t from-black to-transparent'>
              <div className="flex items-center gap-4">
              <i className=" ml-2 text-white text-2xl ri-scroll-to-bottom-line"></i>
              <h3 className='font-sans-serif font-bold text-white '>Scroll down</h3>
              </div>
            </div>
            <div className="secondPage w-full h-screen bg-black flex flex-row items-center justify-between pl-16 pr-50 relative overflow-hidden">
              {/* Left: Logo and Socials */}
              <div className="flex flex-col items-start">
                <img className="w-150 h-100 " src="./logo.png" alt="" />
                <div className="flex gap-6 ml-62 ">
                  <a href="https://x.com/Piyushj8i" target="_blank" rel="noopener noreferrer">
                    <i className="ri-twitter-x-line text-white text-4xl hover:text-amber-400 transition"></i>
                  </a>
                  <a href="https://instagram.com/anisightai" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-line text-white text-4xl hover:text-amber-400 transition"></i>
                  </a>
                </div>
              </div>

              {/* Right: Instagram Description */}
              <div className="flex flex-col items-end w-1/2 pr-0">
                <h2 className="text-3xl font-bold text-amber-400 mb-2">AniSight AI on Instagram</h2>
                <p className="text-white text-lg mb-4 max-w-md text-right">
                  Explore the world of <span className="text-amber-400 font-semibold">@anisightai</span> — where AI meets creativity!<br/>
                  We share the latest in AI-powered animation, creative tech, and digital art.<br/>
                  Follow us for project highlights, behind-the-scenes, and inspiration from the future of artificial intelligence.
                </p>
                <a
                  href="https://www.instagram.com/anisightai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-amber-400 text-black font-bold rounded hover:bg-amber-500 transition"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default App
