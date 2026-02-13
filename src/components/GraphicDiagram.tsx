import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { useEffect, useState } from 'react';
import { Axios } from '../api/axios';
import type { EmailPrices } from '../types/emailPrices';
import type { DiagramData } from '../types/diagram';

export const GraphicDiagram = () => {
  const [data, setData] = useState<DiagramData[] | []>([]);
  const [emailStatisticsPrices, setEmailStatisticsPrices] = useState<EmailPrices[] | []>([]);

  useEffect(() => {
    Axios.get("/emailStatistics")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    Axios.get("emailStatisticsPrices")
    .then(res => setEmailStatisticsPrices(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-[#2a3142] p-6 rounded-lg shadow-lg border border-white/5 mt-8">
      
      {/* Header Text Section */}
      <h3 className="text-white text-base font-medium mb-6">Email Sent</h3>
      
      <div className="flex justify-between items-center mb-8 px-4 md:px-12 text-center">
        {
            emailStatisticsPrices.map(statistic => (
                <div>
                    <p className="text-white text-xl font-bold mb-1">{statistic.price}</p>
                    <p className="text-gray-400 text-xs">{statistic.name}</p>
                </div>
            ))
        }
      </div>

      {/* Chart Section */}
      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#28bbe3" stopOpacity={0.7}/>
                <stop offset="95%" stopColor="#28bbe3" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7a6fbe" stopOpacity={0.7}/>
                <stop offset="95%" stopColor="#7a6fbe" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#ffffff" stopOpacity={0.05}/>
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#ffffff15" vertical={false} />
            
            <XAxis 
                dataKey="name" 
                stroke="#848fa5" 
                tick={{ fontSize: 12 }} 
                tickLine={false} 
                axisLine={false} 
                dy={10}
            />
            
            <YAxis 
                stroke="#848fa5" 
                tick={{ fontSize: 12 }} 
                tickLine={false} 
                axisLine={false} 
            />
            
            <Tooltip 
                contentStyle={{ backgroundColor: '#2a3142', borderColor: '#ffffff20', color: '#fff' }}
                itemStyle={{ color: '#fff' }}
            />

            {/* Light Blue/Grey Layer (Back) */}
            <Area 
                type="monotone" 
                dataKey="seriesC" 
                stroke="#a6b0cf" 
                strokeWidth={0}
                fill="url(#colorC)" 
                fillOpacity={1}
            />

            {/* Purple Layer (Middle) */}
            <Area 
                type="monotone" 
                dataKey="seriesB" 
                stroke="#7a6fbe" 
                strokeWidth={0}
                fill="url(#colorB)" 
                fillOpacity={1}
            />

            {/* Cyan/Teal Layer (Front - Biggest Peak) */}
            <Area 
                type="monotone" 
                dataKey="seriesA" 
                stroke="#28bbe3" 
                strokeWidth={0}
                fill="url(#colorA)" 
                fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}