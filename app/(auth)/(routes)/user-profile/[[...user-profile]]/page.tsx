import { Button } from "@/components/ui/button";
import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";

const UserProfilePage = () => (
  <div className="flex-col flex justify-center items-start md:items-center">
    <div className="flex justify-center items-center gap-3 m-4">
      <Link href='/'>
        <Button>
          Home Page
        </Button>
      </Link>
      <Link href='/documents'>
        <Button>
          Dashboard
        </Button>
      </Link>
    </div>
    <UserProfile path="/user-profile" />
  </div>
);

export default UserProfilePage;