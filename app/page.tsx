import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
  title: "Bintang B.H. Hutabarat — Portfolio",
  description:
    "Cybersecurity Enthusiast & Full Stack Web Developer. Final year CS student at Institut Teknologi Indonesia.",
};

export default function HomePage() {
  return <HomeClient />;
}
