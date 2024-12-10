import { Search, Settings, Bell } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="h-12 bg-[#1E1E1E] border-b border-[#2D2D2D] flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
      <span className="ml-2 text-sm">DEV DAM</span>
        <div className="flex space-x-2">
          {['File', 'Edit', 'View', 'Navigate', 'Code', 'Refactor', 'Run', 'Tools', 'Help'].map((item) => (
            <button
              key={item}
              className="text-gray-400 hover:text-white px-2 py-1 text-sm"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <Settings className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <Bell className="text-gray-400 hover:text-white cursor-pointer" size={20} />
      </div>
    </div>
  );
};