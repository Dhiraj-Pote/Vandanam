"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const collapsed = localStorage.getItem('sidebarCollapsed') === 'true';
      setSidebarCollapsed(collapsed);
    };

    // Listen for custom events from sidebar
    window.addEventListener('sidebarToggle', handleStorageChange);
    handleStorageChange(); // Initial check

    return () => {
      window.removeEventListener('sidebarToggle', handleStorageChange);
    };
  }, []);

  return (
    <>
      <Sidebar onToggle={setSidebarCollapsed} />
      <main className={`min-h-screen transition-all duration-300 ${
        sidebarCollapsed ? 'pl-0' : 'pl-72'
      }`}>
        <div className={`mx-auto px-8 py-12 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm my-8 mr-8 ${
          sidebarCollapsed ? 'max-w-6xl ml-8' : 'max-w-4xl'
        }`}>
          {children}
        </div>
      </main>
    </>
  );
}