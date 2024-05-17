'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "@/components/ui/dialog"

import { DialogFooter } from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import Image from "next/image";

import { useUser } from "@clerk/clerk-react";

type CreateFolderProps = {
  onCreate: () => void;
  setTitle: (title:string) => void;
  title: string;

}


function CreateFolderCard( {onCreate,setTitle,title} : CreateFolderProps  ) {
  const { user } = useUser();
  return (
    <>
      <Image alt="create-note" src="/create-note-img.png" height={350} width={350} />
      <p>
        Welcome to {user?.fullName}&apos;s Dashboard!
      </p>
      <Dialog modal={false}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Folder</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input id="title"  value={title} className="col-span-3" onChange={(e) => setTitle(e.target.value)}  />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={onCreate}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreateFolderCard