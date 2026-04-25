import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "伊勢修 | Ise Osamu",
  description:
    "伊勢修（イセオサム）のポートフォリオサイト。経営者・画家・茶人。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
