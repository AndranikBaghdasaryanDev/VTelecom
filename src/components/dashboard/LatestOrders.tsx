import type { LatestOrdersProps } from "../../types/dashboard/latestOrders"
import { statusStyles } from "../../utils/statusStyles"

export const LatestOrders = ({ id, userLogo, name, status, price, date }: LatestOrdersProps) => {
    
    // Ստատուսի գույները (ըստ քո նկարի)
    
    return (
        <tr className="border-b border-gray-700/50 hover:bg-white/5 transition-colors group">
            <td className="py-4 pl-4 text-gray-400 font-medium text-sm">{id}</td>
            
            <td className="py-4">
                <img 
                    src={userLogo} 
                    alt={name} 
                    className="w-10 h-10 rounded-full border-2 border-gray-600 group-hover:border-lexa-purple transition object-cover" 
                />
            </td>
            
            <td className="py-4 text-white font-medium text-sm">{name}</td>
            
            <td className="py-4">
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${statusStyles[status] || 'bg-gray-500/20 text-gray-400'}`}>
                    {status}
                </span>
            </td>
            
            <td className="py-4 text-white font-semibold text-sm">{price}</td>
            
            <td className="py-4 text-gray-400 text-sm hidden sm:table-cell">{date}</td>
            
            <td className="py-4 pr-4 text-right">
                <button className="bg-[#4a5163] hover:bg-[#5a6275] text-white px-3 py-1.5 rounded text-xs transition shadow-sm">
                    Edit
                </button>
            </td>
        </tr>
    )
}