import { classNames } from "@/utils";
import { useContext } from "react";
import { KbContext } from "./Kb";

interface Props {
  char: string;
  rotate?: number;
}

export default function Key({ char, rotate = 0 }: Props) {
  const [charPress] = useContext(KbContext);

  return (
    <div
      className={classNames(
        `bg-slate-200 border-2 border-b-2 border-slate-400 p-1 w-[3em] h-[3em]
        rounded-[0.25rem] transition`,
        {
          "!bg-blue-500 border-b !border-blue-600 translate-y-[0.3rem]":
            charPress.toLowerCase() === char,
        },
      )}
      style={{
        rotate: `${rotate}deg`,
      }}
    />
  );
}
