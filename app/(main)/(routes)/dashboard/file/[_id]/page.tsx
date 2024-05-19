'use client'

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

 

function Page({params}: {params:{ _id: string}}) {

  const files = useQuery(api.file.readFilebyId, { fileId: params._id,})

  

  

  return (
    <>
    <div>{params._id}</div>
    <div>{JSON.stringify(files)}</div>
    </>
    
  )
}

export default Page