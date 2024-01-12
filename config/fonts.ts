import {
  Inter as FontMono,
  Inter as FontSans,
  Montserrat as FontSagar,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontSagar = FontSagar({
  subsets: ["latin"],
  variable: "--font-sagar",
});
