import { classNames } from "@/utils";
import Column from "./Column";
import Key from "./Key";

export default function Right() {
  return (
    <div className={classNames("flex flex-col gap-[0.5em]")}>
      <div className={classNames("flex gap-[0.5em]")}>
        <Column chars={["y", "h", "n"]} />
        <Column chars={["u", "j", "m"]} offset={0.5} />
        <Column chars={["i", "k", ","]} offset={1} />
        <Column chars={["o", "l", "."]} offset={0.5} />
        <Column chars={["p", "'", "/"]} />
      </div>
      <div className={classNames("-translate-x-[5em] flex gap-[0.5em]")}>
        <div className="flex gap-[0.75em] rotate-45">
          <Key char="#" rotate={-45 - 45 / 2} />
          <Key char="#" rotate={-45 - 45 / 2} />
        </div>
        <Key char="#" />
        <Key char="#" />
      </div>
    </div>
  );
}
