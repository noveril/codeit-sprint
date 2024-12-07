"use client";
import React from "react";
import Image from "next/image";

const NavBar = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className="h-16 flex items-center px-8 bg-gray-100 shadow-md">
      <Image
        src="/codeit/Size=Large@2x.png"
        alt="Logo"
        width={151}
        height={40}
        className="cursor-pointer"
        onClick={handleLogoClick}
      />
    </div>
  );
};

export default NavBar;
