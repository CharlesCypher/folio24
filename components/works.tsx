"use client";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "./slider";

export default function Works() {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-6">The Latest</h3>
      <div className="flex flex-col items-center gap-4">
        <Slider />
      </div>
    </section>
  );
}
