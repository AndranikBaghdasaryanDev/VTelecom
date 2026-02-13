import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { Axios } from '../../api/axios';
import type { DiagramData } from '../../types/dashboard/diagram';
import type { EmailPrices } from '../../types/dashboard/emailPrices';

export const GraphicDiagram = ({ theme }: { theme: string }) => {
  const [data, setData] = useState<DiagramData[]>([]);
  const [prices, setPrices] = useState<EmailPrices[]>([]);

  useEffect(() => {
    Axios.get("/emailStatistics").then(res => setData(res.data)).catch(console.error);
    Axios.get("/emailStatisticsPrices").then(res => setPrices(res.data)).catch(console.error);
  }, []);

  return (
    <div className={`rounded-lg shadow-lg border overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#2a3142] border-white/5" : "bg-white border-gray-200"
    }`}>
      <div className={`p-6 border-b ${
          theme === "dark" ? "border-white/5" : "border-gray-200"
      }`}>
        <h3 className={`text-base font-bold uppercase ${
            theme === "dark" ? "text-white" : "text-gray-800"
        }`}>
            Email Sent
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-6">
        {prices.map((item, idx) => (
            <div key={idx}>
                <p className={`text-xl font-bold mb-1 ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                }`}>
                    {item.price}
                </p>
                <p className={`text-xs uppercase tracking-wide ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}>
                    {item.name}
                </p>
            </div>
        ))}
      </div>

      <div className="px-2 pb-4 w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#28bbe3" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#28bbe3" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7a6fbe" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#7a6fbe" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} vertical={false} />
            <XAxis dataKey="name" stroke="#848fa5" tick={{fontSize: 12}} axisLine={false} tickLine={false} dy={10} />
            <YAxis stroke="#848fa5" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
            <Tooltip 
                contentStyle={{ 
                    backgroundColor: theme === "dark" ? '#2a3142' : '#ffffff', 
                    border: theme === "dark" ? 'none' : '1px solid #e5e7eb', 
                    color: theme === "dark" ? '#fff' : '#1f2937', 
                    borderRadius: '8px' 
                }} 
            />
            
            <Area type="monotone" dataKey="seriesB" stroke="none" fill="url(#colorB)" fillOpacity={1} />
            <Area type="monotone" dataKey="seriesA" stroke="none" fill="url(#colorA)" fillOpacity={1} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}