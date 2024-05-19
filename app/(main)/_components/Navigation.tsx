import Image from "next/image"
import NavBtn from "./NavBtn"



// icons
import { StickyNote } from 'lucide-react';
import { AreaChart } from 'lucide-react';
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

//

function Navigation() {

  const { user } = useUser();
  return (
    <aside className=" h-screen relative w-full z-[999]">
      <div className="flex-col w-full mt-3 ">
        <NavBtn name='Notes' icon={<StickyNote />} link='/dashboard' />
        <NavBtn name='Analytics' icon={<AreaChart />} link='/dashboard/analytics' />
      </div>
    </aside>


  )
}

export default Navigation