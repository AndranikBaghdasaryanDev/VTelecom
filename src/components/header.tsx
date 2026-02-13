import { useEffect, useState } from 'react';
import { Settings, Menu, X } from 'lucide-react';
import { Axios } from '../api/axios';
import { DesktopNav } from './header/DesktopNav';
import { MobileDropdown } from './header/MobileDropdown';
import type { HeaderProps } from '../types/header/headerProps';
import type { LanguageProps } from '../types/dashboard/language';
import { SettingsSidebar } from './header/SettingsSideBar';

export const Header = ({ theme, onThemeChange }: HeaderProps) => {
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [languages, setLanguages] = useState<LanguageProps[] | []>([]);
    const [selectedLang, setSelectedLang] = useState({ name: 'Russian', flag: 'https://flagcdn.com/w20/ru.png' });

    useEffect(() => {
        Axios.get("/languages").then((res) => setLanguages(res.data)).catch(console.error);
    }, []);

    return (
        <>
            {/* Header-ի հիմնական ֆոնը */}
            <header className={`fixed top-0 left-0 w-full z-50 shadow-lg h-[70px] transition-colors duration-300 ${theme === "dark" ? "bg-[#6c5fb1] text-white" : "bg-white text-gray-800 border-b border-gray-200"}`}>
                <div className="flex items-center justify-between px-4 md:px-8 h-full">
                    
                    {/* Logo */}
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0">
                        {/* Լոգոյի ֆոնը (Light mode-ում թույլ մանուշակագույն է դառնում, որ երևա սպիտակի վրա) */}
                        <div className={`p-2 rounded-lg transition ${theme === "dark" ? "bg-white/20 group-hover:bg-white/30" : "bg-[#6c5fb1]/10 group-hover:bg-[#6c5fb1]/20"}`}>
                            {/* Լոգոյի մեջտեղի քառակուսին ու կետը */}
                            <div className={`w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center shadow-sm ${theme === "dark" ? "bg-white" : "bg-[#6c5fb1]"}`}>
                                <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${theme === "dark" ? "bg-[#6c5fb1]" : "bg-white"}`}></div>
                            </div>
                        </div>
                        {/* Տեքստը */}
                        <span className={`text-xl md:text-2xl font-bold tracking-tight hidden sm:block ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                            Lexa
                        </span>
                    </div>

                    {/* Desktop Nav - theme-ը տալիս ենք որպես պրոպ */}
                    <DesktopNav 
                        languages={languages}
                        selectedLang={selectedLang}
                        setSelectedLang={setSelectedLang}
                        isLangOpen={isLangOpen}
                        setIsLangOpen={setIsLangOpen}
                        onSettingsClick={() => setIsSettingsOpen(true)}
                        theme={theme} 
                    />

                    {/* Mobile Buttons */}
                    <div className="md:hidden flex items-center gap-4">
                        <Settings 
                            size={22} 
                            className={`cursor-pointer ${theme === "dark" ? "text-white" : "text-gray-600"}`} 
                            onClick={() => setIsSettingsOpen(true)} 
                        />
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={theme === "dark" ? "text-white" : "text-gray-600"}
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown - theme-ը տալիս ենք որպես պրոպ */}
                <MobileDropdown 
                    isOpen={isMobileMenuOpen} 
                    theme={theme}
                />
            </header>

            <SettingsSidebar 
                isOpen={isSettingsOpen} 
                onClose={() => setIsSettingsOpen(false)} 
                theme={theme}
                onThemeChange={onThemeChange}
            />
        </>
    );
};