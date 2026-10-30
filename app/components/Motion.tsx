"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Smooth scroll + reveal-on-scroll for [data-rise]; orbit rings spin with scroll.
// Everything is skipped under reduced motion, so the page reads in full without it.
export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-rise]").forEach((el) =>
        gsap.from(el, { y: 48, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }),
      );
      gsap.utils.toArray<HTMLElement>("[data-orbit]").forEach((el) =>
        gsap.to(el, { rotation: 360, ease: "none", scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: true } }),
      );
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
