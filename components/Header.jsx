import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link
            href="/"
            className="text-white font-sora font-semibold text-[28px] sm:text-[34px] tracking-tight hover:text-white/90 transition-colors"
            style={{ lineHeight: 1 }}
          >
            Sidikovsd
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
