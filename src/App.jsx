import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const App = () => {
  const [showContent, setShowContent] = useState(true);

  useGSAP(() => {
    if (!showContent) return;

    // Set up smooth scrolling
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    

    gsap.to(".logo", {
      scale: 0.8,
      
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
      gsap.to(".text", {
        x: `${xMove * 0.4}%`,
        duration: 0.3,
        ease: "power2.out"
      });

    });

    // Combined scroll timeline for smoother performance
    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom top",
        scrub: 1, // Slightly smoother scrub
        invalidateOnRefresh: true
      }
    });

    scrollTl
      .to(".text", {
        y: "-60vh",
        scale: 1.5,
      }, 0)
      .to(".secondPage", {
        y: "-100vh",
      }, 0);
  }, [showContent]);
  return (
    <>
              {showContent && (
          <div className="main w-full h-screen bg-black" style={{scrollBehavior: 'smooth'}}>
            <div className='navbar absolute top-0 left-0 w-full z-20 py-2 px-8 flex items-center justify-between bg-black/10 backdrop-blur-sm'>
                <div className="hover:cursor-pointer">
                  <i className="ri-menu-2-line text-white text-2xl"></i>  
                </div>
                <div className='flex items-center gap-4'>
                  <span className='text-white text-lg font-bold tracking-wide'>PEKI</span>
                </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen flex items-center justify-center">
                {/* Backgrounds */}

                {/* Centered Text */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 z-10 text-6xl font-extrabold text-amber-400 drop-shadow-[0_2px_8px_rgba(255,200,0,0.7)] text-center pointer-events-none text whitespace-nowrap">
                  <h1>AniSight Ai</h1>
                </div>

                {/* Centered Logo */}
                <img className="absolute pt-30  transform -translate-x-1/2  logo" src="./logo.png" alt="" />
            </div>
            <div className='btmbar absolute bottom-0 left-0 w-full py-5 px-10 bg-gradient-to-t from-black to-transparent'>
              <div className="flex items-center gap-4">
              <i className=" ml-2 text-white text-2xl ri-scroll-to-bottom-line"></i>
              <h3 className='font-sans-serif font-bold text-white '>Scroll down</h3>
              </div>
            </div>


            {/* Second page */}
            <div className="secondPage w-full h-screen bg-black flex flex-row items-center justify-between pl-16 pr-50 absolute top-full left-0 z-30 overflow-hidden">
              {/* Left side wala: Logo and Socials */}
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

              {/* Right wala: Instagram Description */}
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
