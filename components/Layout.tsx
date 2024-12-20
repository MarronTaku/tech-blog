import Link from "next/link";
import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { LayoutProps } from "@/types/types";


export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        {/* nav部分をコーポネント化 */}
        <Navbar />
        {/*  */}
        <main className="w-full pd-12 px-4">{children}</main>
        {/* footer部分をコーポネント化 */}
        <Footer />
        {/*  */}
      </div>
    </div>
  );
};
 
export default Layout;