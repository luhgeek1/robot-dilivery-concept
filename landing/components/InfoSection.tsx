import React from 'react';
import { Layers, MapPin, Zap } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Умная Инфраструктура</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Город адаптирован для роботов минимальными, но эффективными средствами, не нарушающими исторический облик.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-purple-500/50 transition-colors group">
            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-900/20 group-hover:text-purple-400 transition-colors text-white">
              <Layers size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Кластерные Хабы</h3>
            <p className="text-gray-400 leading-relaxed">
              Скрытые зоны в районах, где роботы ночуют и обслуживаются. Ночью улицы свободны от машин, а утром они выезжают на маршрут заряженными.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-yellow-500/50 transition-colors group">
            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-900/20 group-hover:text-yellow-400 transition-colors text-white">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Мини-площадки ПВЗ</h3>
            <p className="text-gray-400 leading-relaxed">
              Компактные платформы у пунктов выдачи с зарядными доками. Индикатор показывает статус платформы: занято, свободно или идет зарядка.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
            <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-900/20 group-hover:text-blue-400 transition-colors text-white">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Виртуальные Зоны</h3>
            <p className="text-gray-400 leading-relaxed">
              Невидимые для глаза, но видимые в приложении точки у подъездов и кафе. Никакой лишней разметки на асфальте, только чистота городской среды.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
