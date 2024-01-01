import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, ReactNode, MutableRefObject } from "react";

interface AnimatedPhraseProps {
  children: ReactNode;
}

export default function About() {
  const phrases = [
    "Let's get your website project done.",
    "We'll set the goals and get to the end.",
    "You'll get updated every 1 — 2 workdays.",
    "Hey, it's growing! We're always in touch.",
    "Slack, Zoom, whatever… Hey, it's complete!",
    "Easy and Fast.",
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 lg:px-20">
      {phrases.map((phrase, idx) => (
        <AnimatedPhrase key={idx}>{phrase}</AnimatedPhrase>
      ))}
    </section>
  );

  function AnimatedPhrase({ children }: AnimatedPhraseProps) {
    const text = useRef<HTMLSpanElement | null>(null);
    const section = useRef<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.from(text.current!, {
          scrollTrigger: {
            trigger: text.current!,
            start: "-250px",
            end: "bottom bottom",
            scrub: true,
          },
          color: "#878787",
          duration: 0.3,
        });
      }, text);

      return () => ctx.revert();
    }, []);

    return (
      <span
        ref={text}
        className="w-full text-card last:text-primary text-[1.6rem] mb-6 lg:text-3xl lg:font-semibold xl:text-5xl opacity-1 transition-colors"
      >
        {children}
      </span>
    );
  }
}
