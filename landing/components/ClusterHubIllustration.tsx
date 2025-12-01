import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const ClusterHubIllustration: React.FC = () => {
  const robots = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    color: i % 2 === 0 ? 'yellow' : 'blue',
    chargeDelay: Math.random() * 2,
  }));

  return (
    <div className="relative w-full py-24 bg-[#050505] overflow-hidden border-t border-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Кластерный Хаб</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Интеллектуальная стена зарядки. Роботы автоматически паркуются на многоуровневых стеллажах для быстрой подзарядки и обновления ПО.
          </p>
        </div>

        <div className="relative w-full h-[800px] bg-white rounded-[3rem] overflow-hidden border border-gray-300 shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f5f7fb] to-[#e5e9f2]">
            <div
              className="absolute inset-0 opacity-25"
              style={{ backgroundImage: 'radial-gradient(#d1d9e6 1px, transparent 1px)', backgroundSize: '46px 46px' }}
            />
          </div>

          <div
            className="absolute inset-0 opacity-12"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(31,41,55,0.08) 0, rgba(31,41,55,0.08) 2px, transparent 2px, transparent 140px)',
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,255,255,0.6),transparent_35%)] opacity-70 pointer-events-none" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.1)_100%)] pointer-events-none z-20" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 p-12 w-full max-w-5xl">
            {robots.map((robot) => (
              <div key={robot.id} className="flex flex-col items-center justify-end h-40 relative group">
                <div className="relative w-32 h-24 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute -top-10 left-4 flex flex-col items-center">
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: robot.chargeDelay }}
                      className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]"
                    />
                    <div className="w-0.5 h-10 bg-gray-400" />
                  </div>

                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-gray-800 rounded-t-lg border border-gray-600 flex items-center justify-center z-0">
                    <div className="w-1.5 h-1.5 bg-black rounded-full border-[0.5px] border-gray-400" />
                  </div>

                  <div
                    className={`w-full h-full rounded-[20px] shadow-lg relative z-10 flex flex-col items-center justify-center border-b-[4px] ${
                      robot.color === 'yellow' ? 'bg-yellow-400 border-yellow-600' : 'bg-blue-500 border-blue-700'
                    }`}
                  >
                    <div className="absolute left-2 top-3 w-1.5 h-4 bg-black/10 rounded-full" />
                    <div className="absolute right-2 top-3 w-1.5 h-4 bg-black/10 rounded-full" />

                    <div className="w-24 h-14 bg-black rounded-lg border-2 border-gray-800 flex items-center justify-center relative overflow-hidden">
                      <div className="flex items-center relative pl-1">
                        <div className="relative w-12 h-6 border-[1.5px] border-gray-600 rounded flex items-center justify-start bg-gray-900 box-border p-[1px]">
                          <motion.div
                            initial={{ width: '10%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: robot.chargeDelay }}
                            className="h-full bg-white rounded-[1px] shadow-[0_0_4px_white]"
                          />
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <Zap className="w-3 h-3 text-white mix-blend-difference opacity-80" />
                          </div>
                        </div>
                        <div className="w-0.5 h-2 bg-gray-600 rounded-r-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 -left-2 w-4 h-10 bg-gray-800 rounded-md border-2 border-gray-600 shadow-md" />
                  <div className="absolute bottom-0 -right-2 w-4 h-10 bg-gray-800 rounded-md border-2 border-gray-600 shadow-md" />
                </div>

                <div className="absolute bottom-0 w-48 h-4 bg-gray-200 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center z-0">
                  <div className="absolute top-full w-32 h-6 bg-gray-300 rounded-b-xl opacity-50 skew-x-12" />
                  <div className="w-24 h-1 bg-purple-500/50 rounded-full shadow-[0_0_10px_#a855f7] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClusterHubIllustration;
