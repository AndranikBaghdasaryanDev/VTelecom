import type { LatestOrdersTableProps } from "../../types/dashboard/latestOrders";
import { LatestOrders } from "./LatestOrders";


export const LatestOrdersTable = ({ orders, theme }: LatestOrdersTableProps) => {
    return (
        <div className={`rounded-lg shadow-lg border overflow-hidden transition-colors duration-300 ${
            theme === "dark" ? "bg-[#2a3142] border-white/5" : "bg-white border-gray-100"
        }`}>
            <div className={`p-6 border-b ${
                theme === "dark" ? "border-white/5" : "border-gray-100"
            }`}>
                <h2 className={`text-base font-bold uppercase tracking-wide ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                }`}>
                    Latest Orders
                </h2>
            </div>

            <div className="p-0 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                    <thead>
                        <tr className={`border-b text-xs uppercase tracking-wider ${
                            theme === "dark" ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-500"
                        }`}>
                            <th className="py-4 pl-6 font-semibold">Order ID</th>
                            <th className="py-4 font-semibold">User</th>
                            <th className="py-4 font-semibold">Product Name</th>
                            <th className="py-4 font-semibold">Status</th>
                            <th className="py-4 font-semibold">Amount</th>
                            <th className="py-4 font-semibold">Date</th>
                            <th className="py-4 pr-6 font-semibold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {orders.map((order: any) => (
                            // Անպայման theme-ը փոխանցում ենք ներքև
                            <LatestOrders key={order.id} {...order} theme={theme} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};