import { classNames } from "@/utils";
import Column from "./Column";
import Key from "./Key";

export default function Left() {
  return (
    <div className={classNames("flex flex-col gap-[0.5em]")}>
      <div className={classNames("flex gap-[0.5em]")}>
        <Column chars={["@", "a", "z"]} />
        <Column chars={["w", "s", "x"]} offset={0.5} />
        <Column chars={["e", "d", "c"]} offset={1} />
        <Column chars={["r", "f", "v"]} offset={0.5} />
        <Column chars={["t", "g", "b"]} />
      </div>
      <div
        className={classNames("flex gap-[0.5em] self-end translate-x-[5em]")}
      >
        <Key char="#" />
        <Key char="#" />
        <div className={classNames("-rotate-45 flex gap-[0.75em]")}>
          <Key char=" " rotate={45 + 45 / 2} />
          <Key char="#" rotate={45 + 45 / 2} />
        </div>
      </div>
    </div>
  );
}
