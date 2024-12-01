import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <main className="w-full max-w-[1200px] px-4">{children}</main>
    </div>
  );
};

export default Layout;
