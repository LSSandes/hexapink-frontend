import Link from "next/link";
import React from "react";
import {
  PiCheckBold,
  PiDatabaseLight,
  PiImageSquareLight,
  PiPlusCircle,
} from "react-icons/pi";
import { FaRegFolderOpen } from "react-icons/fa";
import { PiMapPinLight } from "react-icons/pi";

export default function NewFileSkeleton() {
  return (
    <div className="w-full border-b border-light-gray1 relative px-8 py-4 flex items-center gap-2 text-light-gray3">
      <div className="w-6 h-6 border border-dashed rounded-md flex items-center justify-center">
        <PiCheckBold />
      </div>
      {/* Collection Item */}
      <div className="w-full bg-[#F7F7FC] flex justify-around border border-dashed border-light-gray3 rounded-lg font-redacted-script">
        <div className="w-full p-3 flex items-center">
          <FaRegFolderOpen className="text-2xl mr-2" />
          <span>file_255</span>
        </div>
        <div className="w-full p-3 flex items-center gap-2 border-l border-dashed border-light-gray3">
          <div className="w-12 h-12 bg-[#F0F0FA] border border-light-gray3 rounded-l-lg flex items-center justify-center rounded-lg">
            <PiImageSquareLight className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Insurance Companies</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <PiDatabaseLight className="text-md" />
                <span>Particuliers</span>
              </div>
              <div className="flex items-center">
                <PiMapPinLight className="text-md" />
                <span>Belgique</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-3 flex items-center divide-x border-l border-dashed border-light-gray3">
          <span>12</span>
        </div>
        <div className="w-full p-3 flex items-center gap-2 border-l border-dashed border-light-gray3">
          <span>1500</span>
        </div>
        <div className="w-full p-3 flex items-center gap-2 border-l border-dashed border-light-gray3">
          <span>1500-5</span>
        </div>
        <div className="w-full p-3 flex items-center border-l border-dashed border-light-gray3">
          11 Nov 2024
        </div>
      </div>

      <Link href="/user/new-file" className="absolute left-1/2 transform -translate-x-1/2 rounded-full px-4 py-2 flex items-center gap-2 bg-dark-blue text-white">
        <PiPlusCircle className="text-2xl" /> <span>New File</span>
      </Link>
    </div>
  );
}
