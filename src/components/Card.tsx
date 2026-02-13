import { motion } from 'framer-motion';
import type { CardProps } from '../types/card';
import { badgeColors } from '../utils/badgeColors';

export const Card = ({ name, total, percentage = "+11%", description, Icon }: CardProps) => {

    return (
        <motion.div
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-md bg-[#7a6fbe] p-6 text-white shadow-lg cursor-pointer"
        >
            {/* Background Wave SVG */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                    <path d="M0,100 C150,150 250,50 400,100 L400,200 L0,200 Z" fill="white" />
                </svg>
            </div>

            <div className="relative z-10 flex justify-between items-start">
                <div>
                    <p className="text-[12px] font-bold uppercase tracking-wider opacity-90">{name}</p>
                    <h3 className="mt-3 text-[28px] font-semibold leading-none">{total}</h3>

                    <div className="mt-6 flex items-center gap-2">
                        <span className={`rounded-[4px] ${badgeColors[percentage?.[0]] || 'bg-gray-400'} px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm`}>
                            {percentage}
                        </span>
                        <p className="text-[13px] text-white/80 font-medium">{description}</p>
                    </div>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-inner">
                    {Icon}
                </div>
            </div>
        </motion.div>
    );
};