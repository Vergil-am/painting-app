import AdminSideBar from '@/components/admin/sidebar';
import React from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <AdminSideBar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        {children}
      </div>
    </div>
  )
}

