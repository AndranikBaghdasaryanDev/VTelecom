export const MiniChart = ({ label, value, color, data }: { label: string, value: string, color: string, data: number[] }) => (
    <div className="flex items-center gap-3 shrink-0 pl-6 first:pl-0 border-l first:border-l-0 border-white/10">
        <div className="flex items-end gap-[2px] h-8">
            {data.map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className={`w-1 ${color} rounded-t-[1px]`}></div>
            ))}
        </div>
        <div>
            <p className="text-[10px] uppercase font-bold text-gray-400">{label}</p>
            <p className="text-lg font-bold text-white leading-none">{value}</p>
        </div>
    </div>
);