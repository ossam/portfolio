import { getDictionary, type Locale } from "@/lib/dictionary";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ThreePillars from "@/components/ThreePillars";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "en" ? "en" : "ja";
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <ThreePillars dict={dict} />
        <Philosophy dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
