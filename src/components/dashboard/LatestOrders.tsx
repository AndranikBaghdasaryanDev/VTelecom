import type { LatestOrdersProps } from "../../types/dashboard/latestOrders"
import { statusStyles } from "../../utils/statusStyles"

export const LatestOrders = ({ id, userLogo, name, status, price, date }: LatestOrdersProps) => {
    return (
        <tr className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
            <td className="py-4 pl-6 text-gray-600 dark:text-gray-400 font-medium text-sm">{id}</td>
            
            <td className="py-4">
                <img 
                    src={userLogo} 
                    alt={name} 
                    className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-600 group-hover:border-[#6c5fb1] transition object-cover" 
                />
            </td>
            
            {/* ԱՅՍՏԵՂ. text-gray-800 dark:text-white */}
            <td className="py-4 text-gray-800 dark:text-white font-medium text-sm">{name}</td>
            
            <td className="py-4">
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${statusStyles[status] || 'bg-gray-500/20 text-gray-400'}`}>
                    {status}
                </span>
            </td>
            
            <td className="py-4 text-gray-800 dark:text-white font-semibold text-sm">{price}</td>
            
            <td className="py-4 text-gray-500 dark:text-gray-400 text-sm">{date}</td>
            
            <td className="py-4 pr-6 text-right">
                <button className="bg-gray-200 hover:bg-gray-300 dark:bg-[#4a5163] dark:hover:bg-[#5a6275] text-gray-700 dark:text-white px-3 py-1.5 rounded text-xs transition shadow-sm">
                    Edit
                </button>
            </td>
        </tr>
    )
}