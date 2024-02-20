import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import {
  DiscordIcon,
  GithubIcon,
  M,
  TwitterIcon,
  FaceookIcon,
  LinkedInIcon,
  GmailIcon,
  WhatsAppIcon,
} from "@/components/icons";
import React from "react";

// import { MailIcon } from "@/components/icons.jsx";
// import { LockIcon } from "@/components/icons.jsx";
// import React from "react";
// import {Divider} from "@nextui-org/react";

import { Button, Chip } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 lg:gap-20 py-8 my-16 md:py-10 ">
      <div className="flex flex-row justify-center gap-2 items-center">
        <Link isExternal href={siteConfig.links.linkedin} aria-label="Twitter">
          <LinkedInIcon className="text-slate-400 dark:text-slate-500" />
        </Link>
        <Link isExternal href={siteConfig.links.mailto} aria-label="Twitter">
          <GmailIcon className="text-slate-400 dark:text-slate-500" />
        </Link>
        <Link isExternal href={siteConfig.links.facebook}>
          <FaceookIcon className="text-slate-400 dark:text-slate-500" />
        </Link>
        <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
          <DiscordIcon className="text-slate-400 dark:text-slate-500" />
        </Link>
        <Link isExternal href={siteConfig.links.whatsapp} aria-label="Github">
          <WhatsAppIcon className="text-slate-400 dark:text-slate-500" />
        </Link>
        <ThemeSwitch />
      </div>

      <div className="flex flex-col space-y-3 items-center justify-center">
        <div>
          <Link href="/">
            <M />
          </Link>
        </div>

        <div className="inline-block  max-w-lg text-center justify-center ">
          <h1 className="text-5xl text-wrap font-extralight text-neon-slatedarker dark:text-slate-300">
            Musabbir Sagar
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 text-center justify-center font-light">
          <Chip
            variant="flat"
            radius="none"
            size="lg"
            // className="shadow-md backdrop-blur-md bg-slate-200/30 dark:bg-slate-600/30 font-thin"
            classNames={{
              base: "shadow-lg backdrop-blur-md bg-slate-200/30 dark:bg-slate-800/40",
              content:
                "font-extralight text-neon-slatedarker dark:text-neon-slatelightmd",
            }}
          >
            {" "}
            Full Stack Developer
          </Chip>
          <Chip
            variant="flat"
            radius="none"
            size="lg"
            classNames={{
              base: "shadow-lg backdrop-blur-md bg-slate-200/30 dark:bg-slate-800/40",
              content:
                "font-extralight text-neon-slatedarker dark:text-neon-slatelightmd",
            }}
          >
            {" "}
            Enterproneuour
          </Chip>
          <Chip
            variant="flat"
            radius="none"
            size="lg"
            classNames={{
              base: "shadow-lg backdrop-blur-md bg-slate-200/30 dark:bg-slate-800/40",
              content:
                "font-extralight text-neon-slatedarker dark:text-neon-slatelightmd",
            }}
          >
            {" "}
            Digital Nomad
          </Chip>
        </div>
        <div className="flex gap-3">
          <Button
            as={Link}
            href={siteConfig.links.github}
            size="md"
            showAnchorIcon
            isExternal
            radius="none"
            className="bg-transparent border-2   hover:border-neon-slate hover:bg-neon-slate  text-neon-slatedarker hover:text-white dark:text-white shadow-sm hover:shadow-lg backdrop-blur-sm hover:backdrop-blur-lg  font-light"
          >
            <GithubIcon size={20} />
            GitHub
          </Button>

          <Button
            as={Link}
            href={siteConfig.links.upwork}
            size="md"
            showAnchorIcon
            isExternal
            radius="none"
            className="bg-neon-teal  text-white shadow-sm backdrop-blur-md"
          >
            Work With Me
          </Button>
        </div>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-neon-slatedarker dark:text-neon-slatelight">
        <a
          href="https://blog.musabbirsagar.com/"
          className="group rounded-none border border-transparent px-5 py-4 transition-colors hover:border-neon-slatelightmd hover:bg-neon-slatelight hover:dark:border-neon-slatedarker hover:dark:bg-neon-slatedarker/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-light `}>
            Blog{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Warning: Expect randomness
          </p>
        </a>
        <a
          href="https://github.com/sagarmusabbir?tab=projects"
          className="group rounded-none border border-transparent px-5 py-4 transition-colors hover:border-neon-slatelightmd hover:bg-neon-slatelight hover:dark:border-neon-slatedarker hover:dark:bg-neon-slatedarker/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-light`}>
            Project{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Projects, portfolio, and case studies
          </p>
        </a>

        <a
          href="/about"
          className="group rounded-none border border-transparent px-5 py-4 transition-colors hover:border-neon-slatelightmd hover:bg-neon-slatelight hover:dark:border-neon-slatedarker hover:dark:bg-neon-slatedarker/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-light`}>
            About <span className="text-green-400"></span>-&gt;
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            CEO by day, programmar by night
          </p>
        </a>
        <a
          href="/contact"
          className="group rounded-none border border-transparent px-5 py-4 transition-colors hover:border-neon-slatelightmd hover:bg-neon-slatelight hover:dark:border-neon-slatedarker hover:dark:bg-neon-slatedarker/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-light`}>
            Contact <span className="text-green-400"></span>-&gt;
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore my digital footprints.
          </p>
        </a>
      </div>
    </section>
  );
}
