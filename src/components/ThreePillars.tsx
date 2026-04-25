"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/dictionary";

type Props = {
  dict: Dictionary;
};

function ProductPillar({ data }: { data: Dictionary["pillars"]["product"] }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-serif-en text-2xl tracking-widest text-sumi">
          {data.title}
        </h3>
        <p className="text-xs tracking-wider text-kinpaku">{data.subtitle}</p>
        <div className="mt-2 h-px w-8 bg-kinpaku/40" />
      </div>

      <div className="flex flex-col gap-4">
        {data.items.map((item, i) => (
          <div key={i} className="group border-b border-sumi/5 pb-4">
            <div className="flex items-baseline justify-between gap-4">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium tracking-wider text-sumi transition-colors group-hover:text-kinpaku"
                >
                  {item.name}
                  <span className="ml-1 text-xs text-sumi/30">&#8599;</span>
                </a>
              ) : (
                <span className="text-sm font-medium tracking-wider text-sumi">
                  {item.name}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs leading-6 text-sumi/50">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtPillar({ data }: { data: Dictionary["pillars"]["art"] }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-serif-en text-2xl tracking-widest text-sumi">
          {data.title}
        </h3>
        <p className="text-xs tracking-wider text-kinpaku">{data.subtitle}</p>
        <div className="mt-2 h-px w-8 bg-kinpaku/40" />
      </div>

      <p className="text-sm leading-8 tracking-wider text-sumi/70">
        {data.description}
      </p>

      {/* Works grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.works.map((work, i) => (
          <div
            key={i}
            className="group relative aspect-[4/5] cursor-pointer overflow-hidden bg-sumi/5"
          >
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 transition-colors group-hover:bg-sumi/10">
              <span className="font-serif text-2xl tracking-widest text-sumi/40">
                {work.title}
              </span>
              <span className="font-serif-en text-xs tracking-wider text-sumi/30">
                {work.titleEn}
              </span>
              <span className="mt-2 text-xs text-sumi/20">{work.medium}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs leading-6 tracking-wider text-matcha">
        {data.exhibitions}
      </p>
    </div>
  );
}

function TeaPillar({ data }: { data: Dictionary["pillars"]["tea"] }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-serif-en text-2xl tracking-widest text-sumi">
          {data.title}
        </h3>
        <p className="text-xs tracking-wider text-kinpaku">{data.subtitle}</p>
        <div className="mt-2 h-px w-8 bg-kinpaku/40" />
      </div>

      <p className="text-sm leading-8 tracking-wider text-sumi/70">
        {data.description}
      </p>

      <div className="flex flex-col gap-6">
        {data.activities.map((activity, i) => (
          <div key={i} className="border-l-2 border-matcha/30 pl-6">
            <p className="text-sm font-medium tracking-wider text-sumi">
              {activity.name}
            </p>
            <p className="mt-1 text-xs leading-6 text-sumi/50">
              {activity.detail}
            </p>
            {activity.year && (
              <p className="mt-1 font-serif-en text-xs text-matcha/60">
                {activity.year}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ThreePillars({ dict }: Props) {
  return (
    <section className="bg-white/50 py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
          <motion.div
            id="product"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ProductPillar data={dict.pillars.product} />
          </motion.div>

          <motion.div
            id="art"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <ArtPillar data={dict.pillars.art} />
          </motion.div>

          <motion.div
            id="tea"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TeaPillar data={dict.pillars.tea} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
