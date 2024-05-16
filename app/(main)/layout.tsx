'use client'

import Spinner from "@/components/Spinner";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";
import Navigation from "./_components/Navigation";




const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, isAuthenticated} = useConvexAuth();
  const Router = useRouter();
  
  if(isLoading){
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <Spinner/>
      </div>
    )
  }

  if(!isAuthenticated){
    Router.push('/sign-in');
  }


  return (
    <div className="h-full flex">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto flex-col">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;