import { TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav role="navigation" className="flex items-center justify-between">
        <div className="">
          <Link href={"/"} className="text-lg">
            Corizon
          </Link>
        </div>
        <ul>
          <li>
            <Link href={"https://twitter.com/coriz_coder"} target="_blank" className="flex items-center gap-1 transition-colors hover:text-popover">
              <TwitterIcon size={18} />
              <span className="text-sm">c.codes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
