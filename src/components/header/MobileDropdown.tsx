import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Maximize } from 'lucide-react';
import { toggleFullScreen } from '../../utils/toggleFullScreen';
import type { MobileDropdownProps } from '../../types/header/mobileDropDown';

export const MobileDropdown = ({ isOpen }: MobileDropdownProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="md:hidden bg-[#5a4e9e] border-t border-white/10 overflow-hidden"
                >
                    <div className="p-4 flex flex-col gap-4">
                        {/* Mobile Search */}
                        <div className="relative w-full">
                            <input type="text" placeholder="Search..." className="w-full bg-white/20 border-none outline-none rounded-md py-2 px-4 text-sm text-white placeholder:text-white/60" />
                            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60" />
                        </div>

                        {/* Mobile Profile Info */}
                        <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white/30" />
                            <div className="flex flex-col">
                                <span className="font-bold text-sm">Admin User</span>
                                <span className="text-xs text-white/70">Administrator</span>
                            </div>
                            <div className="ml-auto flex gap-4">
                                    <Bell size={20} />
                                    <Maximize onClick={toggleFullScreen} size={20} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};