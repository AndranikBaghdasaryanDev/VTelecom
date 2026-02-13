import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Moon, Layout } from 'lucide-react';
import type { SettingsSidebarProps } from '../../types/header/settingsSideBar';

export const SettingsSidebar = ({ isOpen, onClose, theme, onThemeChange }: SettingsSidebarProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />
                    
                    {/* Sidebar Container */}
                    <motion.div
                        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={`fixed top-0 right-0 h-full w-[280px] z-[70] shadow-2xl flex flex-col transition-colors duration-300 ${
                            theme === "dark" ? "bg-[#2a3142] text-white" : "bg-white text-gray-800"
                        }`}
                    >
                        {/* Sidebar Header (Always purple) */}
                        <div className="bg-[#6c5fb1] text-white p-4 flex justify-between items-center">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <Layout size={18} /> Settings
                            </h3>
                            <X size={24} className="cursor-pointer hover:rotate-90 transition-transform" onClick={onClose} />
                        </div>

                        {/* Sidebar Content */}
                        <div className="p-6 flex flex-col gap-6">
                            <div>
                                <h4 className={`text-sm font-bold uppercase mb-3 tracking-wider ${
                                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                                }`}>
                                    Mode
                                </h4>
                                
                                <div className="grid grid-cols-2 gap-3">
                                    {/* Light Mode Button */}
                                    <button 
                                        onClick={() => onThemeChange('light')}
                                        className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                                            theme === 'light' 
                                                ? 'border-[#6c5fb1] bg-[#6c5fb1]/10 text-[#6c5fb1]' 
                                                : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:bg-white/5'
                                        }`}
                                    >
                                        <Sun size={24} className="mb-2" />
                                        <span className="text-xs font-semibold">Light</span>
                                    </button>

                                    {/* Dark Mode Button */}
                                    <button 
                                        onClick={() => onThemeChange('dark')}
                                        className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all ${
                                            theme === 'dark' 
                                                ? 'border-[#6c5fb1] bg-[#6c5fb1]/10 text-[#6c5fb1]' 
                                                : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Moon size={24} className="mb-2" />
                                        <span className="text-xs font-semibold">Dark</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};