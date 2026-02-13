import { motion } from 'framer-motion';
import { ChevronRight, LayoutDashboard, Mail, Briefcase, FileText, List, PieChart, Box, Package, Layers, Tag } from 'lucide-react';
import { Card } from '../components/Card';
import { useEffect, useState } from 'react';
import type { CardProps } from '../types/card';
import { Axios } from '../api/axios';
import { LatestOrders } from '../components/LatestOrders';
import type { LatestOrdersProps } from '../types/latestOrders';


export const Dashboard = () => {
    const [cards, setCards] = useState<CardProps[] | []>([]);
    const [latestOrders, setLatestOrders] = useState<LatestOrdersProps[] | []>([]);
    useEffect(() => {
        Axios.get("/cards")
            .then((res) => setCards(res.data))
            .catch((err) => console.log(err));
        Axios
            .get("/latestOrders")
            .then((res) => setLatestOrders(res.data))
            .catch((err) => console.log(err));
    }, []);


    return (
        <div className="w-full min-h-screen pt-[70px]">

            <div className="sticky top-[70px] z-40 shadow-md">
                {/* Upper Section */}
                <div className="bg-[#2a3142] text-white px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5">
                    <div>
                        <h2 className="text-lg font-bold uppercase tracking-wide">Dashboard</h2>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                            <a href="#" onClick={e => e.preventDefault}>Lexa</a>
                            <ChevronRight size={12} />
                            <span className="text-gray-300 font-medium">Dashboard</span>
                        </div>
                    </div>

                    <div className="flex gap-6 md:gap-10 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        {/* Stats items... (նույնը թողնել) */}
                    </div>
                </div>

                {/* Lower Section (Menu) */}
                <div className="bg-[#32394e] px-4 md:px-8 py-3.5 flex items-center gap-6 md:gap-9 text-gray-400 overflow-x-auto no-scrollbar">
                    <LayoutDashboard size={19} className="text-cyan-400 shrink-0" />
                    {[Mail, Briefcase, FileText, List, PieChart, Box].map((Icon,id) => (

                        <Icon key={Date.now() + id} size={19} className="hover:text-white cursor-pointer transition shrink-0" />
                    ))}
                </div>
            </div>

            {/* Cards Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="p-4 md:p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {cards.map((card: any) => (
                    <Card
                        key={card.id}
                        {...card}
                        Icon={getIcon(card.type)}
                    />
                ))}
            </motion.div>
            <div className="mt-8 bg-[#2a3142] rounded-lg shadow-lg p-6 border border-white/5">
                <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Latest Orders</h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr className="border-b border-gray-700 text-gray-400 text-xs uppercase tracking-wider">
                                <th className="pb-4 pl-4 font-semibold">Order ID</th>
                                <th className="pb-4 font-semibold">User</th>
                                <th className="pb-4 font-semibold">Product Name</th>
                                <th className="pb-4 font-semibold">Status</th>
                                <th className="pb-4 font-semibold">Amount</th>
                                <th className="pb-4 font-semibold hidden sm:table-cell">Date</th>
                                <th className="pb-4 pr-4 font-semibold text-right">Action</th>
                            </tr>
                        </thead>

                        {/* Table Body - Այստեղ կանչում ենք քո կոմպոնենտը */}
                        <tbody className="text-sm">
                            {latestOrders.map((order: any) => (
                                <LatestOrders key={order.id.slice(1)} {...order} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


function getIcon(type: string) {
    switch (type) {
        case 'orders': return <Package />;
        case 'revenue': return <Layers />;
        case 'price': return <Tag />;
        case 'sold': return <Briefcase />;
        default: return <Package />;
    }
};