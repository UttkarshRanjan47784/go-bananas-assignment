import React from "react";

import { motion } from "framer-motion";

export default function LoadingAni() {
  return (
    <div className="w-full p-24 space-x-5 justify-center items-center">
      <motion.div
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
        className="size-8 bg-red-600 mb-64 rounded-full"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -50, 0] }}
        transition={{
          duration: 1,
          delay: 0.2,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="size-8 bg-red-600 mb-64 rounded-full"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -50, 0] }}
        transition={{
          duration: 1,
          delay: 0.4,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="size-8 bg-red-600 mb-64 rounded-full"
      ></motion.div>
    </div>
  );
}
