"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("cursor-pointer");
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: isHovering ? 2.5 : 1,
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          >
            {/* Inner dot */}
            <div className="w-2 h-2 bg-white rounded-full" />
            
            {/* Outer ring */}
            <motion.div 
              animate={{ 
                width: isHovering ? 40 : 32,
                height: isHovering ? 40 : 32,
                borderColor: isHovering ? "rgba(220, 38, 38, 0.5)" : "rgba(255, 255, 255, 0.2)",
                backgroundColor: isHovering ? "rgba(220, 38, 38, 0.1)" : "rgba(220, 38, 38, 0)"
              }}
              className="absolute border rounded-full"
            />

            {/* Interaction Text (Optional/Subtle) */}
            {isHovering && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute text-[4px] font-black uppercase tracking-tighter text-white"
              >
                view
              </motion.span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
