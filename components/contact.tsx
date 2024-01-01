import Link from "next/link";

export default function Contact() {
  return (
    <div className="relative w-full h-min flex flex-col items-center justify-center gap-4 p-12 border border-card/25 overflow-hidden rounded-md shadow-box">
      <h3 className="text-primary text-xl font-semibold">
        <Link href={"/"}>hey@corizon.codes</Link>
      </h3>
      <p className="text-card text-center">Have questions? Drop a line</p>
    </div>
  );
}
