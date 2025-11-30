import React, { useState } from 'react';
import { RobotColor, RobotStatus, STATUS_COLORS, BODY_COLORS, RobotConfig } from '../types';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Check, Truck, Zap, AlertCircle, Package, Utensils, ChevronLeft, ChevronRight, QrCode, Wifi, ArrowRight, ArrowLeft, Lightbulb } from 'lucide-react';

const RobotVisualizer: React.FC = () => {
  const [config, setConfig] = useState<RobotConfig>({
    color: RobotColor.YELLOW,
    status: RobotStatus.FREE,
  });

  const [viewIndex, setViewIndex] = useState(0);
  const views = ['front', 'side', 'top'];
  const currentView = views[viewIndex];

  const nextView = () => setViewIndex((prev) => (prev + 1) % views.length);
  const prevView = () => setViewIndex((prev) => (prev - 1 + views.length) % views.length);

  const signals = [
    { id: 'forward', label: 'Едет вперед', color: '#22c55e', type: 'antenna' },
    { id: 'stop', label: 'Остановился', color: '#ef4444', type: 'antenna' },
    { id: 'left', label: 'Поворот налево', color: '#f97316', type: 'blinker-left' },
    { id: 'right', label: 'Поворот направо', color: '#f97316', type: 'blinker-right' },
  ];
  const [signalIndex, setSignalIndex] = useState(0);
  const currentSignal = signals[signalIndex];

  const nextSignal = () => setSignalIndex((prev) => (prev + 1) % signals.length);
  const prevSignal = () => setSignalIndex((prev) => (prev - 1 + signals.length) % signals.length);

  const [lastActionTime, setLastActionTime] = useState(0);

  const handleSwipe = (offset: number, threshold: number, onNext: () => void, onPrev: () => void) => {
    if (offset < -threshold) {
      onNext();
    } else if (offset > threshold) {
      onPrev();
    }
  };

  const handleWheel = (e: React.WheelEvent, onNext: () => void, onPrev: () => void) => {
    const now = Date.now();
    if (now - lastActionTime < 500) return;

    if (Math.abs(e.deltaX) > 20) {
      setLastActionTime(now);
      if (e.deltaX > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
  };

  const currentStatusColor = STATUS_COLORS[config.status];
  const currentBodyColor = BODY_COLORS[config.color];

  return (
    <div className="w-full bg-gray-900/50 rounded-3xl p-6 md:p-12 border border-gray-800">
      
      
      <div className="max-w-5xl mx-auto mb-5 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white inline-flex items-center gap-2">
              <span className="w-1 h-8 bg-purple-500 rounded-full block"></span>
              Настройка Робота
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Выберите тип робота и его текущий статус, чтобы увидеть, как система визуальной коммуникации сообщает информацию горожанам.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 items-start">
             
             <div className="space-y-3 w-full md:w-auto">
               <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold text-center md:text-left">Тип Робота</h4>
               <div className="flex gap-3 justify-center md:justify-start">
                  <button
                    onClick={() => setConfig({ ...config, color: RobotColor.YELLOW })}
                    className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 w-28
                      ${config.color === RobotColor.YELLOW 
                        ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400' 
                        : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}`}
                  >
                    <Package size={28} />
                    <span className="font-medium">Доставка</span>
                  </button>

                  <button
                    onClick={() => setConfig({ ...config, color: RobotColor.BLUE })}
                    className={`p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 w-28
                      ${config.color === RobotColor.BLUE 
                        ? 'border-blue-500 bg-blue-500/10 text-blue-500' 
                        : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}`}
                  >
                    <Utensils size={28} />
                    <span className="font-medium">Еда</span>
                  </button>
               </div>
             </div>

             
             <div className="space-y-3 w-full md:w-auto">
               <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold text-center md:text-left">Статус</h4>
               <div className="grid grid-cols-2 gap-2 max-w-md mx-auto md:mx-0">
                  {[
                    { id: RobotStatus.FREE, label: 'Свободен', color: 'text-green-500', icon: Wifi },
                    { id: RobotStatus.BUSY, label: 'В работе', color: 'text-orange-500', icon: Package },
                    { id: RobotStatus.CHARGING, label: 'Зарядка', color: 'text-purple-500', icon: Zap },
                    { id: RobotStatus.ERROR, label: 'Помощь!', color: 'text-red-500', icon: AlertCircle },
                  ].map((status) => (
                    <button
                      key={status.id}
                      onClick={() => setConfig({ ...config, status: status.id })}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg border transition-all text-left text-sm
                        ${config.status === status.id 
                          ? 'border-gray-600 bg-gray-800/80 shadow-inner' 
                          : 'border-gray-800 hover:border-gray-700 bg-gray-900/50'}`}
                    >
                      <status.icon size={18} className={config.status === status.id ? status.color : 'text-gray-400'} />
                      <span className={`font-medium whitespace-nowrap ${config.status === status.id ? 'text-white' : 'text-gray-500'}`}>
                          {status.label}
                      </span>
                      {config.status === status.id && (
                         <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                      )}
                    </button>
                  ))}
               </div>
             </div>
          </div>
      </div>

      
      <div className="flex justify-center relative items-center">
        <motion.div 
            className="relative w-full max-w-4xl min-h-[500px] bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group flex items-center justify-center cursor-grab active:cursor-grabbing"
            onWheel={(e) => handleWheel(e, nextView, prevView)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, info) => handleSwipe(info.offset.x, 100, nextView, prevView)}
        >
            
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black pointer-events-none"></div>
            
            
            <div className="absolute bottom-0 w-full h-1/2 pointer-events-none" 
                style={{
                    background: 'linear-gradient(to bottom, transparent, #111)',
                    transform: 'perspective(1000px) rotateX(60deg) scale(2)',
                    opacity: 0.3
                }}>
                <div className="w-full h-full border-t border-r border-gray-700" 
                    style={{backgroundSize: '50px 50px', backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)'}}>
                </div>
            </div>

            
            <button 
                onClick={(e) => { e.stopPropagation(); prevView(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-gray-800/50 hover:bg-gray-700/80 text-white rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 outline-none"
                aria-label="Previous View"
            >
                <ChevronLeft size={32} />
            </button>
            <button 
                onClick={(e) => { e.stopPropagation(); nextView(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-gray-800/50 hover:bg-gray-700/80 text-white rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 outline-none"
                aria-label="Next View"
            >
                <ChevronRight size={32} />
            </button>

            
            {currentView === 'front' && (
                <>
                    
                    <motion.div 
                        className="absolute top-8 right-8 z-40 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.1}
                        onDragEnd={(e, info) => handleSwipe(info.offset.x, 50, nextSignal, prevSignal)}
                    >
                         <div 
                            className="bg-gray-900/90 backdrop-blur-md border border-gray-700 p-4 rounded-2xl flex flex-col items-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-40 relative group/tab select-none cursor-pointer hover:border-gray-500 transition-colors"
                            onClick={(e) => { e.stopPropagation(); nextSignal(); }}
                            onWheel={(e) => { e.stopPropagation(); handleWheel(e, nextSignal, prevSignal); }}
                         >
                            
                            <AnimatePresence mode="wait">
                                <motion.span 
                                    key={currentSignal.label}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4 text-center h-4"
                                >
                                    {currentSignal.label}
                                </motion.span>
                            </AnimatePresence>

                            <div className="relative flex flex-col items-center h-28 w-full justify-end pb-2 overflow-hidden rounded-xl">
                                
                                <AnimatePresence mode="wait">
                                    
                                    {currentSignal.type === 'antenna' && (
                                        <motion.div
                                            key="antenna-tab"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="flex flex-col items-center justify-end h-full w-full"
                                        >
                                            
                                            <motion.div
                                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                                className="absolute top-0 w-32 h-20 blur-xl transition-colors duration-500"
                                                style={{ backgroundColor: currentSignal.color }}
                                            />

                                            
                                            <div 
                                                className="w-10 h-10 rounded-full shadow-[0_0_20px_currentColor] z-10 relative mb-0 border border-white/10 flex items-center justify-center transition-colors duration-500"
                                                style={{ backgroundColor: currentSignal.color, color: currentSignal.color }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                                                <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 rounded-full blur-[2px]"></div>
                                            </div>
                                            
                                            
                                            <div className="w-2 h-full bg-gray-700 rounded-full border-x border-gray-600/50 mt-[-2px]"></div>
                                        </motion.div>
                                    )}

                                    
                                    {currentSignal.type.includes('blinker') && (
                                        <motion.div
                                            key="blinker-tab"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="relative w-full h-full flex items-center justify-center mt-2"
                                        >
                                            
                                            <div 
                                                className={`absolute top-0 w-32 h-32 rounded-[40px] border-[3px] border-gray-700 shadow-xl overflow-visible transition-colors duration-500 ${
                                                    currentSignal.id === 'left' ? '-left-6' : '-right-6'
                                                }`}
                                                style={{ backgroundColor: currentBodyColor }}
                                            >
                                                
                                                 <div className={`absolute top-6 w-3 h-16 bg-black/20 rounded-full border border-black/10 shadow-inner flex items-center justify-center overflow-hidden ${
                                                     currentSignal.id === 'left' ? 'right-4' : 'left-4'
                                                 }`}>
                                                      <motion.div
                                                        animate={{ opacity: [0.1, 1, 0.1] }}
                                                        transition={{ duration: 0.5, repeat: Infinity }}
                                                        className="w-full h-full bg-orange-500 rounded-full shadow-[0_0_15px_#f97316]"
                                                      />
                                                 </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            
                            <span className="text-[9px] text-gray-500 mt-2 opacity-70">Нажми, чтобы переключить</span>
                         </div>
                    </motion.div>

                    <motion.div 
                        key="front"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 flex items-center justify-center h-full w-full pointer-events-none"
                    >
                         <div className="relative w-[22rem] h-64 pointer-events-auto flex items-center justify-center">
                            
                            <div className="absolute -bottom-2 -left-8 w-12 h-20 bg-gray-800 rounded-lg border-4 border-gray-700 shadow-2xl z-0 flex items-center justify-center">
                                <div className="w-2 h-14 bg-gray-700/50 rounded-full"></div>
                            </div>
                            <div className="absolute -bottom-2 -right-8 w-12 h-20 bg-gray-800 rounded-lg border-4 border-gray-700 shadow-2xl z-0 flex items-center justify-center">
                                <div className="w-2 h-14 bg-gray-700/50 rounded-full"></div>
                            </div>

                            
                            <div className="absolute -top-24 left-10 flex flex-col items-center z-0">
                                <motion.div 
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: config.status === RobotStatus.ERROR ? 0.5 : 2, repeat: Infinity }}
                                    className="w-4 h-4 rounded-full shadow-[0_0_15px_currentColor] mb-0 relative z-10"
                                    style={{ 
                                        backgroundColor: (currentSignal.id === 'forward' || currentSignal.id === 'stop') ? currentSignal.color : currentStatusColor,
                                        color: (currentSignal.id === 'forward' || currentSignal.id === 'stop') ? currentSignal.color : currentStatusColor
                                    }}
                                />
                                <div className="w-1.5 h-24 bg-gray-600 rounded-full"></div>
                            </div>

                            
                            <div 
                                className="w-full h-full rounded-[40px] relative transition-colors duration-500 ease-in-out flex flex-col items-center justify-center overflow-visible shadow-2xl z-20"
                                style={{ 
                                    backgroundColor: currentBodyColor,
                                    boxShadow: `0 0 0 4px #1f2937, 0 10px 40px -10px rgba(0,0,0,0.5)`
                                }}
                            >
                                
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-800 rounded-t-xl rounded-b-md border border-gray-700 z-30 flex items-center justify-center shadow-lg">
                                    
                                    <div className="w-6 h-6 rounded-full bg-gray-900 border border-gray-700 absolute -top-2 flex items-center justify-center shadow-inner">
                                        
                                        <div className="w-2.5 h-2.5 rounded-full bg-black border-[0.5px] border-gray-600 relative overflow-hidden shadow-[0_0_2px_rgba(255,255,255,0.2)]">
                                            <div className="absolute top-[0.5px] left-[0.5px] w-[1px] h-[1px] bg-white/60 rounded-full blur-[0.2px]"></div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-1.5 right-2 w-1 h-1 bg-red-500 rounded-full animate-pulse shadow-[0_0_2px_#ef4444]"></div>
                                </div>

                                
                                <div 
                                    className="absolute inset-0 rounded-[40px] pointer-events-none transition-all duration-300 border-[6px]"
                                    style={{ borderColor: currentStatusColor, opacity: 0.7 }}
                                ></div>

                                
                                
                                <div className="absolute left-3 top-5 w-2 h-8 bg-black/20 rounded-full border border-black/10 shadow-inner z-20 flex items-center justify-center overflow-hidden">
                                     <motion.div
                                        animate={{ opacity: currentSignal.id === 'left' ? [0.1, 1, 0.1] : 0 }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                        className="w-full h-full bg-orange-500 rounded-full shadow-[0_0_10px_#f97316]"
                                     />
                                </div>
                                
                                <div className="absolute right-3 top-5 w-2 h-8 bg-black/20 rounded-full border border-black/10 shadow-inner z-20 flex items-center justify-center overflow-hidden">
                                     <motion.div
                                        animate={{ opacity: currentSignal.id === 'right' ? [0.1, 1, 0.1] : 0 }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                        className="w-full h-full bg-orange-500 rounded-full shadow-[0_0_10px_#f97316]"
                                     />
                                </div>

                                
                                <div className="w-[20rem] h-40 bg-black rounded-3xl flex items-center justify-center relative border-[6px] border-gray-800 shadow-inner z-10 overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div 
                                            key={config.status}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex gap-10 items-center justify-center"
                                        >
                                            {config.status === RobotStatus.ERROR ? (
                                                <>
                                                    <div className="text-red-500 text-5xl font-mono">X</div>
                                                    <div className="text-red-500 text-5xl font-mono">X</div>
                                                </>
                                            ) : config.status === RobotStatus.CHARGING ? (
                                                <div className="flex items-center relative pl-2">
                                                    
                                                    <div className="relative w-48 h-20 border-[6px] border-gray-600 rounded-2xl p-2 flex items-center justify-start bg-gray-900/50 box-border">
                                                        
                                                        <motion.div
                                                            initial={{ width: "5%" }}
                                                            animate={{ width: "100%" }}
                                                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                                                            className="h-full bg-white rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.8)] relative overflow-hidden"
                                                        >
                                                            
                                                            <div className="absolute top-0 right-0 bottom-0 w-2 bg-black/5 skew-x-12 blur-sm"></div>
                                                        </motion.div>
                                                        
                                                        
                                                        <div className="absolute inset-0 flex items-center justify-center z-10">
                                                             <Zap className="w-10 h-10 text-white mix-blend-difference animate-pulse" />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="w-3 h-10 bg-gray-600 rounded-r-lg ml-0.5"></div>
                                                </div>
                                            ) : (
                                                <>
                                                    
                                                    <motion.div 
                                                        animate={{ 
                                                            scaleY: [1, 1, 1, 0.1, 1, 1, 1, 1, 1],
                                                            x: [0, 5, -5, 0],
                                                            y: [0, -2, 2, 0]
                                                        }} 
                                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                                        className="w-14 h-14 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                                                    />
                                                    
                                                    <motion.div 
                                                        animate={{ 
                                                            scaleY: [1, 1, 1, 0.1, 1, 1, 1, 1, 1],
                                                            x: [0, 5, -5, 0],
                                                            y: [0, -2, 2, 0]
                                                        }} 
                                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                                        className="w-14 h-14 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                                                    />
                                                </>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                    <div className="absolute top-2 right-2 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-lg pointer-events-none"></div>
                                </div>
                                <div className="absolute bottom-6 w-40 h-1 bg-black/10 rounded-full"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-8 bg-black/60 blur-xl rounded-[100%]"></div>
                    </motion.div>
                </>
            )}

            
            {currentView === 'side' && (
                <motion.div 
                    key="side"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 flex items-center justify-center h-full w-full pointer-events-none"
                >
                     <div className="relative w-[24rem] h-56 pointer-events-auto">
                         
                         <div className="absolute -top-24 left-12 flex flex-col items-center z-0">
                            <motion.div 
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-4 h-4 rounded-full shadow-[0_0_15px_currentColor] mb-0 relative z-10"
                                style={{ backgroundColor: currentStatusColor }}
                            />
                            <div className="w-1.5 h-24 bg-gray-600 rounded-full border-l border-white/20"></div>
                        </div>

                        
                        <div className="absolute -bottom-6 left-8 w-20 h-20 bg-gray-800 rounded-full border-[6px] border-gray-700 shadow-xl z-30 flex items-center justify-center">
                            <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-600"></div>
                        </div>
                        <div className="absolute -bottom-6 right-8 w-20 h-20 bg-gray-800 rounded-full border-[6px] border-gray-700 shadow-xl z-30 flex items-center justify-center">
                            <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-600"></div>
                        </div>

                        
                        <motion.div 
                            className="absolute h-1/2 z-10 origin-bottom-right"
                            style={{
                                height: '28px',
                                top: '-10px',
                                left: '26%',
                                right: '8px',
                                transformOrigin: '90% 120%',
                            }}
                            animate={{ rotate: [0, 20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        >
                             <div 
                                className="w-full h-full relative rounded-t-xl rounded-tr-[35px] border-t-2 border-r-2 border-gray-700/30"
                                style={{ backgroundColor: currentBodyColor }}
                             >
                                 <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black/10 rounded-full"></div>
                             </div>
                        </motion.div>

                        
                        <div 
                            className="w-full h-full rounded-[40px] relative transition-colors duration-500 ease-in-out flex flex-row items-center overflow-visible shadow-2xl z-20"
                            style={{ 
                                backgroundColor: currentBodyColor,
                                boxShadow: `0 0 0 4px #1f2937`
                            }}
                        >
                            
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 z-50 pointer-events-none">
                                <h2 className="text-black/60 font-bold text-xl uppercase tracking-widest p-0 inline-block">
                                    Я робот доставщик!
                                </h2>
                            </div>

                            
                            <div className="absolute top-0 bottom-0 left-0 w-[25%] z-20 rounded-l-[40px]">
                                
                                <div className="absolute -top-4 left-6 w-10 h-3 bg-gray-800 rounded-t-lg"></div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-8 bg-black/60 blur-xl rounded-[100%]"></div>
                </motion.div>
            )}

            
            {currentView === 'top' && (
                 <motion.div 
                    key="top"
                    initial={{ opacity: 0, scale: 0.9, rotateX: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 p-10 flex items-center justify-center h-full w-full pointer-events-none"
                >
                     <div className="relative w-[20rem] h-[24rem] pointer-events-auto">
                        
                        <div className="absolute top-[22%] -left-4 w-6 h-16 bg-gray-800 rounded-l-lg border-2 border-gray-700"></div>
                        <div className="absolute top-[22%] -right-4 w-6 h-16 bg-gray-800 rounded-r-lg border-2 border-gray-700"></div>
                        <div className="absolute bottom-[15%] -left-4 w-6 h-16 bg-gray-800 rounded-l-lg border-2 border-gray-700"></div>
                        <div className="absolute bottom-[15%] -right-4 w-6 h-16 bg-gray-800 rounded-r-lg border-2 border-gray-700"></div>

                        
                        <div 
                            className="w-full h-full rounded-[40px] relative transition-colors duration-500 ease-in-out shadow-2xl z-20 overflow-hidden flex flex-col"
                            style={{ 
                                backgroundColor: currentBodyColor,
                                border: `4px solid ${currentStatusColor}`
                            }}
                        >
                            
                            <div className="h-[75%] relative w-full border-b-2 border-black/10 p-6">
                                
                                <div className="w-full h-full border-4 border-black/10 rounded-xl bg-black/5 flex items-center justify-center relative">
                                    <div className="absolute top-2 w-1/2 h-1 bg-black/10 rounded-full"></div>
                                    <div className="absolute bottom-2 w-1/3 h-1.5 bg-black/20 rounded-full"></div>
                                    
                                    
                                    <div className="absolute top-0 w-full h-2 border-b border-dashed border-black/20"></div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-3xl font-black tracking-[0.55em] text-black/70 uppercase">
                                            А - 24
                                        </span>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="h-[25%] relative w-full flex flex-col items-center justify-center bg-black/5">
                                
                                
                                <div className="w-32 h-10 bg-black rounded-lg border-2 border-gray-700 flex items-center justify-center shadow-inner relative overflow-hidden group mb-2">
                                    <div className="text-center z-10">
                                        <QrCode className="w-4 h-4 text-white mx-auto mb-0.5 opacity-70" />
                                        <span className="text-[8px] font-mono text-green-400 uppercase tracking-widest animate-pulse">
                                            ПРЕДЪЯВИТЕ QR
                                        </span>
                                    </div>
                                    
                                    <div className="absolute top-0 w-full h-1 bg-green-400/50 blur-sm animate-[scan_2s_ease-in-out_infinite]"></div>
                                </div>
                                
                                
                                <div className="absolute bottom-6 left-8 z-30">
                                    <div className="w-3 h-3 bg-gray-800 rounded-full border border-gray-600 relative flex items-center justify-center">
                                         
                                        <div className="absolute -top-1 w-4 h-4 rounded-full shadow-[0_0_10px_currentColor] z-10" style={{backgroundColor: currentStatusColor}}></div>
                                    </div>
                                </div>

                                
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-gray-800 rounded-full border-2 border-gray-700 flex items-center justify-center z-30 shadow-lg">
                                    <div className="w-2.5 h-2.5 rounded-full bg-black border border-gray-500 relative">
                                         <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white/50 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </motion.div>
            )}

        </motion.div>
        
        
        <div className="flex justify-center gap-2 mt-6 absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
            {views.map((v, i) => (
                <button 
                    key={v}
                    onClick={() => setViewIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === viewIndex ? 'w-8 bg-purple-500' : 'w-2 bg-gray-700 hover:bg-gray-600'}`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RobotVisualizer;
