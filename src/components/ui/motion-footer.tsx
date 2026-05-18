"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  --pill-bg-1: color-mix(in oklch, var(--foreground) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-1-hover: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground) 2%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
}

@keyframes footer-breathe { 0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; } 100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; } }
@keyframes footer-scroll-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes footer-heartbeat { 0%,100% { transform: scale(1); } 15%,45% { transform: scale(1.2); } 30% { transform: scale(1); } }
.animate-footer-breathe { animation: footer-breathe 8s ease-in-out infinite alternate; }
.animate-footer-scroll-marquee { animation: footer-scroll-marquee 40s linear infinite; }
.animate-footer-heartbeat { animation: footer-heartbeat 2s cubic-bezier(0.25,1,0.5,1) infinite; }
.footer-bg-grid { background-size: 60px 60px; background-image: linear-gradient(to right, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px); mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent); }
.footer-aurora { background: radial-gradient(circle at 50% 50%, color-mix(in oklch, var(--primary) 15%, transparent) 0%, color-mix(in oklch, var(--secondary) 15%, transparent) 40%, transparent 70%); }
.footer-glass-pill { background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%); box-shadow: 0 10px 30px -10px var(--pill-shadow), inset 0 1px 1px var(--pill-highlight), inset 0 -1px 2px var(--pill-inset-shadow); border: 1px solid var(--pill-border); backdrop-filter: blur(16px); transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.footer-glass-pill:hover { background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%); border-color: var(--pill-border-hover); }
.footer-giant-bg-text { font-size: 26vw; line-height: 0.75; font-weight: 900; letter-spacing: -0.05em; color: transparent; -webkit-text-stroke: 1px color-mix(in oklch, var(--foreground) 5%, transparent); }
.footer-text-glow { background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklch, var(--foreground) 40%, transparent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0px 0px 20px color-mix(in oklch, var(--foreground) 15%, transparent)); }
`;

export type MagneticButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      as?: React.ElementType;
    };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  (
    { className, children, as: Component = "button", ...props },
    forwardedRef,
  ) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as any);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as any);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: any) => {
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as any).current = node;
        }}
        className={cn("cursor-pointer", className as string)}
        {...(props as any)}
      >
        {children}
      </Component>
    );
  },
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Accountability Redefined</span>{" "}
    <span className="text-primary/60">✦</span>
    <span>Transparent Tracking</span>{" "}
    <span className="text-secondary/60">✦</span>
    <span>12-Step Progress</span> <span className="text-primary/60">✦</span>
    <span>Sponsor Connection</span> <span className="text-secondary/60">✦</span>
    <span>Absolute Privacy</span> <span className="text-primary/60">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div
        ref={wrapperRef}
        className="relative w-full h-screen"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="bottom-0 left-0 fixed flex flex-col justify-between bg-background w-full h-screen overflow-hidden text-foreground cinematic-footer-wrapper">
          <div className="top-1/2 left-1/2 z-0 absolute blur-[80px] rounded-[50%] w-[80vw] h-[60vh] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe pointer-events-none footer-aurora" />
          <div className="z-0 absolute inset-0 footer-bg-grid pointer-events-none" />
          <div
            ref={giantTextRef}
            className="-bottom-[5vh] left-1/2 z-0 absolute footer-giant-bg-text whitespace-nowrap -translate-x-1/2 pointer-events-none select-none"
          >
            ORBIS
          </div>

          <div className="top-12 left-0 z-10 absolute bg-background/60 shadow-2xl backdrop-blur-md py-4 border-border/50 border-y w-full overflow-hidden -rotate-2 scale-110">
            <div className="flex w-max font-bold text-muted-foreground text-xs md:text-sm uppercase tracking-[0.3em] animate-footer-scroll-marquee">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          <div className="z-10 relative flex flex-col flex-1 justify-center items-center mx-auto mt-20 px-6 w-full max-w-5xl">
            <h2
              ref={headingRef}
              className="mb-12 font-black footer-text-glow text-5xl md:text-8xl text-center tracking-tighter"
            >
              Ready to begin?
            </h2>

            <div
              ref={linksRef}
              className="flex flex-col items-center gap-6 w-full"
            >
              {/* Primary download buttons removed per request */}

              <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-2 w-full">
                <MagneticButton
                  as="a"
                  href="#"
                  className="px-6 py-3 rounded-full font-medium text-muted-foreground hover:text-foreground text-xs md:text-sm footer-glass-pill"
                >
                  Privacy Policy
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#"
                  className="px-6 py-3 rounded-full font-medium text-muted-foreground hover:text-foreground text-xs md:text-sm footer-glass-pill"
                >
                  Terms of Service
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#"
                  className="px-6 py-3 rounded-full font-medium text-muted-foreground hover:text-foreground text-xs md:text-sm footer-glass-pill"
                >
                  Support
                </MagneticButton>
              </div>
            </div>
          </div>

          <div className="z-20 relative flex md:flex-row flex-col justify-between items-center gap-6 px-6 md:px-12 pb-8 w-full">
            <div className="order-2 md:order-1 font-semibold text-[10px] text-muted-foreground md:text-xs uppercase tracking-widest">
              © 2026 Volvox. All rights reserved.
            </div>

            <div className="flex items-center gap-2 order-1 md:order-2 px-6 py-3 border-border/50 rounded-full cursor-default footer-glass-pill">
              <span className="font-bold text-[10px] text-muted-foreground md:text-xs uppercase tracking-widest">
                Crafted with
              </span>
              <span className="text-destructive text-sm md:text-base animate-footer-heartbeat">
                ❤
              </span>
              <span className="font-bold text-[10px] text-muted-foreground md:text-xs uppercase tracking-widest">
                by
              </span>
              <span className="ml-1 font-black text-foreground text-xs md:text-sm tracking-normal">
                Nirmal
              </span>
            </div>

            <MagneticButton
              as="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex justify-center items-center order-3 rounded-full w-12 h-12 text-muted-foreground hover:text-foreground footer-glass-pill"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-y-1.5 duration-300 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}

export default CinematicFooter;
