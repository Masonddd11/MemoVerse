'use client'

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

function Page({ params }: { params: { _id: string } }) {
  
  const files = useQuery(api.file.readFilebyId, { fileId: params._id });

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (files?.[0]?.title) {
      setTitle(files[0].title);
    }
  }, [files]);

  return (
    <>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
    </>
  )
}

export default Page;