"use client";
import Breadcrumb from '@/components/Breadcrumb';

export default function PagesLayout({ children }) {
  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
} 