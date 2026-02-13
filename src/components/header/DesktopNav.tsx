import { Search, Maximize, Bell, Settings, ChevronDown } from 'lucide-react';
import { toggleFullScreen } from '../../utils/toggleFullScreen';


import type { DesktopNavProps } from '../../types/header/desktopNav';

export const DesktopNav = ({ 
    languages, selectedLang, setSelectedLang, isLangOpen, setIsLangOpen, onSettingsClick, theme 
}: DesktopNavProps) => {
    return (
        <div className="hidden md:flex items-center gap-6">
            
            {/* Search */}
            <div className="relative group">
                <input
                    type="text"
                    placeholder="Search..."
                    className={`border-none outline-none rounded-full py-2 px-5 pr-10 text-sm transition-all w-40 lg:w-56 focus:lg:w-72 focus:ring-2 ${
                        theme === "dark" 
                            ? "bg-white/15 text-white placeholder:text-white/70 focus:ring-white/30" 
                            : "bg-gray-100 text-gray-800 placeholder:text-gray-500 focus:ring-gray-300"
                    }`}
                />
                <Search size={16} className={`absolute right-4 top-1/2 -translate-y-1/2 ${theme === "dark" ? "text-white/70" : "text-gray-500"}`} />
            </div>

            {/* Language Selector */}
            <div className="relative">
                <div 
                    onClick={() => setIsLangOpen(!isLangOpen)} 
                    className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg transition select-none ${
                        theme === "dark" ? "hover:bg-white/10 text-white" : "hover:bg-gray-100 text-gray-700"
                    }`}
                >
                    <img src={selectedLang.flag} alt={selectedLang.name} className="w-5 h-3.5 object-cover rounded-[1px]" />
                    <span className="text-sm font-medium">{selectedLang.name}</span>
                    <ChevronDown size={14} className="opacity-70" />
                </div>
                
                {isLangOpen && (
                    <>
                        <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)}></div>
                        <div className={`absolute top-[120%] right-0 w-44 rounded-lg shadow-xl py-2 z-20 ${
                            theme === "dark" ? "bg-[#2a3142] text-white border border-white/5" : "bg-white text-gray-800 border border-gray-100"
                        }`}>
                            {languages.map((lang) => (
                                <div 
                                    key={lang.code} 
                                    onClick={() => { setSelectedLang(lang); setIsLangOpen(false); }} 
                                    className={`flex items-center gap-3 px-4 py-2 cursor-pointer transition ${
                                        theme === "dark" ? "hover:bg-white/10" : "hover:bg-gray-50"
                                    }`}
                                >
                                    <img src={lang.flag} className="w-5 h-3.5 object-cover" />
                                    <span className="text-sm">{lang.name}</span>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Icons (Maximize & Bell) */}
            <Maximize 
                onClick={toggleFullScreen} 
                size={18} 
                className={`cursor-pointer hover:scale-110 transition opacity-90 ${theme === "dark" ? "text-white" : "text-gray-600"}`} 
            />
            
            <div className={`relative cursor-pointer hover:scale-110 transition ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-[9px] text-white font-bold h-3.5 w-3.5 flex items-center justify-center rounded-full border-2 border-transparent">
                </span>
            </div>

            {/* Profile & Settings Trigger */}
            <div className={`flex items-center gap-3 border-l pl-4 ${theme === "dark" ? "border-white/20" : "border-gray-200"}`}>
                <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="User" 
                    className={`w-9 h-9 rounded-full border-2 cursor-pointer ${theme === "dark" ? "border-white/30" : "border-gray-200"}`} 
                />
                <Settings 
                    size={20} 
                    className={`cursor-pointer hover:rotate-90 transition-transform duration-500 ${theme === "dark" ? "text-white" : "text-gray-600"}`}
                    onClick={onSettingsClick}
                />
            </div>
        </div>
    );
};