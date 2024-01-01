"use client";

import { Slider } from "./slider";

export default function Works() {
  return (
    <section>
      <h3 className="text-2xl lg:text-3xl font-semibold mb-6">The Latest</h3>
      <div className="flex flex-col items-center gap-4 lg:gap-20">
        <Slider />
      </div>
    </section>
  );
}
