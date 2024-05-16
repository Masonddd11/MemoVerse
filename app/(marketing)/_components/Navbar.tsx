'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import Hamburger from "./Hamburger";

import Spinner from "@/components/Spinner";






function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { user } = useUser();
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


      {isLoading && (
        <Spinner />
      )}

      {!isLoading && !isAuthenticated ? (
        <>
          <Hamburger isAuthenticated={isAuthenticated} user={user} />
          <div className="sm:flex gap-3 hidden">
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>


            <SignInButton mode="modal">
              <Button>Login</Button>
            </SignInButton>
          </div>
        </>
      ) :
        (
          <>
            <Hamburger isAuthenticated={isAuthenticated} user={user} />
            <div className="sm:flex justify-center items-center gap-3 hidden ">
              <div className="flex justify-center items-center gap-2">
                <p>Welcome back,{user?.fullName}</p>
                <UserButton afterSignOutUrl="/"></UserButton>
              </div>
              <Link href='/dashboard'>
                <Button>
                  Dashboard
                </Button>
              </Link>
            </div>
          </>

        )}
    </div>
  );
}

export default Navbar;