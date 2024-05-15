"use client";

import { Fade } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Header() {
  return (
    <div className="max-w-3xl space-y-4 flex flex-col items-center">
      <Fade direction="up">
        <div className="text-3xl sm:text-4xl font-bold">
          Unlock Your Mind&apos;s Potential, Organize Your Thoughts, and Inspire
          Brilliance with Our Note-Taking Mastery
        </div>
      </Fade>
      <Fade direction="up" delay={200}>
        <div className="Subheading text-lg max-w-xl">
          MemoVerse is your digital sanctuary for effortless note-taking.
        </div>
        <div className="flex items-center gap-4 p-3 justify-center">
          <Button className="w-1/2">Get Started</Button>
          <Button className="w-1/2">Learn More</Button>
        </div>
      </Fade>

      <div className="logo relative w-[200px] h-[250px] sm:w-[300px] sm:h-[320px]">
        <Image src={`/Header-img.png`} alt="hero-img" fill />
      </div>
    </div>
  );
}

export default Header;
