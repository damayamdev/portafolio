import React from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-[#1E1E1E] text-white">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};