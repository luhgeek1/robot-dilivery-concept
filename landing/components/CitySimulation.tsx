import React from 'react';
import { motion } from 'framer-motion';

const STATIC_BUILDINGS = [
  { id: 1, top: 5, left: 5, width: 12, height: 18, animationDelay: 0.2 },
  { id: 2, top: 5, left: 22, width: 15, height: 12, animationDelay: 1.1 },
  { id: 3, top: 8, left: 50, width: 10, height: 20, animationDelay: 0.5 },
  { id: 4, top: 5, left: 75, width: 20, height: 12, animationDelay: 2.3 },
  { id: 5, top: 35, left: 8, width: 16, height: 15, animationDelay: 0.8 },
  { id: 6, top: 35, left: 75, width: 15, height: 18, animationDelay: 1.5 },
  { id: 7, top: 30, left: 35, width: 10, height: 10, animationDelay: 4.0 },
  { id: 8, top: 60, left: 25, width: 12, height: 12, animationDelay: 0.4 },
  { id: 9, top: 65, left: 5, width: 15, height: 20, animationDelay: 3.0 },
  { id: 10, top: 70, left: 65, width: 14, height: 15, animationDelay: 1.2 },
  { id: 11, top: 65, left: 85, width: 10, height: 25, animationDelay: 2.1 },
  { id: 12, top: 80, left: 40, width: 18, height: 12, animationDelay: 0.9 }
];

const ROBOT_DATA = [
  { id: 0, x: 75, y: 25, type: 'yellow' },
  { id: 1, x: 25, y: 65, type: 'blue' },
  { id: 2, x: 60, y: 85, type: 'yellow' },
  { id: 3, x: 90, y: 55, type: 'blue' },
  { id: 4, x: 45, y: 15, type: 'yellow' }
];

const CitySimulation: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center pointer-events-none">
        <div className="absolute w-32 h-32 bg-red-500/10 rounded-full animate-ping"></div>
        <div className="absolute w-16 h-16 bg-red-500/20 rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-red-600 rounded-full shadow-[0_0_15px_#ef4444] relative z-10 border border-red-400"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {STATIC_BUILDINGS.map((b) => (
          <div
            key={b.id}
            className="absolute bg-gray-800 border-t border-l border-gray-700 shadow-2xl opacity-90 backdrop-blur-sm"
            style={{
              top: `${b.top}%`,
              left: `${b.left}%`,
              width: `${b.width}%`,
              height: `${b.height}%`,
              zIndex: 10,
              borderRadius: '4px',
              background:
                'linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(17, 24, 39, 0.98) 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

            <div className="w-full h-full grid grid-cols-3 gap-1 p-1 opacity-30 overflow-hidden">
              {Array.from({ length: 9 }).map((__, k) => (
                <div
                  key={k}
                  className="bg-blue-400/40 rounded-[1px] h-full w-full animate-pulse"
                  style={{ animationDelay: `${b.animationDelay + k * 0.2}s`, animationDuration: '4s' }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 w-full h-20 bg-gray-800/20 border-y border-gray-700/20 transform -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute left-1/2 top-0 h-full w-20 bg-gray-800/20 border-x border-gray-700/20 transform -translate-x-1/2 pointer-events-none"></div>

      {ROBOT_DATA.map((robot) => (
        <div
          key={robot.id}
          className="absolute z-20 flex flex-col items-center justify-center"
          style={{
            left: `${robot.x}%`,
            top: `${robot.y}%`,
            marginLeft: '-12px',
            marginTop: '-12px'
          }}
        >
          <div
            className={`w-5 h-5 md:w-6 md:h-6 rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.5)] flex items-center justify-center relative transition-transform duration-300 hover:scale-110
            ${robot.type === 'yellow' ? 'bg-yellow-400' : 'bg-blue-500'}`}
          >
            <div className="absolute -top-3 w-[1px] h-3 bg-gray-500/50"></div>
            <div
              className={`absolute -top-3.5 w-1 h-1 rounded-full ${
                Math.random() > 0.4 ? 'bg-green-500' : 'bg-orange-500'
              } animate-pulse`}
            ></div>
          </div>
        </div>
      ))}


    </div>
  );
};

export default CitySimulation;
