import { ChevronRight, LayoutDashboard, Mail, Briefcase, FileText, List, PieChart, Box } from 'lucide-react';
import { MiniChart } from './MiniChart';

export const SubHeader = ({ theme }: { theme: string }) => {
    return (
        <div className="sticky top-[70px] z-30 shadow-sm dark:shadow-md transition-all duration-300">
            {/* Top Part */}
            <div className="bg-white dark:bg-[#2a3142] px-4 md:px-8 py-5 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
                <div>
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white uppercase tracking-wide">Dashboard</h2>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span className="hover:text-[#6c5fb1] dark:hover:text-white cursor-pointer transition">Lexa</span>
                        <ChevronRight size={12} />
                        <span className="text-gray-400 dark:text-gray-300 font-medium">Dashboard</span>
                    </div>
                </div>

                {/* Right Side Stats */}
                <div className="flex gap-8 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar mt-4 md:mt-0">
                    <MiniChart label="Item Sold" value="1230" color="bg-cyan-400" data={[40, 70, 45, 90, 60]} />
                    <MiniChart label="Balance" value="$ 2,317" color="bg-[#6c5fb1]" data={[50, 30, 80, 40, 70]} />
                </div>
            </div>

            {/* Bottom Menu */}
            <div className={`px-4 md:px-8 py-3 flex items-center gap-8 overflow-x-auto no-scrollbar border-b transition-colors duration-300 ${theme === "dark" ? "bg-[#32394e] border-white/5" : "bg-gray-50 border-gray-200"
                }`}>
                <LayoutDashboard size={20} className="text-[#6c5fb1] shrink-0 cursor-pointer" />

                {[Mail, Briefcase, FileText, List, PieChart, Box].map((Icon, id) => (
                    <Icon
                        key={id}
                        size={20}
                        className={`cursor-pointer transition shrink-0 text-gray-400 ${theme === "dark" ? "hover:text-white" : "hover:text-gray-800"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
