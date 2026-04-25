"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionary";

type Props = {
  dict: Dictionary;
};

export default function Contact({ dict }: Props) {
  return (
    <section id="contact" className="bg-sumi py-32 md:py-40">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-12 text-center"
        >
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-serif-en text-xs tracking-[0.4em] text-kinpaku uppercase">
              {dict.contact.sectionTitle}
            </h2>
            <p className="text-sm tracking-wider text-washi/50">
              {dict.contact.sectionSubtitle}
            </p>
            <div className="mt-2 h-px w-12 bg-kinpaku/30" />
          </div>

          <p className="text-sm leading-8 tracking-wider text-washi/60">
            {dict.contact.description}
          </p>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {dict.contact.categories.map((cat, i) => (
              <span
                key={i}
                className="border border-washi/10 px-4 py-2 text-xs tracking-wider text-washi/50"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Email link */}
          <a
            href={`mailto:${dict.contact.email}`}
            className="group mt-4 flex items-center gap-3 border border-kinpaku/30 px-8 py-4 transition-colors hover:border-kinpaku hover:bg-kinpaku/5"
          >
            <span className="text-sm tracking-wider text-kinpaku">
              {dict.contact.emailLabel}
            </span>
            <span className="text-kinpaku transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>

          {/* SNS links */}
          <div className="mt-4 flex items-center gap-8">
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-washi/30 transition-colors hover:text-kinpaku"
            >
              X
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-washi/30 transition-colors hover:text-kinpaku"
            >
              Instagram
            </a>
            <a
              href="https://note.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-washi/30 transition-colors hover:text-kinpaku"
            >
              note
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
