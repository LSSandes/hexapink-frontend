"use client";

import React from 'react'
import AdminHeader from "@/components/Dashboard/AdminHeader";
import { PiTableLight } from "react-icons/pi";

export default function Tables() {
  return (
    <div>
      <AdminHeader icon={<PiTableLight />} label="Tables" />

    </div>
  )
}
