import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



import Link from "next/link";

import { Dot } from 'lucide-react';
import { Separator } from "@radix-ui/react-dropdown-menu";

interface FileCardProps {
  title: string;
  _creationTime: number;
  _id: string;
}

function FileCard({ _id, title, _creationTime }: FileCardProps) {
  return (
    <Link href={`/dashboard/file/${_id}`}>
      <div className="bg-white flex hover:bg-slate-300">
        <Dot size={30} className=" text-slate-400" />
        <div className="hover:text-gray-600 hover:cursor-pointer">
          <h1 className="flex font-bold">{title}</h1>
          <CardDescription>{new Date(_creationTime).toLocaleString()}</CardDescription>
        </div>
      </div>
    </Link>

  )
}

export default FileCard