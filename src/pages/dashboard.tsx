import { useEffect, useState } from 'react';
import { Axios } from '../api/axios';
import { Footer } from '../components/Footer';
import { SubHeader } from '../components/dashboard/SubHeader';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import { GraphicDiagram } from '../components/dashboard/GraphicDiagram';
import { LatestOrdersTable } from '../components/dashboard/LatestOrdersTable';
import type { LatestOrdersProps } from '../types/dashboard/latestOrders';
import type { CardProps } from '../types/dashboard/card';


export const Dashboard = ({theme}:{theme:string}) => {
    const [cards, setCards] = useState<CardProps[] | []>([]);
    const [latestOrders, setLatestOrders] = useState<LatestOrdersProps[] | []>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [cardsRes, ordersRes] = await Promise.all([
                    Axios.get("/cards"),
                    Axios.get("/latestOrders")
                ]);
                setCards(cardsRes.data);
                setLatestOrders(ordersRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={`w-full min-h-screen pt-[70px] ${theme == "dark" ? "bg-[#222736]": "bg-[#f8f9fa]"}  pb-10 transition-colors duration-300`}>
            
            <SubHeader theme={theme} />

            <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto space-y-6">
                <StatsGrid cards={cards} />

                <div className="w-full">
                    <GraphicDiagram theme={theme} />
                </div>

                <LatestOrdersTable  orders={latestOrders} theme={theme as 'light' | 'dark'} />
            </div>

            <Footer theme={theme} />
        </div>
    );
};