import { Heart } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="w-full bg-[#32394e] py-5 px-6 md:px-8 border-t border-white/5">
            <div className="flex justify-center md:justify-end items-center text-sm text-gray-400 text-center">
                <p className="flex items-center gap-1">
                    © 2026 Lexa - Crafted with 
                    <Heart size={14} className="text-red-500 fill-red-500" /> 
                    by Themesbrand.
                </p>
            </div>
        </footer>
    );
};