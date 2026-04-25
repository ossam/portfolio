import type { Dictionary } from "@/lib/dictionary";

type Props = {
  dict: Dictionary;
};

export default function Footer({ dict }: Props) {
  return (
    <footer className="border-t border-washi/10 bg-sumi py-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs tracking-wider text-washi/30">
          {dict.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
