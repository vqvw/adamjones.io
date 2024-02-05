"use client";

import { classNames, sleep } from "@/utils";
import { Roboto_Mono } from "next/font/google";
import { createContext, useMemo, useState } from "react";
import Left from "./Left";
import Preview from "./Preview";
import Right from "./Right";

const roboto_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const KbContext = createContext<[string]>([""]);

export default function Kb() {
  const [charPress, setCharPress] = useState("");
  const [mode, setMode] = useState("-- INSERT --");

  const sentence = "Hi, I'm Adam Jones 👋@0";
  const charPressDelay = 200;
  const finalDelay = 1000;

  const inputSentence = async () => {
    for (const char of sentence) {
      await sleep(charPressDelay);
      if (char === sentence.at(-2)) {
        setCharPress("");
        await sleep(finalDelay);
      }
      setCharPress(char);
    }
    setMode("");
  };

  useMemo(inputSentence, []);

  return (
    <KbContext.Provider value={[charPress]}>
      <div className={classNames(`flex flex-col gap-[4em] items-center`)}>
        <div>
          <Preview
            sentence={sentence}
            charPressDelay={charPressDelay}
            finalDelay={finalDelay}
          />
        </div>
        <div className="flex gap-[12em]">
          <Left />
          <Right />
        </div>
        <div
          className={classNames(
            roboto_mono.className,
            `self-center text-[1.75em] text-slate-500 translate-x-[-10em]`,
          )}
        >
          {mode || <>&nbsp;</>}
        </div>
      </div>
    </KbContext.Provider>
  );
}
