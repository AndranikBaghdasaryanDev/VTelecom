import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Maximize } from 'lucide-react';
import { toggleFullScreen } from '../../utils/toggleFullScreen';
import type { MobileDropdownProps } from '../../types/header/mobileDropDown';


export const MobileDropdown = ({ isOpen, theme }: MobileDropdownProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={`md:hidden overflow-hidden border-t ${
                        theme === "dark" ? "bg-[#5a4e9e] border-white/10" : "bg-white border-gray-100 shadow-md"
                    }`}
                >
                    <div className="p-4 flex flex-col gap-4">
                        
                        {/* Mobile Search */}
                        <div className="relative w-full">
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className={`w-full border-none outline-none rounded-md py-2 px-4 text-sm ${
                                    theme === "dark" 
                                        ? "bg-white/20 text-white placeholder:text-white/60" 
                                        : "bg-gray-100 text-gray-800 placeholder:text-gray-500"
                                }`} 
                            />
                            <Search size={16} className={`absolute right-3 top-1/2 -translate-y-1/2 ${theme === "dark" ? "text-white/60" : "text-gray-400"}`} />
                        </div>

                        {/* Mobile Profile Info */}
                        <div className={`flex items-center gap-3 border-t pt-4 ${theme === "dark" ? "border-white/10" : "border-gray-100"}`}>
                            <img 
                                src="https://randomuser.me/api/portraits/women/44.jpg" 
                                alt="User" 
                                className={`w-10 h-10 rounded-full border-2 ${theme === "dark" ? "border-white/30" : "border-gray-200"}`} 
                            />
                            
                            <div className="flex flex-col">
                                <span className={`font-bold text-sm ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                                    Admin User
                                </span>
                                <span className={`text-xs ${theme === "dark" ? "text-white/70" : "text-gray-500"}`}>
                                    Administrator
                                </span>
                            </div>
                            
                            <div className={`ml-auto flex gap-4 ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
                                 <Bell size={20} className="cursor-pointer" />
                                 <Maximize onClick={toggleFullScreen} size={20} className="cursor-pointer" />
                            </div>
                        </div>
                        
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};