import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      mygreentext:
        "bg-gradient-to-r from-[#22c55e] via-[#10b981] to-[#14b8a6] inline-block text-transparent bg-clip-text",
      mytealtext:
        "bg-gradient-to-r from-[#2dd4bf] via-[#34d399] to-[#4ade80] inline-block text-transparent bg-clip-text",
      myslatetext:
        "bg-gradient-to-r from-[#94a3b8] via-[#9ca3af] to-[#a1a1aa] inline-block text-transparent bg-clip-text",
      mygreenbg: "bg-gradient-to-r from-[#22c55e] via-[#10b981] to-[#14b8a6]",
      mytealbg: "bg-gradient-to-r from-[#22c55e] via-[#10b981] to-[#14b8a6]",
      myslatebg: "bg-gradient-to-r from-[#94a3b8] via-[#4b5563] to-[#52525b]",
      slatetozinctext:
        "bg-gradient-to-r from-[#f1f5f9] via-[#f3f4f6] to-[#f4f4f5] inline-block text-transparent bg-clip-text",
      myslate: "from-[#94a3b8] to-[#334155]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
        "mygreenbg",
        "mygreentext",
        "myslatebg",
        "myslatetext",
        "mytealbg",
        "mytealtext",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
