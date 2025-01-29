"use client";

import React from 'react'
import AdminHeader from "@/components/Dashboard/AdminHeader";
import { PiBankLight } from "react-icons/pi";

export default function Banks() {
  return (
    <div>
      <AdminHeader icon={<PiBankLight />} label="Banks" />

    </div>
  )
}