"use client";

import { UserData } from "@/types";
import { motion } from "framer-motion";

export default function JsonUserCards({
  data,
  ind,
}: {
  data: UserData;
  ind: number;
}) {
  return (
    <motion.div
      animate={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.1 * ind }}
      className="bg-muted dark:bg-background dark:border dark:border-muted-foreground shadow-lg p-5 rounded-xl flex flex-col justify-center items-center"
    >
      <h3 className="font-mono font-semibold text-center">{data.name}</h3>
      <p className="font-mono text-muted-foreground text-sm text-center mb-8">
        @{data.username}
      </p>
      <p className="font-mono text-muted-foreground text-sm text-center">
        email : {data.email}
      </p>
    </motion.div>
  );
}
