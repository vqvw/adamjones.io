import { classNames } from "@/utils";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode, useState } from "react";
import langColoursJSON from "../../utils/lang_colours.json";

const poppinsBold = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const nerdFont = localFont({
  src: "../../public/fonts/RobotoMonoNerdFont-Regular.ttf",
  weight: "100",
});

interface Props {
  heading: string;
  icon: string;
  invertText?: boolean;
  background: string;
  children: ReactNode;
}

interface LangColours {
  [key: string]: string;
}

export default function Card({ heading, icon, invertText, children }: Props) {
  const langColours = langColoursJSON as LangColours;
  const [isOpen, setIsOpen] = useState(false);
  const background = langColours[heading];
  const backgroundLight = `color-mix(in srgb, ${background}, white 25%)`;
  const backgroundLighter = `color-mix(in srgb, ${background}, white 75%)`;

  const handleToggle = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div
      className={classNames("overflow-hidden rounded-lg border h-fit")}
      style={{
        borderColor: backgroundLight,
      }}
    >
      <button
        className={classNames(
          `!m-0 text-white flex items-center justify-between pr-4 px-3 py-1
          shrink-0 w-full`,
          {
            "!text-slate-900": invertText,
          },
        )}
        style={{ background }}
        onClick={handleToggle}
      >
        <span className={classNames(nerdFont.className, "sm:text-2xl text-md")}>
          {icon}
        </span>
        <span
          className={classNames(
            poppinsBold.className,
            "sm:text-[1rem] text-xs",
          )}
        >
          {heading}
        </span>
        <span className={classNames(nerdFont.className)}>
          {isOpen ? "󰁣" : "󰁋"}
        </span>
      </button>
      <p
        className={classNames("!m-0 sm:!text-sm text-xs", {
          "p-2 px-3 ": isOpen,
        })}
        style={{
          color: backgroundLighter,
          maxHeight: isOpen ? "100%" : 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
