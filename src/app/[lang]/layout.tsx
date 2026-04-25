import type { Metadata } from "next";
import { Noto_Serif_JP, Cormorant_Garamond } from "next/font/google";
import { getDictionary } from "@/lib/dictionary";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export async function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "ja";
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "en" ? "en" : "ja";
  return (
    <html
      lang={lang}
      className={`${notoSerifJP.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full" style={{ fontFamily: "var(--font-noto-serif-jp), Georgia, serif" }}>
        {children}
      </body>
    </html>
  );
}
