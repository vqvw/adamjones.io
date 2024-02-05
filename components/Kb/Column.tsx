import { classNames } from "@/utils";
import Key from "./Key";

interface Props {
  chars: string[];
  offset?: number;
}

export default function Column({ chars, offset = 0 }: Props) {
  return (
    <div
      className={classNames(
        `flex flex-col gap-[0.5em] items-center justify-center`,
      )}
      style={{
        translate: `0 -${offset}rem`,
      }}
    >
      {chars.map((char) => (
        <Key key={char} char={char} />
      ))}
    </div>
  );
}
