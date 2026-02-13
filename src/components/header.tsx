import { useEffect, useState } from 'react';
import {
    Search, Maximize, Bell, Settings, ChevronDown,
} from 'lucide-react';
import { Axios } from '../api/axios';
import type { LanguageProps } from '../types/language';
import { toggleFullScreen } from '../utils/toggleFullScreen';

// --- Header Component ---
export const Header = () => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState({
        name: 'Russian',
        flag: 'https://flagcdn.com/w20/ru.png'
    });
    const [languages, setLanguages] = useState<LanguageProps[] | []>([]);


    useEffect(() => {
        Axios.get("/languages")
            .then((res) => setLanguages(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-[#6c5fb1] text-white shadow-lg min-h-[70px]">
            {/* Left side: Logo */}
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#6c5fb1] rounded-full"></div>
                    </div>
                </div>
                {/* Թաքցնում ենք տեքստը շատ փոքր էկրանների վրա */}
                <span className="text-xl md:text-2xl font-bold tracking-tight hidden sm:block">Lexa</span>
            </div>

            {/* Right side: Tools */}
            <div className="flex items-center gap-3 md:gap-6">
                {/* Search Bar - Ցույց ենք տալիս միայն պլանշետից սկսած */}
                <div className="relative group hidden md:block">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white/15 border-none outline-none rounded-full py-2 px-5 pr-10 text-sm placeholder:text-white/70 focus:ring-2 focus:ring-white/30 transition-all w-40 lg:w-56 focus:lg:w-72"
                    />
                    <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70" />
                </div>

                {/* Language Selector */}
                <div className="relative">
                    <div
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="flex items-center gap-2 md:gap-3 cursor-pointer hover:bg-white/10 px-2 md:px-3 py-2 rounded-lg transition select-none"
                    >
                        <img src={selectedLang.flag} alt={selectedLang.name} className="w-5 h-3.5 object-cover rounded-[1px]" />
                        <span className="text-[13px] md:text-[14px] font-medium hidden xs:block">{selectedLang.name}</span>
                        <ChevronDown size={14} className={`opacity-60 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {isLangOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)}></div>
                            <div className="absolute top-[120%] right-0 w-40 md:w-44 bg-white rounded-lg shadow-2xl py-2 z-20 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                                {languages.map((lang) => (
                                    <div
                                        key={lang.code}
                                        onClick={() => {
                                            setSelectedLang(lang);
                                            setIsLangOpen(false);
                                        }}
                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition text-gray-700"
                                    >
                                        <img src={lang.flag} alt={lang.name} className="w-5 h-3.5 object-cover" />
                                        <span className="text-sm font-medium">{lang.name}</span>
                                        {selectedLang.name === lang.name && (
                                            <div className="ml-auto w-2 h-2 bg-[#6c5fb1] rounded-full"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-3 md:gap-6">
                    <Maximize onClick={toggleFullScreen} size={18} className="cursor-pointer hover:scale-110 transition opacity-90 hidden sm:block" />
                    <div className="relative cursor-pointer hover:scale-110 transition">
                        <Bell size={20} />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-[9px] font-bold h-3.5 w-3.5 md:h-4 md:w-4 flex items-center justify-center rounded-full border-2 border-[#6c5fb1]">3</span>
                    </div>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-2 md:gap-4 border-l border-white/20 pl-3 md:pl-6 ml-1 md:ml-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white/30 cursor-pointer hover:border-white transition shadow-md shrink-0">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <Settings size={18} className="cursor-pointer hover:rotate-90 transition-transform duration-500 text-white/90 hidden xs:block" />
                </div>
            </div>
        </header>
    );
};