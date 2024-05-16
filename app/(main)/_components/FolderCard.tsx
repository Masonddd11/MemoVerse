import { FolderProps } from "@/app/interfaces/interface"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function FolderCard({ id, name, parent_folder_id }: FolderProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          {name}
        </CardHeader>
        <CardContent>
          <CardDescription>
            {parent_folder_id}
          </CardDescription>
          <CardFooter>
            {id}
          </CardFooter>

        </CardContent>
      </Card>
    </div>
  )
}

export default FolderCard