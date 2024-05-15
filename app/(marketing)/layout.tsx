import React, { ReactNode } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
