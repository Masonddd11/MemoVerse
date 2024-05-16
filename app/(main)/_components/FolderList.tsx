import FolderCard from "./FolderCard";
import { FolderProps } from "@/app/interfaces/interface";


function FolderList({folders} : { folders: FolderProps[] }) {
  return (
    <div>
      {folders.map((folder) => (
        <FolderCard key={folder.id} name={folder.name} parent_folder_id={folder.parent_folder_id} />
      ))}
    </div>
  )
}

export default FolderList;