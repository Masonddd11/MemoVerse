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

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SignOutButton } from "@clerk/clerk-react";

interface User {
  fullName: string | null;
  imageUrl: string;
}

interface HamburgerProps {
  isAuthenticated: boolean;
  user: User | null | undefined;
}


export default function Hamburger({ isAuthenticated, user}: HamburgerProps) {
  return (<div className="sm:hidden">
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

                  {!isAuthenticated ? (
                    <div className="flex justify-center items-center gap-3 mt-5">
                    <Link href='/sign-up'>
                      <Button>Sign Up</Button>
                    </Link>
                    <Link href='/sign-in'>
                      <Button>Sign In</Button>
                    </Link>
                  </div>
                  ) : (
                    <div className="flex justify-center items-center gap-3 mt-5">
                      <Link href="/user-profile">
                        <Button>
                          Edit Profile
                        </Button>
                      </Link>
                      <SignOutButton>
                        <Button className="">Sign Out</Button>
                      </SignOutButton>
                    </div>
                  )
                  }
                  
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>);
}