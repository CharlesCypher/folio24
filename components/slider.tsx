import * as React from "react";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { LinkIcon } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export function Slider() {
  return projects.map((project) => (
    <Card key={project.id} className="w-full bg-foreground text-card p-1.5 rounded-xl">
      <div>
        <Carousel className="relative">
          <CarouselContent>
            {project.images.map((image) => (
              <CarouselItem key={image.id}>
                <Image src={image.link} alt={project.name} width={365} height={265} className="w-full h-[265px] object-cover rounded-xl" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-none border-none" />
          <CarouselNext className="bg-none border-none" />
          <Link
            href={project.link}
            className="bg-background/15 absolute top-2 right-2 p-4 flex items-center justify-center border border-card/70 rounded-full"
          >
            <span>
              <LinkIcon size={18} />
            </span>
          </Link>
        </Carousel>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <h4>Rebank Website for Banking</h4>
          <div className="">
            <Image
              src={project.images[0].link}
              alt=""
              width={56}
              height={56}
              className="w-14 h-14 object-contain border-2 border-card rounded-full"
            />
          </div>
        </div>
      </div>
    </Card>
  ));
}
