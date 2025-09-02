import React, { useEffect, useRef, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Cover from './components/Cover'
import Profile from './components/Profile'
import Bio from './components/Bio'
import Socials from './components/Socials'
import About from './components/About'
import Stack from './components/Stack'
import Posts from './components/Posts/Posts'
import Projects from './components/Projects'
import Footer from './components/Footer'
import StatsBridge from './components/StatsBridge'
import Blogs from './components/Blogs'
import DinoGame from './components/DinoGame'
import ProjectDetails from "./components/ProjectDetails";
import BlogDetails from "./components/BlogDetails";

import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const noiseRef = useRef(null);
  const [showLogoVideo, setShowLogoVideo] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🎞 Noise background
  useEffect(() => {
    if (!noiseRef.current) return; // ✅ fix: only run if canvas exists

    const canvas = noiseRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = imageData.data;

      for (let i = 0; i < buffer.length; i += 4) {
        const shade = Math.random() * 255;
        buffer[i] = shade;
        buffer[i + 1] = shade;
        buffer[i + 2] = shade;
        buffer[i + 3] = 20;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    let frame;
    const loop = () => {
      generateNoise();
      frame = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [loading]); // ✅ rerun only after loading screen finishes

  return (
    <Router>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          {/* Noise overlay */}
          <canvas
            ref={noiseRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
            style={{ opacity: 1 }}
          />

          {/* Common Header */}
          <Header showLogoVideo={showLogoVideo} />

          {/* Page Content */}
          <section className="relative z-10 mt-10">
            <Routes>
              {/* Home */}
              <Route
                path="/"
                element={
                  <>
                    <Cover setShowLogoVideo={setShowLogoVideo} />
                    <Profile />
                    <Bio />
                    <Socials />
                    <About />
                    <Stack />
                    <Posts />
                    <Projects />
                    <StatsBridge />
                    <Blogs />
                    <DinoGame />
                    <Footer />
                  </>
                }
              />

              {/* Portfolio */}
              <Route
                path="/portfolio"
                element={
                  <>
                    <Cover setShowLogoVideo={setShowLogoVideo} />
                    <Profile />
                    <Bio />
                    <Socials />
                    <About />
                    <Stack />
                    <Posts />
                    <Projects />
                    <StatsBridge />
                    <Blogs />
                    <DinoGame />
                    <Footer />
                  </>
                }
              />

              {/* Blogs */}
              <Route path="/blogs" element={<div className="mt-4"><Blogs /></div>} />
              <Route path="/blogs/:id" element={<BlogDetails />} />

              {/* Projects */}
              <Route path="/projects" element={<div className="mt-4"><Projects /></div>} />
              <Route path="/projects/:id" element={<ProjectDetails />} />

              {/* Posts */}
              <Route path="/posts" element={<div className="mt-4"><Posts /></div>} />
            </Routes>
          </section>
        </>
      )}
    </Router>
  );
};

export default App;
