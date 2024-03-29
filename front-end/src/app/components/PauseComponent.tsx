"use client";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaCirclePlay } from "react-icons/fa6";

const PauseComponent = ({ togglePlayPause, buttonLink }: any) => {
  const context = useAppContext();

  return (
    <AnimatePresence>
      {context.isPaused && (
        <motion.div
          className={`absolute ${
            context.isFullscrean
              ? " top-[46%] "
              : " top-[46%] sm:top-[42%] lg:-translate-x-[20vw]"
          } 
          ${buttonLink === undefined ? " top-[46%] " : ""}
          z-10 rounded-full shadow-black shadow-2xl cursor-pointer`}
          onClick={togglePlayPause}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FaCirclePlay
            className="text-white rounded-full shadow-2xl bg-black 
            bg-opacity-60 opacity-80"
            size="70"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PauseComponent;
