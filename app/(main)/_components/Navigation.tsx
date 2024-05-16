import Image from "next/image"
import NavBtn from "./NavBtn"

// icons
import { StickyNote } from 'lucide-react';
import { AreaChart } from 'lucide-react';
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

//

function Navigation() {

  const {user} = useUser();
  return (
    <aside className="py-4 h-screen overflow-y-auto relative flex w-60 flex-col z-[999] border-r-2 border-slate-300 justify-start items-start">
      <div className="flex justify-center items-center">
        <div className="relative w-[75px] h-[75px]">
          <Image src="/company-icon-no-text.jpeg" fill alt='icon' className='object-contain' />
        </div>
        <p className="text-2xl font-bold">
          MemoVerse
        </p>
      </div>

      <div className="flex justify-start items-center w-full px-3 pt-4 gap-3">
        <UserButton />
        <p>Welcome back, {user?.fullName}</p>
      </div>

      <div className="flex-col w-full mt-3 ">
        <NavBtn name='Notes' icon={<StickyNote />} link='/dashboard' />
        <NavBtn name='Analytics' icon={<AreaChart />} link='/dashboard/analytics' />
      </div>
    </aside>
  )
}

export default Navigation