'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import toast from 'sonner'
import { useQuery } from "convex/react";


import CreateFolderCard from "../../_components/CreateFileCard";
import { FileProps } from "@/app/interfaces/interface";
import FileCard from "../../_components/FileCard";
import { useState } from "react";
import EditMenu from "../../_components/EditMenu";






function DashBoard() {

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
    <div className="w-full min-h-screen relative">
      {
        (files || []).length === 0 ? (
          <div className="flex flex-col h-screen items-full justify-center items-center w-full gap-5">
            <CreateFolderCard onCreate={onCreate} setTitle={setTitle} title={title} />
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {
              (files || []).map((file: FileProps) => (
                <div key={file._id}>
                  <FileCard _id={file._id} title={file.title} _creationTime={file._creationTime} />
                  <div className="absolute bottom-3 right-3">
                    <EditMenu onCreate={onCreate} title={title} setTitle={setTitle} />
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}


export default DashBoard
