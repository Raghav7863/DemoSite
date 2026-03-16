import { Gamepad2, Wifi, Headphones, Monitor } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8">
          <Gamepad2 className="w-4 h-4 text-orange-500" />
          <span className="text-orange-500 text-sm font-medium">Premium Gaming Experience</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Level Up Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Gaming Experience
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Experience gaming like never before with high-end PCs, ultra-fast internet,
          and a competitive atmosphere that brings gamers together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </button>
          <button
            onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-gray-700 hover:bg-gray-700 transition-all duration-300"
          >
            View PC Specs
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Monitor, label: '4K Monitors', value: '240Hz' },
            { icon: Wifi, label: 'Fiber Internet', value: '1 Gbps' },
            { icon: Gamepad2, label: 'Premium Setup', value: 'RTX 4090' },
            { icon: Headphones, label: 'Audio Gear', value: 'Pro Grade' }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
              <item.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <p className="text-gray-400 text-sm mb-1">{item.label}</p>
              <p className="text-white font-bold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
