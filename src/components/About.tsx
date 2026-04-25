"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionary";

type Props = {
  dict: Dictionary;
};

export default function About({ dict }: Props) {
  return (
    <section id="about" className="py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="font-serif-en text-xs tracking-[0.4em] text-kinpaku uppercase">
            {dict.about.sectionTitle}
          </h2>
          <p className="text-sm tracking-wider text-sumi/50">
            {dict.about.sectionSubtitle}
          </p>
          <div className="mt-2 h-px w-12 bg-kinpaku/30" />
        </motion.div>

        <div className="mt-16 flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="h-72 w-56 bg-sumi/5 md:h-80 md:w-64">
              <div className="flex h-full w-full items-center justify-center text-xs text-sumi/30">
                Portrait
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-xs tracking-widest text-kinpaku">
              {dict.about.location}
            </p>
            {dict.about.bio.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-sm leading-8 tracking-wider text-sumi/80 md:text-base"
              >
                {line}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
