import { classNames } from "@/utils";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useState } from "react";

const nerdFont = localFont({
  src: "../../public/fonts/RobotoMonoNerdFont-Regular.ttf",
  weight: "100",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const poppinsBold = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [hasScrolled]);

  return (
    <nav
      className={classNames(
        poppins.className,
        `border-b border-b-transparent fixed flex h-16 items-center
        justify-between px-6 sm:h-16 sm:px-48 text-slate-400 w-screen z-10`,
        { "bg-black !border-b-slate-800": hasScrolled },
      )}
    >
      <div
        className={classNames(
          poppinsBold.className,
          `flex gap-6 items-center justify-center text-xs`,
        )}
      >
        <Link
          href="/"
          className={classNames(
            `border-2 border-blue-400 px-3 py-1 rounded-full text-blue-400 text-xs`,
          )}
        >
          Adam Jones
        </Link>
        <Link
          href="https://github.com/vqvw"
          className={classNames(nerdFont.className, "pr-1.5 text-2xl")}
        >
          
        </Link>
        <Link
          href="mailto:adam.email.jones@gmail.com"
          className={classNames(nerdFont.className, `pr-1.5 text-2xl`)}
        >
          
        </Link>
      </div>
      <div
        className={classNames(`gap-8 hidden items-center justify-center
        sm:flex`)}
      >
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
