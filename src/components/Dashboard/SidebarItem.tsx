"use client";
import Link from "next/link";
import React from "react";
import { SidebarItemType } from "./types";
import { usePathname } from "next/navigation";

export default function SidebarItem(data: SidebarItemType) {
  const pathName = usePathname();
  const isActive = pathName === `/${data.type}/${data.link}`;

  return (
    <Link href={`/${data.type}/${data.link}`}>
      <div
        className={`w-full flex items-center gap-2 p-2 ${
          isActive ? "border border-light-gray3 bg-light-gray rounded-lg" : ""
        }`}
      >
          {isActive
            ? React.cloneElement(data.selectedIcon, {
                style: { color: "#4040BF" },
              })
            : React.cloneElement(data.icon, {
                style: { color: "black" },
              })}
        <span className={`${isActive ? "text-dark-blue" : ""} text-lg`}>
          {data.label}
        </span>
      </div>
    </Link>
  );
}
