import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Warehouse, User, Building2, MapPin, Package, CheckCircle2, QrCode, Zap } from 'lucide-react';

const DeliveryScenario: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative bg-[#050505] min-h-[400vh]">
      
      
      <div className="sticky top-0 left-0 w-full z-50 bg-[#050505] border-b border-gray-800 py-4 shadow-2xl">
          <div className="container mx-auto px-4 md:px-16 relative">
              <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <span className="text-yellow-400">03.</span>
                    <span>Сценарий выполнения заказа</span>
                  </h2>
              </div>
              <div className="relative h-2 w-full bg-gray-800 rounded-full flex items-center justify-between">
                  
                  
                  <motion.div 
                      className="absolute top-0 left-0 h-full bg-purple-500 rounded-full"
                      style={{ width: useTransform(smoothProgress, (v) => `${v * 100}%`) }}
                  />

                  
                  <div className="relative z-10 w-8 h-8 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center">
                      <Warehouse size={14} className="text-gray-400" />
                  </div>
                  
                  <div className="relative z-10 w-8 h-8 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center">
                      <User size={14} className="text-gray-400" />
                  </div>

                  <div className="relative z-10 w-8 h-8 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center">
                      <Building2 size={14} className="text-gray-400" />
                  </div>

                  <div className="relative z-10 w-8 h-8 bg-gray-900 border-2 border-gray-700 rounded-full flex items-center justify-center">
                      <MapPin size={14} className="text-gray-400" />
                  </div>

                  
                  <motion.div 
                      className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.4)] flex items-center justify-center z-30 border-4 border-[#050505]"
                      style={{ 
                          left: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                          x: "-50%"
                      }}
                  >
                       <div className="w-6 h-4 bg-black rounded-sm flex justify-center items-center gap-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                       </div>
                  </motion.div>
              </div>
          </div>
      </div>

      <div className="container mx-auto px-4 py-12">
            
            
            <section className="min-h-screen flex flex-col justify-center items-center py-20">
                 <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <span className="text-purple-500">01.</span>
                        Прибытие в Хаб
                    </h3>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Робот прибывает к пункту выдачи (ПВЗ). Специальная платформа на улице позволяет ему заряжаться и ожидать загрузки, не занимая место внутри помещения.
                    </p>
                 </div>

                 
                 <div className="relative w-full max-w-5xl h-[500px] bg-sky-900/10 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
                     
                     
                     <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6] via-[#1d4ed8] to-[#0f172a]"></div>

                     
                     <div className="absolute bottom-24 right-32 w-2 h-96 bg-gray-800 z-10">
                        <div className="absolute top-0 -left-4 w-10 h-4 bg-gray-800 rounded-t-lg"></div>
                        <div className="absolute top-4 -left-4 w-10 h-10 bg-yellow-200/20 blur-xl rounded-full"></div>
                        <div className="absolute top-4 -left-2 w-6 h-8 bg-yellow-100/50 rounded-b-xl"></div>
                     </div>

                     
                     <div className="absolute bottom-24 left-10 w-80 h-80 z-10">
                        
                        <div className="w-full h-full bg-[#4c1d95] rounded-t-lg border-2 border-[#5b21b6] shadow-2xl relative overflow-hidden">
                            
                            <div className="absolute inset-0 opacity-20" 
                                style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 10px'}}>
                            </div>
                            
                            
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg border-2 border-gray-200">
                                <span className="text-purple-900 font-bold text-xl tracking-widest">ПВЗ • HUB</span>
                            </div>

                            
                            <div className="absolute top-32 left-8 w-24 h-32 bg-blue-300/20 border-4 border-purple-900 rounded-lg overflow-hidden backdrop-blur-sm">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                                <div className="absolute bottom-0 w-full h-1/2 bg-black/40"></div> 
                            </div>

                             
                            <div className="absolute bottom-0 right-8 w-24 h-48 bg-gray-800 border-x-4 border-t-4 border-gray-700 rounded-t-lg">
                                <div className="w-full h-full flex">
                                    <div className="w-1/2 h-full border-r border-black/50 bg-white/5"></div>
                                    <div className="w-1/2 h-full bg-white/5"></div>
                                </div>
                                <div className="absolute top-1/2 left-2 w-2 h-8 bg-gray-400 rounded-full"></div>
                            </div>
                        </div>
                     </div>

                     
                     <div className="absolute bottom-0 w-full h-24 bg-[#334155] border-t-4 border-[#475569] z-20 flex items-center">
                        
                        <div className="w-full h-full opacity-30" style={{backgroundImage: 'linear-gradient(90deg, #1e293b 2px, transparent 2px)', backgroundSize: '40px 100%'}}></div>
                     </div>

                     
                     <div className="absolute bottom-0 w-full h-4 bg-[#1e293b] z-30"></div>

                     
                     <div className="absolute bottom-24 left-[380px] z-20 flex gap-4">
                          
                          
                          <div className="relative w-48 h-6">
                                
                                <div className="w-full h-full bg-gray-600 rounded-t-xl border-t border-white/20 shadow-xl flex justify-center">
                                    <div className="absolute top-1 w-32 h-1 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_#a855f7]"></div>
                                </div>
                                <div className="absolute top-full w-44 h-24 bg-gray-700 left-2"></div> 
                                
                                
                                <div className="absolute bottom-[26px] left-1/2 -translate-x-1/2 w-32 h-24 bg-yellow-400 rounded-[16px] shadow-[0_0_0_2px_#1f2937] flex flex-col items-center justify-center border-b-4 border-yellow-600 z-10">
                                    
                                    <div className="absolute -bottom-1 -left-3 w-4 h-8 bg-gray-800 rounded border-2 border-gray-700 shadow-lg"></div>
                                    <div className="absolute -bottom-1 -right-3 w-4 h-8 bg-gray-800 rounded border-2 border-gray-700 shadow-lg"></div>

                                    
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-2 bg-gray-800 rounded-t-md border border-gray-700 flex items-center justify-center">
                                         <div className="w-1 h-1 bg-black rounded-full border-[0.5px] border-gray-500"></div>
                                    </div>

                                    
                                    <div className="absolute left-2 top-2 w-1 h-3 bg-black/10 rounded-full"></div>
                                    <div className="absolute right-2 top-2 w-1 h-3 bg-black/10 rounded-full"></div>

                                    
                                    <div className="absolute -bottom-4 w-24 h-4 bg-purple-500/40 blur-lg rounded-full animate-pulse z-0"></div>
                                    
                                    
                                    <div className="absolute -top-10 left-4 flex flex-col items-center">
                                        <motion.div 
                                            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"
                                        />
                                        <div className="w-0.5 h-8 bg-gray-600"></div>
                                    </div>

                                    <div className="w-24 h-14 bg-black rounded-lg border-2 border-gray-800 flex items-center justify-center relative overflow-hidden mt-1 z-10">
                                        <div className="flex items-center relative pl-1">
                                            
                                            <div className="relative w-12 h-6 border-2 border-gray-600 rounded flex items-center justify-start bg-gray-900 box-border p-[1px]">
                                                
                                                <motion.div
                                                    initial={{ width: "5%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                                                    className="h-full bg-white rounded-[1px] shadow-[0_0_5px_white]"
                                                />
                                                
                                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                                     <Zap className="w-3 h-3 text-white mix-blend-difference animate-pulse" />
                                                </div>
                                            </div>
                                            
                                            <div className="w-1 h-3 bg-gray-600 rounded-r-sm"></div>
                                        </div>
                                    </div>
                                </div>
                          </div>

                          
                          <div className="relative w-48 h-6">
                                
                                <div className="w-full h-full bg-gray-600 rounded-t-xl border-t border-white/20 shadow-xl flex justify-center">
                                    <div className="absolute top-1 w-32 h-1 bg-gray-500 rounded-full shadow-inner"></div>
                                </div>
                                <div className="absolute top-full w-44 h-24 bg-gray-700 left-2"></div>

                                
                                <div className="absolute bottom-[26px] left-1/2 -translate-x-1/2 w-32 h-24 bg-yellow-400 rounded-[16px] shadow-[0_0_0_2px_#1f2937] flex flex-col items-center justify-center border-b-4 border-yellow-600 z-10">
                                    
                                    <div className="absolute -bottom-1 -left-3 w-4 h-8 bg-gray-800 rounded border-2 border-gray-700 shadow-lg"></div>
                                    <div className="absolute -bottom-1 -right-3 w-4 h-8 bg-gray-800 rounded border-2 border-gray-700 shadow-lg"></div>

                                    
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-2 bg-gray-800 rounded-t-md border border-gray-700 flex items-center justify-center">
                                         <div className="w-1 h-1 bg-black rounded-full border-[0.5px] border-gray-500"></div>
                                    </div>

                                    
                                    <div className="absolute left-2 top-2 w-1 h-3 bg-black/10 rounded-full"></div>
                                    <div className="absolute right-2 top-2 w-1 h-3 bg-black/10 rounded-full"></div>

                                    
                                    <div className="absolute -bottom-4 w-24 h-4 bg-orange-500/40 blur-lg rounded-full animate-pulse z-0"></div>
                                    
                                    
                                    <div className="absolute -top-10 left-4 flex flex-col items-center">
                                        <motion.div 
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 0.5, repeat: Infinity }}
                                            className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316]"
                                        />
                                        <div className="w-0.5 h-8 bg-gray-600"></div>
                                    </div>

                                    
                                    <div className="w-24 h-14 bg-black rounded-lg border-2 border-gray-800 flex items-center justify-center gap-3 relative overflow-hidden mt-1 z-10">
                                        <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_5px_white]"></div>
                                        <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_5px_white]"></div>
                                    </div>
                                </div>
                          </div>

                     </div>

                 </div>
            </section>

            
            <section className="min-h-screen flex flex-col justify-center py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-blue-500">02.</span>
                            Загрузка заказа
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                            Сотрудник склада видит прибывшего робота. Из приложении онпоказывает свой QR камере робота. Крышка открывается автоматически.
                        </p>
                        
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h4 className="text-sm font-bold text-gray-300 uppercase mb-4">Действия сотрудника:</h4>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-green-500 shrink-0"/> Выбрать заказ #4921 в терминале</li>
                                <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-green-500 shrink-0"/> Подойти к роботу A-24 на улице</li>
                                <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-green-500 shrink-0"/> Отсканировать QR для доступа</li>
                                <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-green-500 shrink-0"/> Положить груз и закрыть отсек</li>
                            </ul>
                        </div>
                    </div>

                    
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="w-72 bg-white rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-2xl relative rotate-3 hover:rotate-0 transition-transform duration-500">
                            
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                            
                            
                            <div className="h-full bg-gray-50 p-6 pt-12 flex flex-col items-center">
                                <div className="text-gray-400 text-xs font-bold uppercase mb-6 tracking-widest">Courier App</div>
                                
                                <div className="w-24 h-24 bg-blue-100 rounded-full mb-6 flex items-center justify-center border-4 border-blue-50">
                                    <Package className="text-blue-500" size={40} />
                                </div>
                                
                                <div className="text-3xl font-bold text-gray-900 mb-1">Робот A-24</div>
                                <div className="text-sm text-green-600 font-bold uppercase tracking-wider mb-8 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    Готов к загрузке
                                </div>

                                <div className="w-full bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-6 flex flex-col items-center group cursor-pointer hover:border-blue-200 transition-colors">
                                    <QrCode size={140} className="text-gray-800 group-hover:scale-105 transition-transform duration-300" />
                                    <span className="text-[10px] text-gray-400 mt-4 font-mono">SCAN TO UNLOCK LID</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-24 text-center p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-white/5"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 tracking-tighter uppercase drop-shadow-sm">
                        РОБОТ ПОЛУЧИЛ ЗАКАЗ
                    </h2>
                </motion.div>
            </section>

            
            <section className="min-h-screen flex flex-col justify-center overflow-hidden py-20">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-white mb-2">В Пути</h3>
                    <p className="text-gray-400 text-lg">Робот движется к клиенту по городским улицам, не мешая никому.</p>
                </div>

                <div className="relative w-full h-96 bg-gray-900 border-y border-gray-800 flex items-center justify-center overflow-hidden rounded-3xl">
                    
                    <div className="absolute inset-0 flex flex-col justify-center bg-[#111]">
                        <div className="w-full h-full relative perspective-[1000px]">
                            
                            {[20, 40, 60, 80].map((top, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-full h-[1px] bg-gray-700/30"
                                    style={{ top: `${top}%` }}
                                    animate={{ x: [-1000, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            ))}
                            
                             <motion.div 
                                className="absolute top-1/2 left-0 w-[200%] h-4 flex gap-32 items-center"
                                animate={{ x: ["-50%", "0%"] }}
                                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                             >
                                 {Array.from({length: 20}).map((_, i) => (
                                     <div key={i} className="w-24 h-2 bg-white/20 rounded-full skew-x-12 blur-[1px]"></div>
                                 ))}
                             </motion.div>
                        </div>
                    </div>

                    
                    <div className="relative z-10 w-80 h-52">
                        
                        
                        <div className="absolute -bottom-6 left-10 w-20 h-20 bg-gray-800 rounded-full border-[6px] border-gray-700 shadow-xl z-30 flex items-center justify-center animate-spin" style={{animationDuration: '0.4s'}}>
                            <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-600 relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-gray-500"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 right-10 w-20 h-20 bg-gray-800 rounded-full border-[6px] border-gray-700 shadow-xl z-30 flex items-center justify-center animate-spin" style={{animationDuration: '0.4s'}}>
                             <div className="w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-600 relative">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-4 bg-gray-500"></div>
                            </div>
                        </div>

                        
                        <motion.div
                             className="w-full h-full relative"
                             animate={{ y: [0, -3, 0, 2, 0] }}
                             transition={{ duration: 0.3, repeat: Infinity }}
                        >
                            
                            <div className="absolute -top-16 right-12 flex flex-col items-center z-0">
                                 <motion.div 
                                    animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.08, 1] }}
                                    transition={{ duration: 0.9, repeat: Infinity }}
                                    className="w-4 h-4 rounded-full relative z-10"
                                    style={{
                                        backgroundColor: '#21d07a',
                                        boxShadow: '0 0 10px rgba(33,208,122,0.9), 0 0 26px rgba(33,208,122,0.6)'
                                    }}
                                 />
                                 <div className="w-1.5 h-16 bg-gray-600 rounded-full border-l border-white/20"></div>
                            </div>

                            
                             <div 
                                className="absolute h-[28px] z-10 origin-bottom-left"
                                style={{
                                    top: '-10px',
                                    left: '8px', 
                                    right: '26%', 
                                }}
                            >
                                 <div className="w-full h-full relative rounded-t-xl rounded-tl-[35px] border-t-2 border-l-2 border-gray-700/30 bg-yellow-400">
                                     <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black/10 rounded-full"></div>
                                 </div>
                            </div>

                            
                            <div 
                                className="w-full h-full rounded-[40px] relative transition-colors duration-500 ease-in-out flex flex-row items-center overflow-visible shadow-2xl z-20 border-b-[6px] border-yellow-600"
                                style={{ backgroundColor: '#facc15' }}
                            >
                                
                                <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                                    <h2 className="text-black/60 font-bold text-xl uppercase tracking-widest p-0 inline-block">
                                        Я робот доставщик!
                                    </h2>
                                </div>

                                
                                <div className="absolute top-0 bottom-0 right-0 w-[25%] z-20 rounded-r-[40px]">
                                    
                                    <div className="absolute -top-4 right-6 w-10 h-3 bg-gray-800 rounded-t-lg"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            
            <section className="min-h-screen flex flex-col justify-center pb-24 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    
                    <div className="flex justify-center relative">
                        
                        <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-80 h-96 border-t-[3px] border-x-[3px] border-gray-800 rounded-t-full opacity-30"></div>

                        <div className="w-72 bg-white rounded-[40px] border-[8px] border-gray-800 overflow-hidden shadow-2xl relative rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                            
                            
                            <div className="h-full bg-gray-50 flex flex-col gap-4 p-5 pt-12">
                                <div className="text-center text-[11px] font-bold uppercase tracking-[0.35em] text-gray-400">Courier App</div>

                                <div className="relative w-full h-48 bg-[#f6f7fb] rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                                    
                                    <div className="absolute inset-0 grid grid-cols-6 gap-x-3 gap-y-3 px-4 py-4 opacity-80">
                                        {Array.from({ length: 36 }).map((_, i) => (
                                            <div key={i} className="h-3 rounded-full bg-gray-200/80"></div>
                                        ))}
                                    </div>

                                    
                                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-14 bg-white/85 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.08)] border-x border-gray-200"></div>

                                    
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-gray-900 rounded-b-3xl shadow-md z-30"></div>

                                    
                                    <div className="absolute top-1 left-1/2 -translate-x-1/2 flex flex-col items-center z-40">
                                        <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                                            <User size={16} className="text-white" />
                                        </div>
                                        <div className="w-1.5 h-8 bg-gray-400/70 rounded-full mt-1"></div>
                                    </div>

                                    
                                    <div className="absolute right-7 top-10 w-28 h-28 rounded-xl border-2 border-orange-500 border-dashed bg-orange-50/90 shadow-[0_15px_30px_rgba(249,115,22,0.2)]">
                                        <div className="absolute inset-2 rounded-lg bg-orange-100/70"></div>
                                        <div className="absolute inset-0 rounded-xl border border-orange-200/60 shadow-inner"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-10 bg-yellow-400 rounded-[10px] border-2 border-white shadow-[0_6px_12px_rgba(250,204,21,0.5)] relative flex items-center justify-center">
                                                <div className="absolute inset-0 rounded-[10px] border-2 border-yellow-500 pointer-events-none"></div>
                                                <div className="w-8 h-5 bg-gray-900 rounded-[8px] border border-gray-800 shadow-inner flex items-center justify-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <div className="text-xl font-black text-gray-900 mb-1">Привет, Алекс!</div>
                                    <div className="text-lg font-semibold text-red-600 tracking-wide">А-24 Прибыл!</div>
                                </div>

                                <div className="w-full bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center gap-3">
                                    <QrCode size={120} className="text-gray-900" />
                                    <span className="text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase">Scan to unlock lid</span>
                                </div>
                            </div>
                        </div>

                        
                        <div className="absolute bottom-0 -right-8 w-32 h-28 bg-yellow-400 rounded-[14px] border-[6px] border-white shadow-[0_14px_32px_rgba(0,0,0,0.35)] flex items-center justify-center z-30">
                            <div className="w-24 h-14 bg-black rounded-[14px] flex gap-4 justify-center items-center border-2 border-black/40 shadow-inner">
                                <div className="w-4 h-4 bg-white rounded-full"></div>
                                <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="text-orange-500">04.</span>
                            Получение заказа
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                            Робот ожидает в виртуальной оранжевой зоне у подъезда. Клиент выходит, находит робота по номеру и цвету в приложении.
                        </p>
                        
                        <div className="bg-orange-500/10 border border-orange-500/30 p-8 rounded-2xl">
                            <h4 className="text-orange-400 font-bold mb-3 flex items-center gap-2 text-lg">
                                <MapPin size={24}/> Виртуальная Зона
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                                Робот не заезжает на крыльцо и не блокирует проход. Просто подойдите к нему и покажите QR-код с экрана телефона камере робота. Крышка открыется автоматически.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    </div>
  );
};

export default DeliveryScenario;
