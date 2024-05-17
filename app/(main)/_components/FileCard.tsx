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

interface FileCardProps {
  title: string;
  _creationTime: number;
  _id:string;
}

function FileCard({ _id,title, _creationTime }: FileCardProps) {
  return (
    <Card className="flex overflow-hidden">
      <Dot size={30} className="mt-5 text-slate-400" />
      <div className="hover:text-gray-600 hover:cursor-pointer">
        <CardHeader>
          <Link href={`/dashboard/file/${_id}`}>
            <CardTitle className="flex">{title}</CardTitle>
          </Link>
          <CardDescription>{new Date(_creationTime).toLocaleString()}</CardDescription>
        </CardHeader>
      </div>
    </Card>
  )
}

export default FileCard