import React, { useRef, useEffect, useState } from "react";

const Cover = ({ setShowLogoVideo }) => {
  const videoRef = useRef(null);
  const coverRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLogoVideo(!entry.isIntersecting); // if cover is not visible → show logo in header
      },
      { threshold: 0.1 } // fire when <10% visible
    );

    if (coverRef.current) observer.observe(coverRef.current);

    return () => {
      if (coverRef.current) observer.unobserve(coverRef.current);
    };
  }, [setShowLogoVideo]);

  return (
    <div
      ref={coverRef}
      style={{ borderColor: "var(--border-color)" }}
      className="relative border-b-2"
    >
      <div
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "#161616",
          transition: "background-color 0.4s ease, background-image 0.4s ease",
        }}
        className="relative border-2 border-t-0 border-b-0
          flex items-center justify-center overflow-hidden
          mx-[4%] sm:mx-[10%] md:mx-[15%] lg:mx-[19.5%]
          max-h-[20vh] sm:min-h-[30vh] md:min-h-[40vh] lg:min-h-[34vh]"
      >
        {/* Video */}
        <video ref={videoRef} muted playsInline autoPlay loop className="pt-17">
          <source src="cover.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(var(#202021, #000) 1px, transparent 0.1px)`,
            backgroundSize: "10px 10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Cover;
