"use client";

import Image from "next/image";
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
            <div className="relative h-80 w-60 overflow-hidden md:h-96 md:w-72">
              <Image
                src="/images/portrait.jpeg"
                alt="伊勢修"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 240px, 288px"
                priority
              />
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
