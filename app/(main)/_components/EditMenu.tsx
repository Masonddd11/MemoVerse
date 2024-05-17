'use client'

import { Button } from "@/components/ui/button"
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";


import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,

} from "@/components/ui/hover-card"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Plus } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

type CreateFolderProps = {
  onCreate: () => Promise<boolean>;
  setTitle: (title: string) => void;
  title: string;

}

function EditMenu({ onCreate, setTitle, title }: CreateFolderProps) {

  const handleError = () => {
    onCreate().then((success: boolean) => {
      if (!success) {
        setErrorMsg('Note already exists')
      }
      else {
        setOpen(false);
      }
    })
  }


  const [errorMsg, setErrorMsg] = useState('');
  const [open, setOpen] = useState(false);
  return (
    <>
      <HoverCard openDelay={100} closeDelay={200}>
        <HoverCardTrigger>
          <Button variant="outline">
            <Plus />
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="flex flex-col">
          <Button variant="outline" onClick={() => setOpen(true)}>Edit Profile</Button>
        </HoverCardContent>
      </HoverCard>

      <Dialog open={open} onOpenChange={setOpen} modal={false}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Note</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input value={title} id="title" onChange={(e) => setTitle(e.target.value)} className="col-span-3" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EditMenu