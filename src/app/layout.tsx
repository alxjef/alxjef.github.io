import "./globals.css";
import { Noto_Sans } from "next/font/google";
import clsx from "clsx";

const font = Noto_Sans({
  weight: ["200", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Alex Jef",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(font.className, "bg-primary")}>{children}</body>
    </html>
  );
}
