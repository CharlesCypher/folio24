export default function Footer() {
  return (
    <footer className="bg-card px-6">
      <h2 className="relative text-foreground text-center -mt-4 pb-14">
        <span className="relative bg-clip-text bg-textgrad text-7xl font-semibold">easy/fast</span>
        <div className="absolute w-full h-14 bg-black left-0 -top-6 blur-xl z-10"></div>
      </h2>
      <div className="w-full border-b border-popover/30"></div>
      <div className="flex items-center justify-between py-12">
        <h4 className="text-base text-card/50">&copy;2024, Corizon Codes</h4>
        <h3 className="text-xl text-card/80">Follow on X</h3>
      </div>
    </footer>
  );
}
