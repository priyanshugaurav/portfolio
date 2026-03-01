import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Premium easing: rushes to 80%, then beautifully glides into 100%
      current += (100 - current) * 0.15 + 0.5;

      if (current >= 99.9) {
        setProgress(100);
        clearInterval(interval);
        
        // Pause at 100% for just a moment so the eye registers it
        setTimeout(() => {
          setIsExiting(true);
          
          // Trigger the app to load exactly as the 500ms CSS fade finishes
          // This eliminates the black screen completely
          setTimeout(onFinish, 500); 
        }, 200);
      } else {
        setProgress(current);
      }
    }, 20); // 20ms for super fluid 60fps+ animation

    return () => clearInterval(interval);
  }, [onFinish]);

  // Format to ensure clean numbers (e.g., 04%, 99%, 100%)
  const displayProgress = Math.floor(progress).toString().padStart(2, '0');

  return (
    <div 
      // The entire container holds a solid background and fades out gracefully
      className={`fixed inset-0 z-[99999] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      
      {/* Cinematic Exit: Scales forward and blurs out smoothly */}
      <div 
        className={`relative z-10 w-full max-w-[85vw] md:max-w-4xl transition-all duration-500 ease-out ${
          isExiting ? "scale-105 blur-md opacity-0" : "scale-100 blur-0 opacity-100"
        }`}
      >
        
        {/* The Trailing Number */}
        <div className="relative w-full h-16 sm:h-20">
          <div
            className="absolute bottom-2 text-5xl sm:text-7xl font-light tracking-widest tabular-nums transition-all duration-75 ease-out"
            style={{
              color: "var(--text-color)",
              left: `${progress}%`,
              transform: `translateX(-${progress}%)` 
            }}
          >
            {displayProgress}<span className="text-2xl sm:text-4xl opacity-50 ml-1">%</span>
          </div>
        </div>

        {/* The 1px Horizon Line */}
        <div
          className="w-full h-[1px] relative overflow-hidden"
          style={{ backgroundColor: "color-mix(in srgb, var(--border-color) 40%, transparent)" }}
        >
          <div
            className="absolute top-0 left-0 h-full transition-all duration-75 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: "var(--text-color)"
            }}
          />
        </div>

        {/* Subtext Branding */}
        <div 
          className="flex justify-between items-center mt-6 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase opacity-50" 
          style={{ color: "var(--text-color)" }}
        >
          <span>Priyanshu Gaurav</span>
          <span>Portfolio '26</span>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;