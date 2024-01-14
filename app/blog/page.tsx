import { title } from "@/components/primitives";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Chip,
  Divider,
  Link,
  Kbd,
  Breadcrumbs,
  BreadcrumbItem,
} from "@nextui-org/react";

export default function BlogPage() {
  return (
    <section className="space-y-8 mx-auto">
      <div>
        <h1 className={title()}>Blog </h1>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        <Link href="#">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>

            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>

            <CardFooter className="flex gap-2 flex-wrap">
              <Chip variant="flat" color="success">
                nextjs
              </Chip>

              <Chip variant="bordered" color="success">
                aws
              </Chip>
              <Chip variant="light" color="success">
                linux
              </Chip>
              <Chip variant="dot" color="success">
                tailwind
              </Chip>
              <Chip variant="dot" color="success">
                technology
              </Chip>
            </CardFooter>
          </Card>
        </Link>
        <Link href="#">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>

            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>

            <CardFooter className="flex gap-2 flex-wrap">
              <Chip variant="flat" color="success">
                nextjs
              </Chip>

              <Chip variant="bordered" color="success">
                aws
              </Chip>
              <Chip variant="light" color="success">
                linux
              </Chip>
              <Chip variant="dot" color="success">
                tailwind
              </Chip>
              <Chip variant="dot" color="success">
                technology
              </Chip>
            </CardFooter>
          </Card>
        </Link>
        <Link href="#">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>

            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>

            <CardFooter className="flex gap-2 flex-wrap">
              <Chip variant="flat" color="success">
                nextjs
              </Chip>

              <Chip variant="bordered" color="success">
                aws
              </Chip>
              <Chip variant="light" color="success">
                linux
              </Chip>
              <Chip variant="bordered" color="success">
                tailwind
              </Chip>
              <Chip variant="dot" color="success">
                technology
              </Chip>
            </CardFooter>
          </Card>
        </Link>
        <Link href="#">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>

            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>

            <CardFooter className="flex gap-2 flex-wrap">
              <Chip variant="flat" color="success">
                nextjs
              </Chip>

              <Chip variant="bordered" color="success">
                aws
              </Chip>
              <Chip variant="light" color="success">
                linux
              </Chip>
              <Chip variant="flat" color="success">
                tailwind
              </Chip>
              <Chip variant="dot" color="success">
                technology
              </Chip>
            </CardFooter>
          </Card>
        </Link>
        <Link href="#">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>

            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>

            <CardFooter className="flex gap-2 flex-wrap">
              <Chip variant="flat" color="success">
                nextjs
              </Chip>

              <Chip variant="bordered" color="success">
                aws
              </Chip>
              <Chip variant="light" color="success">
                linux
              </Chip>
              <Chip variant="light" color="success">
                tailwind
              </Chip>
              <Chip variant="dot" color="success">
                technology
              </Chip>
            </CardFooter>
          </Card>
        </Link>
        <Link href="#">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>

            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>

            <CardFooter className="flex gap-2 flex-wrap">
              <Chip variant="flat" color="success">
                nextjs
              </Chip>

              <Chip variant="bordered" color="success">
                aws
              </Chip>
              <Chip variant="light" color="success">
                linux
              </Chip>
              <Chip variant="dot" color="success">
                tailwind
              </Chip>
              <Chip variant="dot" color="success">
                technology
              </Chip>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </section>
  );
}
