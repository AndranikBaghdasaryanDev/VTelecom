import { useEffect, useState } from 'react';
import { Settings, Menu, X } from 'lucide-react';
import { Axios } from '../api/axios';
import type { LanguageProps } from '../types/dashboard/language';

// Imported Sub-components
import { DesktopNav } from './header/DesktopNav';
import { MobileDropdown } from './header/MobileDropdown';
import { SettingsSidebar } from './header/SettingsSideBar';


export const Header = () => {
    // --- States ---
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

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

    const handleThemeChange = (mode: 'light' | 'dark') => {
        setTheme(mode);
        console.log(`Switched to ${mode} mode`);
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-[#6c5fb1] text-white shadow-lg h-[70px]">
                <div className="flex items-center justify-between px-4 md:px-8 h-full">

                    {/* --- Logo Section --- */}
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0">
                        <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition">
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-md flex items-center justify-center shadow-sm">
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#6c5fb1] rounded-full"></div>
                            </div>
                        </div>
                        <span className="text-xl md:text-2xl font-bold tracking-tight hidden sm:block">Lexa</span>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <DesktopNav 
                        languages={languages}
                        selectedLang={selectedLang}
                        setSelectedLang={setSelectedLang}
                        isLangOpen={isLangOpen}
                        setIsLangOpen={setIsLangOpen}
                        onSettingsClick={() => setIsSettingsOpen(true)}
                    />

                    {/* --- Mobile Buttons (Right side) --- */}
                    <div className="md:hidden flex items-center gap-4">
                        <Settings 
                            size={22} 
                            className="cursor-pointer animate-pulse" 
                            onClick={() => setIsSettingsOpen(true)} 
                        />
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>

                {/* --- Mobile Dropdown --- */}
                <MobileDropdown isOpen={isMobileMenuOpen} />
            </header>

            {/* --- Settings Sidebar --- */}
            <SettingsSidebar
                isOpen={isSettingsOpen} 
                onClose={() => setIsSettingsOpen(false)} 
                theme={theme}
                onThemeChange={handleThemeChange}
            />
        </>
    );
};