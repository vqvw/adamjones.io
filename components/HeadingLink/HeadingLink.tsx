import { classNames } from "@/utils";
import { Poppins } from "next/font/google";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

const poppinsBold = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface Props extends LinkProps {
  children: ReactNode;
}

export default function HeadingLink({ href, children }: Props) {
  return (
    <h1
      id={href.toString().slice(1)}
      className={classNames(
        poppinsBold.className,
        `!-mt-8 flex items-center pt-24`,
      )}
    >
      <Link
        href={href}
        className={classNames(`!no-underline !text-blue-400 hover:!underline
        mr-2 text-[1.25rem]`)}
      >
        #
      </Link>
      {children}
    </h1>
  );
}
