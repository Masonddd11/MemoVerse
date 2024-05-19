'use client'

import { useMutation, useQuery } from "convex/react";

import { useState } from "react";

import { api } from "@/convex/_generated/api";

import FileCard from "./FileCard";

import { FileProps } from "@/app/interfaces/interface";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

import { Dialog, DialogTrigger, DialogContent, DialogHeader,DialogClose } from "@/components/ui/dialog"

function NoteList() {

  const create = useMutation(api.file.createFile);

  const files = useQuery(api.file.readFile)


  const [title, setTitle] = useState('');

  async function onCreate() {
    const existingFile = files.find((file: FileProps) => file.title === title);
    if (existingFile) {
      return Promise.resolve(false);
    }
    await create({ title: title });
    return Promise.resolve(true);
  }

  return (
    <>
      <div className="flex justify-between items-center px-3 ">
        <h1 className="text-[1.5rem] font-bold  pt-2">Notes</h1>
        <Dialog>
          <DialogTrigger>
            <button className="bg-green-400 text-[1.25rem] hover:bg-green-500 rounded-full size-7 flex justify-center items-center"  >
              +
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Add a new note</DialogHeader>
            <input type="text" placeholder="Title" className="w-full p-2 border border-gray-300 rounded-md" onChange={(e) => setTitle(e.target.value)} />
            
            <DialogClose asChild><Button onClick={onCreate} className="w-full mt-2">Create</Button></DialogClose>
          </DialogContent>
        </Dialog>

      </div>
      <div className="w-full flex flex-col gap-4 mt-3">
        {
          (files || []).map((file: FileProps) => (
            <div key={file._id}>
              <FileCard _id={file._id} title={file.title} _creationTime={file._creationTime} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default NoteList