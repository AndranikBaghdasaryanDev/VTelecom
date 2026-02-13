import { Search, Maximize, Bell, Settings, ChevronDown } from 'lucide-react';
import { toggleFullScreen } from '../../utils/toggleFullScreen';
import type { DesktopNavProps } from '../../types/header/desktopNav';

export const DesktopNav = ({ 
    languages, selectedLang, setSelectedLang, isLangOpen, setIsLangOpen, onSettingsClick 
}: DesktopNavProps) => {
    return (
        <div className="hidden md:flex items-center gap-6">
            {/* Search */}
            <div className="relative group">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white/15 border-none outline-none rounded-full py-2 px-5 pr-10 text-sm placeholder:text-white/70 focus:ring-2 focus:ring-white/30 transition-all w-40 lg:w-56 focus:lg:w-72"
                />
                <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70" />
            </div>

            {/* Language Selector */}
            <div className="relative">
                <div onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 cursor-pointer hover:bg-white/10 px-3 py-2 rounded-lg transition select-none">
                    <img src={selectedLang.flag} alt={selectedLang.name} className="w-5 h-3.5 object-cover rounded-[1px]" />
                    <span className="text-sm font-medium">{selectedLang.name}</span>
                    <ChevronDown size={14} className="opacity-70" />
                </div>
                {isLangOpen && (
                    <>
                        <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)}></div>
                        <div className="absolute top-[120%] right-0 w-44 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-20">
                            {languages.map((lang) => (
                                <div key={lang.code} onClick={() => { setSelectedLang(lang); setIsLangOpen(false); }} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    <img src={lang.flag} className="w-5 h-3.5 object-cover" />
                                    <span className="text-sm">{lang.name}</span>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Icons */}
            <Maximize onClick={toggleFullScreen} size={18} className="cursor-pointer hover:scale-110 transition opacity-90" />
            <div className="relative cursor-pointer hover:scale-110 transition">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-[9px] font-bold h-3.5 w-3.5 flex items-center justify-center rounded-full border-2 border-[#6c5fb1]">3</span>
            </div>

            {/* Profile & Settings Trigger */}
            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-9 h-9 rounded-full border-2 border-white/30 cursor-pointer" />
                <Settings 
                    size={20} 
                    className="cursor-pointer hover:rotate-90 transition-transform duration-500"
                    onClick={onSettingsClick}
                />
            </div>
        </div>
    );
};