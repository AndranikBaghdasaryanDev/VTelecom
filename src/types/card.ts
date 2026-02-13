import type { LucideIcon } from "lucide-react";

export interface CardProps {
    name: string;
    total: string | number;
    percentage?: string ;
    description?: string;
    Icon: LucideIcon;
}