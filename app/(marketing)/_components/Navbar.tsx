import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import Link from "next/link";

function Navbar() {
  return (
    <div className="container flex justify-between items-center">
      <div className="flex justify-center items-center">
        <div className="logo relative w-[70px] h-[70px] sm:w-[75px] sm:h-[75px]">
          <Image src="/company-icon-no-text.jpeg" alt="hero-img" fill />
        </div>
        <div>
          <h1 className="text-2xl font-bold">MemoVerse</h1>
        </div>
      </div>
      <div className="sm:hidden">
        <Drawer direction="right">
          <DrawerTrigger>
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="">
            <DrawerHeader>
              <DrawerTitle className="text-3xl">Menu</DrawerTitle>
              <DrawerDescription>
                <div>
                  <ul className="flex flex-col gap-3 mt-3 text-xl">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="flex justify-center items-center gap-3 mt-5">
                  <Link href='/sign-up'>
                  <Button>Sign Up</Button>
                  </Link>
                  <Link href='/sign-in'>
                    <Button>Sign In</Button>
                  </Link>
                </div>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="sm:flex gap-3 hidden">
        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
