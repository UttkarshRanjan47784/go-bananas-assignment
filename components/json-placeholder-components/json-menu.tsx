"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "next-view-transitions";

export default function JsonMenu() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <div className="overflow-hidden">
        <motion.div
          animate={{ y: [-100, 0], rotate: [-45, 0] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <Link
            href={`/json-placeholder/users`}
            className="font-mono text-2xl gap-10 hover:underline"
          >
            View Users
          </Link>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          animate={{ y: [-100, 0], rotate: [45, 0] }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <Link
            href={`/json-placeholder/comments`}
            className="font-mono text-2xl gap-10 hover:underline"
          >
            View Comments
          </Link>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          animate={{ y: [-100, 0], rotate: [-45, 0] }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <Link
            href={`/json-placeholder/todos`}
            className="font-mono text-2xl gap-10 hover:underline"
          >
            View ToDos
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
