'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface NavBtnProps {
  name: string;
  icon: ReactNode;
  link: string;
}

function NavBtn({ name, icon, link }: NavBtnProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick() {
    router.push(link);
  }


  return (

    <button onClick={handleClick} className={`${pathname === link ? 'bg-sky-100 text-blue-500' : ''} relative text-gray-500 w-full hover:bg-slate-200 hover:cursor-pointer flex justify-start items-center py-4 px-3 gap-4`}>
      {icon}
      <h1 className=''>
        {name}
      </h1>
      {pathname === link && (
        <div className='h-[5px] w-[3px] absolute bg-blue-500 right-0'></div>
      )}
    </button>
  )
}

export default NavBtn;