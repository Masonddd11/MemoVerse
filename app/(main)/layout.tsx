'use client'

import Spinner from "@/components/Spinner";
import { useConvexAuth } from "convex/react";
import { useRouter } from "next/navigation";
import Navigation from "./_components/Navigation";
import NoteList from "./_components/NoteList";


import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"







const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const Router = useRouter();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <Spinner />
      </div>
    )
  }

  if (!isAuthenticated) {
    Router.push('/sign-in');
  }


  return (
    // <div className="h-full flex">
    //   <Navigation />
    //   <main className="flex-1 h-full overflow-y-auto flex-col">
    //     {children}
    //   </main>
    // </div>


      <div className="flex">
        
        <div className="flex-shrink">
          <Navigation />
        </div>

        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-screen max-w-screen rounded-lg border"
        >
          <ResizablePanel defaultSize={25} minSize={10} maxSize={30}>
            <NoteList />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-start justify-start p-6">
              {children}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
  );
};

export default MainLayout;