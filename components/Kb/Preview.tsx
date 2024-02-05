import { classNames, sleep } from "@/utils";
import { Poppins } from "next/font/google";
import { useMemo, useState } from "react";

const poppinsBold = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface Props {
  sentence: string;
  charPressDelay: number;
  finalDelay: number;
}

export default function Preview({
  sentence,
  charPressDelay,
  finalDelay,
}: Props) {
  const [previewText, setPreviewText] = useState("");
  const [isCaretVisible, setIsCaretVisible] = useState(true);

  const typePreview = async () => {
    for (const char of sentence.slice(0, -2)) {
      await sleep(charPressDelay);
      setPreviewText((value) => (value += char));
    }
    await sleep(finalDelay + charPressDelay * 2);
    setIsCaretVisible(false);
  };

  useMemo(typePreview, [sentence, charPressDelay, finalDelay]);

  return (
    <div
      className={classNames(
        poppinsBold.className,
        `border-blue-500 mb-4 pr-1 text-[4.25em] text-slate-100 whitespace-pre`,
        { "border-r-4": isCaretVisible },
      )}
    >
      {previewText || <>&nbsp;</>}
    </div>
  );
}
