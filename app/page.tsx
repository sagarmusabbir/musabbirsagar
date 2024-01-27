import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import {
  DiscordIcon,
  GithubIcon,
  NotificationIcon,
  TwitterIcon,
} from "@/components/icons";
import React from "react";

import { Kbd } from "@nextui-org/kbd";
// import { MailIcon } from "@/components/icons.jsx";
// import { LockIcon } from "@/components/icons.jsx";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Avatar,
} from "@nextui-org/react";
// import React from "react";
// import {Divider} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { Button, Chip } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 lg:gap-24 py-8 mt-16 md:py-10 ">
      <div className="flex flex-row justify-center gap-2 items-center">
        <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
          <TwitterIcon className="text-slate-400 dark:text-slate-500" />
        </Link>
        <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
          <DiscordIcon className="text-slate-400 dark:text-slate-500" />
        </Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-slate-400 dark:text-slate-500" />
        </Link>
        <ThemeSwitch />
      </div>

      <div className="flex flex-col space-y-3 items-center justify-center">
        {/* <Chip
          // startContent={
          //   // {<NotificationIcon size={16} />}
          //   <Chip size={"sm"} variant="light" color="success">
          //     New
          //   </Chip>
          // }
          variant="dot"
          color="success"
          size={"sm"}
        >
          Introducing
          <Link
            isExternal
            href="https://github.com/sagarmusabbir/Eventually"
            color="foreground"
            className="text-xs"
            showAnchorIcon
          >
            &nbsp;Eventually
          </Link>
          , a sleek and responsive Hugo theme.
        </Chip> */}

        <div className="inline-block  max-w-lg text-center justify-center ">
          {/* <h1 className={title()}>Musabbir&nbsp;</h1>
          <h1
            className={title({
              color: "green",
            })}
          >
            Sagar&nbsp;
          </h1> */}
          <h1 className="text-5xl font-bold text-slate-700 dark:text-slate-300">
            Musabbir&nbsp;Sagar
          </h1>
        </div>

        <div className="flex flex-wrap gap-2 text-center justify-center">
          <Chip
            variant="flat"
            radius="sm"
            size="md"
            className="shadow-md backdrop-blur-md bg-slate-200/30 dark:bg-slate-700/30"
          >
            {" "}
            Full Stack Developer
          </Chip>
          <Chip
            variant="flat"
            radius="sm"
            size="md"
            className="shadow-md backdrop-blur-md bg-slate-200/30 dark:bg-slate-700/30"
          >
            {" "}
            Enterproneuour
          </Chip>
          <Chip
            variant="flat"
            radius="sm"
            size="md"
            className="shadow-md backdrop-blur-md bg-slate-200/30 dark:bg-slate-700/30"
          >
            {" "}
            Digital Nomad
          </Chip>
        </div>
        <div className="flex gap-3">
          {/* <Link
            isExternal
            showAnchorIcon
            className={buttonStyles({
              variant: "flat",
              radius: "sm",
            })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link> */}

          {/* <Link
            href={siteConfig.links.upwork}
            showAnchorIcon
            isExternal
            className={buttonStyles({
              radius: "sm",
              variant: "ghost",
              size: "md",
            })}
          >
            Work With Me
          </Link> */}

          <Button
            as={Link}
            href={siteConfig.links.upwork}
            showAnchorIcon
            isExternal
            radius="sm"
            className="bg-transparent border border-slate-200 dark:border-slate-800 dark:hover:border-neon-slate hover:bg-neon-slate text-slate-700 hover:text-white dark:text-white shadow-lg backdrop-blur-md"
          >
            <GithubIcon size={20} />
            GitHub
          </Button>

          <Button
            as={Link}
            href={siteConfig.links.upwork}
            showAnchorIcon
            isExternal
            radius="sm"
            className="bg-gradient-to-tr from-neon-gray to-neon-slate text-white shadow-lg backdrop-blur-md"
          >
            Work With Me
          </Button>

          {/* <Link>
            <Button
              radius="md"
              className=" shadow-lg backdrop-blur-lg bg-white/30 dark:bg-gray/30"
            >
              Work With Me
            </Button>
          </Link> */}
        </div>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-slate-950 dark:text-white">
        <a
          href="./blog"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:dark:border-slate-700 hover:dark:bg-slate-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
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
          href="./project"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:dark:border-slate-700 hover:dark:bg-slate-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
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
          href="./about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:dark:border-slate-700 hover:dark:bg-slate-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About <span className="text-green-400"></span>-&gt;
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            CEO by day, programmar by night
          </p>
        </a>
        <a
          href="./contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-slate-300 hover:bg-slate-100 hover:dark:border-slate-700 hover:dark:bg-slate-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact <span className="text-green-400"></span>-&gt;
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Follow my digital footprints
          </p>
        </a>
      </div>
    </section>
  );
}
