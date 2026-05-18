"use client";

import React from "react";
import { CinematicFooter } from "./motion-footer";

export default function Demo() {
  return (
    <div className="relative bg-background selection:bg-white/20 w-full min-h-screen overflow-x-hidden font-sans">
      <main className="z-10 relative flex flex-col justify-center items-center bg-background border-white/10 border-b rounded-b-3xl w-full min-h-[120vh] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />
        <h1 className="mb-8 px-4 font-light text-neutral-400 text-4xl md:text-5xl text-center uppercase tracking-[0.2em]">
          Scroll down to reveal
        </h1>
        <div className="bg-gradient-to-b from-neutral-400 to-transparent w-[1px] h-32" />
      </main>

      <CinematicFooter />
    </div>
  );
}
