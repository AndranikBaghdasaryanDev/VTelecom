import type { LatestOrdersProps } from "../../types/dashboard/latestOrders"
import { statusStyles } from "../../utils/statusStyles"

export const LatestOrders = ({ id, userLogo, name, status, price, date, theme }: LatestOrdersProps) => {
    return (
        <tr className={`border-b transition-colors group ${
            theme === "dark" ? "border-gray-700/50 hover:bg-white/5" : "border-gray-200 hover:bg-gray-50"
        }`}>
            {/* ID */}
            <td className={`py-4 pl-6 font-medium text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
                {id}
            </td>
            
            {/* User Logo */}
            <td className="py-4 w-14">
                <img 
                    src={userLogo} 
                    alt={name} 
                    className={`w-9 h-9 rounded-full border transition object-cover ${
                        theme === "dark" ? "border-gray-600 group-hover:border-[#6c5fb1]" : "border-gray-200 group-hover:border-[#6c5fb1]"
                    }`} 
                />
            </td>
            
            {/* Product Name */}
            <td className={`py-4 font-medium text-sm ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                {name}
            </td>
            
            {/* Status */}
            <td className="py-4">
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide ${statusStyles[status] || 'bg-gray-500 text-white'}`}>
                    {status}
                </span>
            </td>
            
            {/* Price */}
            <td className={`py-4 font-semibold text-sm ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
                {price}
            </td>
            
            {/* Date */}
            <td className={`py-4 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                {date}
            </td>
            
            {/* Action Button */}
            <td className="py-4 pr-6 text-right">
                <button className={`px-4 py-1.5 rounded-md text-xs font-medium transition shadow-sm ${
                    theme === "dark" 
                        ? "bg-[#4a5163] hover:bg-[#5a6275] text-white" 
                        : "bg-[#6c757d] hover:bg-[#5a6268] text-white"
                }`}>
                    Edit
                </button>
            </td>
        </tr>
    )
}