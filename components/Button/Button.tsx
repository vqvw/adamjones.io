import { classNames } from "@/utils";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

interface Props {
  children: ReactNode;
  fill?: boolean;
}

export default function Button({ children, fill }: Props) {
  return (
    <button
      className={classNames(
        poppins.className,
        `border-2 border-blue-700 px-4 py-2
        rounded-md text-xs sm:text-sm`,
        {
          "bg-blue-700 text-white": fill,
          "text-blue-500": !fill,
        },
      )}
    >
      {children}
    </button>
  );
}
