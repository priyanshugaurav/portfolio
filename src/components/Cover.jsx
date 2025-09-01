import React, { useRef, useEffect } from "react";

const Cover = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    // Scroll par bhi video play ho
    const handleScroll = () => {
      playVideo();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ borderColor: "var(--border-color)" }}
      className="relative border-b-2"
      onMouseMove={playVideo} // PC hover ke liye
      onTouchStart={playVideo} // Mobile tap ke liye
      onClick={playVideo} // fallback
    >
      <div
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "#ebebeb",
          transition: "background-color 0.4s ease, background-image 0.4s ease",
        }}
        className="
          relative border-2 border-t-0 border-b-0
          flex items-center justify-center overflow-hidden
          mx-[4%] sm:mx-[10%] md:mx-[15%] lg:mx-[19.5%]
          max-h-[20vh] sm:min-h-[30vh] md:min-h-[40vh] lg:min-h-[34vh]
        "
      >
        {/* Video */}
        <video ref={videoRef} muted playsInline>
          <source src="cover.mp4" type="video/mp4" />
        </video>

        {/* Dot Overlay */}
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
