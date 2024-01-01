import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-foreground from-20% to-background to-80% px-6 rounded-b-lg">
      <h2 className="relative text-foreground text-center -mt-4 pb-14">
        <span className="relative bg-clip-text bg-textgrad text-[64px] font-semibold overflow-hidden">easy/fast</span>
        <div className="absolute w-full h-14 bg-black left-0 -top-2 blur-xl z-10"></div>
      </h2>
      <div className="w-full border-b border-popover/30"></div>
      <div className="flex items-center justify-between py-12">
        <h4 className="text-base text-card/50">&copy;2024, Corizon Codes</h4>
        <h3 className="text-base text-card/80">
          <Link href={"https://twitter.com/coriz_coder"} target="_blank">
            Follow on X
          </Link>
        </h3>
      </div>
    </footer>
  );
}
