import { motion } from 'framer-motion';

import { Package, Layers, Tag, Briefcase } from 'lucide-react';
import type { StatsGridProps } from '../../types/dashboard/statsGrid';
import { Card } from './Card';


export const StatsGrid = ({ cards }: StatsGridProps) => {
    const getIcon = (type: string) => {
        switch (type) {
            case 'orders': return <Package />;
            case 'revenue': return <Layers />;
            case 'price': return <Tag />;
            case 'sold': return <Briefcase />;
            default: return <Package />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
            {cards.map((card: any) => (
                <Card key={card.id} {...card} Icon={getIcon(card.type)} />
            ))}
        </motion.div>
    );
};