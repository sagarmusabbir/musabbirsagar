import { Navbar } from "@/components/navbar";
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className=" flex flex-colcontainer mx-auto  max-w-screen-xl pt-8 px-6 flex-grow text-center  items-center justify-center gap-4">
        {children}
      </div>
    </>
  );
}
