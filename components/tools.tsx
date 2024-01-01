import {
  BellElectricIcon,
  BitcoinIcon,
  BrainIcon,
  DumbbellIcon,
  FilmIcon,
  GraduationCapIcon,
  PiggyBankIcon,
  ServerIcon,
  SigmaSquareIcon,
} from "lucide-react";

export default function Tools() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">I work with</h2>
      <div className="flex flex-col gap-8 pt-6">
        <div className="flex items-center gap-2">
          <div className="bg-foreground p-2.5 rounded-md">
            <BitcoinIcon size={20} className="text-card" />
          </div>
          <p className="text-lg">Web 3</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-foreground p-2.5 rounded-md">
            <SigmaSquareIcon size={20} className="text-card" />
          </div>
          <p className="text-lg">Saas</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-foreground p-2.5 rounded-md">
            <BellElectricIcon size={20} className="text-card" />
          </div>
          <p className="text-lg">AI</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-foreground p-2.5 rounded-md">
            <ServerIcon size={20} className="text-card" />
          </div>
          <p className="text-lg">Service Providers</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-foreground p-2.5 rounded-md">
            <BrainIcon size={20} className="text-card" />
          </div>
          <p className="text-lg">Productivity</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-foreground p-2.5 rounded-md">
            <DumbbellIcon size={20} className="text-card" />
          </div>
          <p className="text-lg">Health & Wellness</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-foreground p-2.5 rounded-md">
            <FilmIcon size={20} className="text-card" />
          </div>
          <p className="text-lg">Multimedia</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-foreground p-2.5 rounded-md">
            <PiggyBankIcon size={20} className="text-card" />
          </div>
          <p className="text-lg">Fintech</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-foreground p-2.5 rounded-md">
            <GraduationCapIcon size={20} className="text-card" />
          </div>
          <p className="text-lg">EdTech</p>
        </div>
      </div>
    </section>
  );
}
