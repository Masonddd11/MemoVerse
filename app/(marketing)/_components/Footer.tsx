import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";

function PopOverLinks() {
  return (
    <li className="flex flex-col justify-center items-center ">
      <Link href="#">About</Link>
      <Link href="#">Privacy Policy</Link>
      <Link href="#">Licensing</Link>
      <Link href="#">Contact</Link>
    </li>
  );
}

function Footer() {
  return (
    <footer className="container w-screen max-w-7xl border-2 sm:rounded-full mb-4 ">
      <div className="w-full text-center h-full flex items-center">
        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between ">
          <div className="overflow-hidden relative w-[95px] h-[95px]">
            <Image
              src="/company-icon.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <p>
              &copy; {new Date().getFullYear()} MemoVerse. All rights reserved.
            </p>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button className="my-3">Know More</Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
              <PopOverLinks />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
