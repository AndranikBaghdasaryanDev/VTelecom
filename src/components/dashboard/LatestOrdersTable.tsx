import type { LatestOrdersTableProps } from "../../types/dashboard/latestOrders";
import { LatestOrders } from "./LatestOrders";

export const LatestOrdersTable = ({ orders }: LatestOrdersTableProps) => {
    return (
        <div className="bg-white dark:bg-[#2a3142] rounded-lg shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
            <div className="p-6 border-b border-gray-100 dark:border-white/5">
                <h2 className="text-base font-bold text-gray-800 dark:text-white uppercase tracking-wide">Latest Orders</h2>
            </div>

            <div className="p-0 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[900px]">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
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
                            <LatestOrders key={order.id} {...order} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};