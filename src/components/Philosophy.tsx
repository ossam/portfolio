"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionary";

type Props = {
  dict: Dictionary;
};

export default function Philosophy({ dict }: Props) {
  return (
    <section id="philosophy" className="py-32 md:py-40">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-12 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-serif text-2xl tracking-widest text-sumi md:text-3xl">
              {dict.philosophy.sectionTitle}
            </h2>
            <p className="font-serif-en text-xs tracking-[0.3em] text-kinpaku">
              {dict.philosophy.sectionSubtitle}
            </p>
            <div className="mt-2 h-px w-12 bg-kinpaku/30" />
          </div>

          <div className="flex flex-col gap-6">
            {dict.philosophy.body.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-sm leading-8 tracking-wider text-sumi/70 md:text-base"
              >
                {line}
              </p>
            ))}
          </div>

          <p className="text-sm tracking-wider text-matcha">
            {dict.philosophy.book}
          </p>

          {dict.philosophy.noteUrl && (
            <a
              href={dict.philosophy.noteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-kinpaku/30 pb-1 text-xs tracking-wider text-kinpaku transition-colors hover:border-kinpaku"
            >
              {dict.philosophy.noteLabel} &rarr;
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
