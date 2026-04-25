"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/dictionary";

type Props = {
  dict: Dictionary;
  lang: Locale;
};

const navKeys = ["about", "product", "art", "tea", "philosophy", "contact"] as const;

export default function Header({ dict, lang }: Props) {
  const [open, setOpen] = useState(false);
  const otherLang = lang === "ja" ? "en" : "ja";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-washi/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href={`/${lang}`}
          className="font-serif-en text-lg tracking-widest text-sumi"
        >
          Ise Osamu
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-sm tracking-wider text-sumi/70 transition-colors hover:text-kinpaku"
            >
              {dict.header[key]}
            </a>
          ))}
          <Link
            href={`/${otherLang}`}
            className="ml-4 border border-sumi/20 px-3 py-1 text-xs tracking-widest text-sumi/70 transition-colors hover:border-kinpaku hover:text-kinpaku"
          >
            {otherLang.toUpperCase()}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href={`/${otherLang}`}
            className="border border-sumi/20 px-3 py-1 text-xs tracking-widest text-sumi/70"
          >
            {otherLang.toUpperCase()}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`block h-px w-6 bg-sumi transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-sumi transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-sumi transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-sumi/10 bg-washi/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center gap-6 py-8">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wider text-sumi/70 transition-colors hover:text-kinpaku"
              >
                {dict.header[key]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
