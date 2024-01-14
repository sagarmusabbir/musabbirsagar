import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
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
} from "@nextui-org/react";
// import React from "react";
// import {Divider} from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { Button, Chip } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1
          className={title({
            class: "pb-1",
          })}
        >
          Musabbir&nbsp;
        </h1>
        <h1
          className={title({
            class: "pb-1",
            color: "mytealtext",
          })}
        >
          Sagar&nbsp;
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-1 mt-2">
          {/* <h1 className={title()}>
          websites regardless of your design experience.
        </h1> */}
          {/* <h2 className={subtitle({ class: "mt-4" })}>
          Full Stack Developer | Enterproneuour | Digital Nomad
        </h2> */}
          {/* <h2 className={subtitle({ class: "mt-4 text-lg" })}> */}
          {/* <Kbd keys={["command"]} className="p-1 text-base mt-2 font-light ">
            Full Stack Developer
          </Kbd>
          &nbsp;
          <Kbd keys={["shift"]} className="p-1 text-base  mt-2 font-light">
            Enterproneuour
          </Kbd>
          &nbsp;
          <Kbd keys={["enter"]} className="p-1 text-base  mt-2 font-light ">
            Digital Nomad
          </Kbd> */}
          <Chip variant="flat" radius="sm" className="ml-2">
            {" "}
            Full Stack Developer
          </Chip>
          <Chip variant="flat" radius="sm" className="ml-2">
            {" "}
            Enterproneuour
          </Chip>
          <Chip variant="flat" radius="sm" className="ml-2">
            {" "}
            Digital Nomad
          </Chip>
          {/* </h2> */}
        </div>
      </div>

      <div className="flex gap-3 mt-8 lg:mt-16">
        <Link
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "default",
            radius: "sm",
            variant: "ghost",
          })}
        >
          Say Hi!
        </Link>

        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "sm" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8 lg:mt-16">
        <Card>
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
        </Card>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left mt-8 lg:mt-16">
        <a
          href="./blog"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Blog{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <span className="bg-gradient-to-r from-green-500 to-green-600 inline-block text-transparent bg-clip-text ">
              Warning
            </span>
            : Expect randomness, occasional wisdom, and a distinct lack of
            seriousness.
          </p>
        </a>
        <a
          href="./project"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Project{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Think of it as a blend of projects, portfolio, and case studies
            rolled into one!
          </p>
        </a>

        <a
          href="./about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {" "}
            <span className="bg-gradient-to-r from-green-500 to-green-600 inline-block text-transparent bg-clip-text ">
              {" "}
              Founder of thirdbracket.co.uk
            </span>{" "}
            by day, professional next.js developer @Upwork by night
          </p>
        </a>
        <a
          href="./contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Follow me on spcial media for daily updates. Ask me anything, i will
            answer withing 24 hours.
          </p>
        </a>
      </div>
    </section>
  );
}
