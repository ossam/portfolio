"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionary";

type Props = {
  dict: Dictionary;
};

export default function Hero({ dict }: Props) {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background — abstract texture placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-sumi via-sumi-light to-sumi" />

      {/* Gold foil accent lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-kinpaku/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-sm tracking-[0.3em] text-kinpaku"
        >
          {dict.hero.nameKana}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl tracking-widest text-washi md:text-7xl"
        >
          {dict.hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif-en text-base tracking-[0.2em] text-washi/60 md:text-lg"
        >
          {dict.hero.nameEn}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-kinpaku to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-serif-en text-xs tracking-[0.4em] text-ginpaku"
        >
          {dict.hero.subtitle}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-washi/40">
          {dict.hero.scroll}
        </span>
        <div className="animate-scroll-bounce">
          <div className="h-6 w-px bg-gradient-to-b from-kinpaku/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
