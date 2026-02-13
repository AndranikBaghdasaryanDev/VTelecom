import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import { Axios } from '../../api/axios';
import type { DiagramData } from '../../types/dashboard/diagram'; 
import type { EmailPrices } from '../../types/dashboard/emailPrices';

export const GraphicDiagram = () => {
  const [data, setData] = useState<DiagramData[]>([]);
  const [prices, setPrices] = useState<EmailPrices[]>([]);

  useEffect(() => {
    Axios.get("/emailStatistics").then(res => setData(res.data)).catch(console.error);
    Axios.get("/emailStatisticsPrices").then(res => setPrices(res.data)).catch(console.error);
  }, []);

  return (
    <div className="bg-[#2a3142] rounded-lg shadow-lg border border-white/5 overflow-hidden">
      <div className="p-6 border-b border-white/5">
        <h3 className="text-white text-base font-bold uppercase">Email Sent</h3>
      </div>
      
      {/* Prices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-6">
        {prices.map((item, idx) => (
            // ՈՒՂՂՈՒՄ 1: Ավելացրել ենք key={idx}
            <div key={idx}>
                <p className="text-white text-xl font-bold mb-1">{item.price}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wide">{item.name}</p>
            </div>
        ))}
      </div>

      {/* Chart Container */}
      {/* ՈՒՂՂՈՒՄ 2: Ավելացրել ենք h-[350px] className-ի մեջ */}
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
              <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#ffffff08" vertical={false} />
            <XAxis dataKey="name" stroke="#848fa5" tick={{fontSize: 12}} axisLine={false} tickLine={false} dy={10} />
            <YAxis stroke="#848fa5" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#2a3142', border: '1px solid #ffffff20', color: '#fff' }} />
            
            <Area type="monotone" dataKey="seriesC" stroke="none" fill="url(#colorC)" fillOpacity={1} />
            <Area type="monotone" dataKey="seriesB" stroke="none" fill="url(#colorB)" fillOpacity={1} />
            <Area type="monotone" dataKey="seriesA" stroke="none" fill="url(#colorA)" fillOpacity={1} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}