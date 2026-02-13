import { useEffect, useState } from 'react';
import { Axios } from '../api/axios';
import { Footer } from '../components/Footer';
import { GraphicDiagram } from '../components/dashboard/GraphicDiagram';


// Types
import type { CardProps } from '../types/dashboard/card';
import type { LatestOrdersProps } from '../types/dashboard/latestOrders';
import { LatestOrdersTable } from '../components/dashboard/LatestOrdersTable';
import { SubHeader } from '../components/dashboard/SubHeader';
import { StatsGrid } from '../components/dashboard/StatsGrid';

export const Dashboard = () => {
    const [cards, setCards] = useState<CardProps[] | []>([]);
    const [latestOrders, setLatestOrders] = useState<LatestOrdersProps[] | []>([]);

    useEffect(() => {
        Axios
        .get("/cards")
        .then((res) => setCards(res.data))
        .catch(console.error);
        
        Axios
        .get("/latestOrders")
        .then((res) => setLatestOrders(res.data))
        .catch(console.error);
    }, []);

    return (
        <div className="w-full min-h-screen pt-[70px] bg-[#222736] text-[#adb5bd] font-sans pb-10">

            {/* 1. Header Section */}
            <SubHeader />

            {/* Main Content Container */}
            <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6">

                {/* 2. Cards Grid */}
                <StatsGrid cards={cards} />

                {/* 3. Graphic Diagram */}
                <div className="w-full">
                    <GraphicDiagram />
                </div>

                {/* 4. Latest Orders Table */}
                <LatestOrdersTable orders={latestOrders} />

            </div>

            <Footer />
        </div>
    );
};