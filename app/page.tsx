"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import HeadingLink from "@/components/HeadingLink";
import Kb from "@/components/Kb";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import { classNames } from "@/utils";
import { Inter } from "next/font/google";
import Link from "next/link";
import projects from "../public/projects.json";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={classNames("flex absolute z-10")}>
      <Nav />
      <div
        className={classNames(
          `flex flex-col gap-2 items-center justify-center mb-20 mt-24 sm:gap-6 sm:mt-18
          w-screen`,
        )}
      >
        <div className="text-[0.4rem] sm:text-[0.5rem]">
          <Kb />
        </div>
        <div
          className={classNames(
            inter.className,
            `mb-32 prose-a:no-underline prose-a:text-blue-500 prose-h1:text-2xl
            prose-h1:text-slate-100 prose-h2:sm:mt-8 prose-h2:text-xl
            prose-p:text-slate-300 prose-sm px-6 sm:prose`,
          )}
        >
          <p>
            Welcome! My name is Adam, I am a full-stack software developer based
            in England. I work with web technologies to build scalable
            applications that stand the test of time. I value clean and readable
            code, working in diverse teams, and making a positive impact on the
            world. Keep reading to find out more about my work and skillset. 👉
          </p>

          <div className="grid sm:grid-cols-2 gap-4 w-fit">
            <Link href="mailto:adam@barjo.io" target="_blank" className="w-fit">
              <Button fill>Email &gt; adam@barjo.io</Button>
            </Link>
            <Link
              href="https://github.com/vqvw"
              target="_blank"
              className="w-fit"
            >
              <Button>View GitHub Profile</Button>
            </Link>
          </div>

          <HeadingLink href="#skills">Skills</HeadingLink>

          <p>
            As a full-stack developer, I work with technologies that serve the
            customer through their whole journey. From the moment they are
            greeted, until their final interaction with us, my role is to help
            guide the customer by providing a smooth and reliable experience.
            Below I go into more detail about some of my favourite technologies
            that make this happen.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
            <div className="flex flex-col gap-2 sm:gap-4 w-full">
              <Card heading="Next.js" icon="󰔶" background="#000">
                Next.js is the meta framework I have been using to build large,
                scalable web applications for the past few years. Leveraging the
                component-based frontend architecture of React.js with the
                powerful server-side rendering capabilities of Next.js&apos;
                backend, complimented by the useful optimisations and features
                provided by Vercel.
              </Card>
              <Card heading="Node.js" icon="󰎙" background="#3c873a">
                Node.js was the gateway for me to explore how we can use web
                technologies outside of the browser and continues to be a core
                part of the tools I use everyday. Honourable mentions go to Deno
                and Bun for introducing some new and desirable features to this
                space.
              </Card>
              <Card heading="PostgreSQL" icon="" background="#31648c">
                To store and manage data, I use relational databases systems
                such as PostgreSQL, taking advantage of materialised views for
                faster query times and parameterised queries for security.
              </Card>
              <Card
                heading="JavaScript"
                icon="󰌞"
                invertText
                background="#f7df16"
              >
                We can&apos;t talk about web technologies without mentioning
                JavaScript. Afterall,{" "}
                <em>
                  &ldquo;any application that can be written in JavaScript, will
                  eventually be written in JavaScript&rdquo;
                </em>{" "}
                -Jeff Atwood
              </Card>
              <Card
                heading="Tailwind CSS"
                icon="󱏿"
                invertText
                background="#38bdf8"
              >
                Where possible, I integrate Tailwind CSS into my projects for an
                improved developer experience, working with a robust, atomic,
                component-scoped design system.
              </Card>
              <Card heading="Redis" icon="" background="#c6302b">
                Redis is the solution I go with for quick retrieval of in-memory
                data, used for caching and rapid access to key-value datasets.
              </Card>
              <Card heading="Shell" icon="" background="#ff0000">
                As a developer and avid Linux user, I spend a lot of time in the
                terminal. So, getting comfortable with the shell (Bash, ZSH), as
                well as using command-line tools, is a necessity. Shell
                scripting is one of the ways I boost my productivity and acts as
                a vital tool.
              </Card>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 w-full">
              <Card heading="TypeScript" icon="󰛦" background="#2f74c0">
                The time that I started using TypeScript was when I started
                seeing my applications reach the next level. Ensuring type
                safety and providing useful documentation for data structures
                and functions has been a game-changer.
              </Card>
              <Card heading="Go" icon="󰟓" background="#00aed8">
                Since I started using Go at university in 2018, I have been
                using the language consistently in a range of projects ranging
                from server infrastructure, microservices and command-line tools
                to assignments, creative coding, and a range of hobby-projects.
                The simplicity of the language combined with its best-in-class
                concurrency model makes it an ideal choice for so many projects.
              </Card>
              <Card heading="Amazon Web Services" icon="󰸏" background="#ff9a00">
                AWS is the main cloud management platform I have been using in
                industry in recent years, for the deployment of web services,
                user management, email sending, logging, monitoring and
                debugging.
              </Card>
              <Card heading="React.js" icon="" invertText background="#3dcaf7">
                React.js is my library of choice for writing component-based
                frontend applications, along with React Native for mobile
                applications.
              </Card>
              <Card heading="Svelte" icon="" background="#ff3e00">
                Svelte has captured my interest in recent years and continues to
                be one of the frameworks I consider most strongly for new
                projects.
              </Card>
              <Card heading="Git" icon="" background="#63583d">
                I make use of Git version control to track changes made to
                codebases and to work collaboratively with other developers.
              </Card>
            </div>
          </div>

          <HeadingLink href="#projects">Projects</HeadingLink>

          <p>
            The following is a list of personal projects I have worked on in
            recent years. The list contains projects using various languages and
            frameworks. Some are more focused on frontend and some are more
            backend, a few cover both.
          </p>

          <p>
            Feel free to click the titles of any project to view the repository
            on GitHub.
          </p>

          <div className={classNames("grid sm:grid-cols-2 gap-4 sm:gap-8")}>
            {projects.map((project) => (
              <Project
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                langs={project.langs}
                repo={project.repo}
              />
            ))}
          </div>

          <HeadingLink href="#contact">Contact me</HeadingLink>

          <p>Want to get in touch?</p>
          <p>
            Feel free to email me at:{" "}
            <a href="mailto:adam@barjo.io">adam@barjo.io</a>.
          </p>
        </div>
        <p className="text-slate-400 text-xs sm:text-sm">
          Made with Next.js, Tailwind CSS, and Neovim &lt;3
        </p>
        <p className="text-slate-400 text-xs sm:text-sm">
          Copyright © {new Date().getFullYear()} Adam Jones
        </p>
      </div>
    </div>
  );
}
