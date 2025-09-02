import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      // delay calling onFinish until fade-out is done
      setTimeout(() => onFinish(), 1000); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#000000] text-white z-[100000] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Background video */}
          <img
            src="intro.gif"
            // autoPlay
            // muted
            // playsInline
            className=" w-150 object-cover"
          />


        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
