import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Spotlight } from "@/components/ui/spotlight";
import { Sidebar } from './components/sidebar';
import TiltedCard from './components/TiltedCard';
gsap.registerPlugin(ScrollTrigger);



const App = () => {
  const [showContent, setShowContent] = useState(true);
  const [SidebarOpen, SetSidebarOpen] = useState(false);

  useGSAP(() => {
    if (!showContent) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
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

    // Enhanced mouse follow effect for both text and logo
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 40;
      
      // Text follows mouse (existing)
      gsap.to(".text", {
        x: `${xMove * 0.4}%`,
        y: `${yMove * 0.2}%`,
        duration: 0.3,
        ease: "power2.out"
      });

      // Logo card follows mouse (NEW)
      gsap.to(".logo", {
        x: `${xMove * 0.6}%`,
        y: `${yMove * 0.4}%`,
        rotation: xMove * 0.5,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    // Combined scroll timeline for smoother performance
    let scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom top",
        scrub: 1,
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
          <div className="  bg-black" style={{scrollBehavior: 'smooth'}}>
            
            <div className='navbar fixed top-0 left-0 w-full z-50 py-4 px-8 flex items-center justify-between bg-black/10 backdrop-blur-sm' >
                <div className="hover:cursor-pointer">
                  <i className="ri-menu-2-line text-white text-2xl hover:text-amber-400  transition-colors duration-300" onClick={() => SetSidebarOpen(!SidebarOpen)}></i> 
                </div>
                <div className='flex items-center gap-4'>
                  <a href="https://x.com/Piyushj8i" target="_blank" rel="noopener noreferrer">
                  <span className='text-white text-lg font-bold tracking-wide hover:text-amber-400 cursor-pointer transition-colors duration-300'>PEKI</span>
                  </a>
                </div>
            </div>
                {SidebarOpen && <Sidebar />}  
            
            
            <div className="imagesdiv relative overflow-hidden w-500px h-screen flex items-center justify-center" id="home">
                {/* Spotlight Effects */}
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="white"
                />
                <Spotlight
                  className="top-10 left-500px -translate-x-500px"
                  fill="purple"
                />
                <Spotlight
                  className="top-28 left-80 h-[80vh] w-[50vw]"
                  fill="blue"
                />
                
                {/* Backgrounds */}

                {/* Centered Text */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10 text-6xl font-extrabold text-amber-400 drop-shadow-[0_2px_8px_rgba(255,200,0,0.7)] text-center pointer-events-none text whitespace-nowrap" >
                  <h1>AniSight Ai</h1>
                </div >

                {/* Centered Logo */}
                  <TiltedCard
                    className="absolute z-60 pt-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    imageSrc="logo.png"
                    altText=""
                    captionText="cool right"
                    containerHeight="700px"
                    containerWidth="900px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={20}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="w-full h-full tilted-card-demo-text">
                        
                      </p>
                    }
                  />
            </div>
            <div className='btmbar absolute bottom-0 left-0 w-500px py-10 px-10 bg-gradient-to-t from-black to-transparent'>
              <div className="flex items-center gap-4">
              <i className=" ml-2 text-white text-2xl ri-scroll-to-bottom-line"></i>
              <h3 className='font-sans-serif font-bold text-white '>Scroll down</h3>
              </div>
            </div>


            {/* Second page */}
            <div className="  secondPage w-full h-screen bg-black flex flex-row items-center justify-between pl-16 pr-50 absolute top-500px left-0 z-30 overflow-hidden " id='about'>
              {/* Left side wala: Logo and Socials */}
              <div className="flex flex-col items-start pl-20">
                <TiltedCard
                  
                  imageSrc="logo.png"
                  altText="AniSight AI Logo"
                  captionText="AniSight AI "
                  containerHeight="300px"
                  containerWidth="300px"
                  imageHeight="300px"
                  imageWidth="300px"
                  rotateAmplitude={20}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="w-150  tilted-card-demo-text">
                      AniSight AI
                    </p>
                  }
                />
                
                <div className="flex gap-6 ml-24 ">
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
