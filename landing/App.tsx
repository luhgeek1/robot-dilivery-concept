import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Hexagon } from 'lucide-react';
import CitySimulation from './components/CitySimulation';
import RobotVisualizer from './components/RobotVisualizer';
import InfoSection from './components/InfoSection';
import DeliveryScenario from './components/DeliveryScenario';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white font-sans">

      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"></div>

        <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center gap-3 text-purple-400 mb-4"
            >
                <Hexagon size={24} className="fill-purple-400/20" />
                <span className="tracking-[0.2em] text-sm font-bold">by Vasiliev Stepan</span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
            >
                Язык роботов <br />
                в городе Центральный
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
                Единая система визуальной коммуникации между человеком и машиной.
                Интуитивная, безопасная и готовая к будущему.
            </motion.p>
        </div>

        <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 p-3 rounded-full hover:bg-white/5 focus:outline-none"
            onClick={() => {
              const target = document.getElementById('section-city');
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            aria-label="Перейти к разделу Городская среда"
        >
            <ChevronDown className="animate-bounce text-gray-500 w-8 h-8" />
        </motion.button>
      </header>

      <section id="section-city" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-purple-500">01.</span>
                <span className="text-white">Мини-карта</span>
            </h2>
            <div className="h-[1px] w-full bg-gray-800"></div>
        </div>
        
        <CitySimulation />
      </section>

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
         <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-yellow-500">02.</span>
                <span className="text-white">Визуальный Язык</span>
            </h2>
            <div className="h-[1px] w-full bg-gray-800"></div>
        </div>

        <RobotVisualizer />
      </section>

      <section className="relative z-10 border-t border-gray-900">
         <DeliveryScenario />
      </section>

      <section className="py-24 relative z-10">
         <InfoSection />
      </section>

      <footer className="py-12 border-t border-gray-900 text-center text-gray-600 text-sm">
        <p>Центральный Университет &copy; {new Date().getFullYear()}. Концепт-арт финала "Решись".</p>
      </footer>
    </div>
  );
};

export default App;
