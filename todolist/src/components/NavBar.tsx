"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter(); // useRouter 훅 사용

  const handleLogoClick = () => {
    router.push("/"); // 로고 클릭 시 '/' 페이지로 이동
  };

  return (
    <div className="h-16 flex items-center px-8 bg-gray-100 shadow-md">
      <Image
        src="/codeit/Size=Large@2x.png"
        alt="Logo"
        width={151}
        height={40}
        className="absolute left-[360px] cursor-pointer" // 클릭 가능하도록 cursor-pointer 추가
        onClick={handleLogoClick} // 클릭 시 페이지 이동 이벤트 핸들러 추가
      />
    </div>
  );
};

export default NavBar;
