'use client'

import { Button } from "@/components/ui/button";
import FolderList from "../../_components/FolderList";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import toast from 'sonner'





function DashBoard() {

  const { user } = useUser();
  const create = useMutation(api.folders.createFolder);

  function onCreate(){
    const promise = create({title: "New Folder"});
                            
  }

  

  return (
    <div className="flex flex-col h-screen items-full justify-center items-center w-full gap-5">
      <Image alt="create-note" src="/create-note-img.png" height={350} width={350} />
      <p>
        Welcome to {user?.fullName}&apos;s Dashboard!
      </p>
      <Button className="pl-5" onClick={onCreate}>
        Create a Folder
      </Button>
    </div>
  );
}


export default DashBoard
