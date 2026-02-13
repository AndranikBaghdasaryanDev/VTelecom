import { Heart } from 'lucide-react';

export const Footer = ({ theme }: { theme: string }) => {
    return (
        <footer className={`w-full py-5 px-6 md:px-8 border-t transition-colors duration-300 ${
            theme === "dark" ? "bg-[#32394e] border-white/5" : "bg-white border-gray-200"
        }`}>
            <div className={`flex justify-center md:justify-end items-center text-sm text-center ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}>
                <p className="flex items-center gap-1">
                    © 2026 Lexa - Crafted with 
                    <Heart size={14} className="text-red-500 fill-red-500" /> 
                    by Themesbrand.
                </p>
            </div>
        </footer>
    );
};