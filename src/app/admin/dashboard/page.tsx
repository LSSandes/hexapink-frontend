"use client";

// import React, { useState, useEffect } from "react";
import AdminHeader from "@/components/Dashboard/AdminHeader";
import { RiDashboard3Line } from "react-icons/ri";

export default function Dashboard() {
  return (
    <div>
      <AdminHeader icon={<RiDashboard3Line />} label="Dashboard" />
      <div className="flex flex-row gap-4 justify-between">
        <div className="h-20 w-30 px-8 py-4 border-light-gray3 flex justify-between items-center"></div>
        <div className="h-screen w-80 px-8 py-4 border-l-2 border-light-gray1 flex justify-between items-center">www</div>
      </div>
    </div>
  )
}
