import { classNames } from "@/utils";
import langColoursJSON from "@/utils/lang_colours.json";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppinsBold = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface Props {
  title: string;
  description: string;
  image: string;
  langs: string[];
  repo: string;
}

interface LangColours {
  [key: string]: string;
}

export default function Project({
  title,
  image,
  description,
  langs,
  repo,
}: Props) {
  const langColours = langColoursJSON as LangColours;
  return (
    <div
      className={classNames(
        "rounded-xl bg-slate-500/15 prose-h3:text-slate-100",
      )}
    >
      <div
        className={classNames(
          "h-32 flex items-center relative rounded-t-xl justify-center overflow-hidden",
        )}
      >
        <Image src={`/projects/${image}`} alt="Runic" height={10} width={400} />
      </div>
      <div
        className={classNames(
          poppinsBold.className,
          "bg-slate-500/20 px-4 py-2",
        )}
      >
        {repo ? (
          <Link
            href={`https://github.com/vqvw/${repo}`}
            className={classNames("hover:underline underline-offset-4")}
          >
            <h3 className="!m-0">{title}</h3>
          </Link>
        ) : (
          <h3 className="!m-0">{title}</h3>
        )}
      </div>
      <div className={classNames("flex flex-col px-1 py-1")}>
        <p className="!m-0 py-1 px-2">{description}</p>
        <div className="mt-4 m-1 text-xs flex gap-2 flex-wrap">
          {langs.map((lang) => {
            const pillColour = lang === "Next.js" ? "grey" : langColours[lang];
            return (
              <span
                key={lang}
                className="px-2 rounded-full border"
                style={{
                  borderColor: pillColour,
                  color: pillColour,
                }}
              >
                {lang}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
