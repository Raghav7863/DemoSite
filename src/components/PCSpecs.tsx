import { Cpu, HardDrive, Monitor, MemoryStick, Gamepad2 } from 'lucide-react';

const pcConfigs = [
  {
    name: 'Standard Gaming PC',
    tier: 'Casual Gaming',
    specs: [
      { icon: Cpu, label: 'Processor', value: 'Intel Core i7-13700K' },
      { icon: MemoryStick, label: 'Graphics Card', value: 'NVIDIA RTX 4070 Ti' },
      { icon: HardDrive, label: 'RAM', value: '32GB DDR5' },
      { icon: HardDrive, label: 'Storage', value: '1TB NVMe SSD' },
      { icon: Monitor, label: 'Display', value: '27" 1440p 165Hz' }
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Premium Gaming PC',
    tier: 'Pro Gaming',
    specs: [
      { icon: Cpu, label: 'Processor', value: 'Intel Core i9-14900K' },
      { icon: MemoryStick, label: 'Graphics Card', value: 'NVIDIA RTX 4090' },
      { icon: HardDrive, label: 'RAM', value: '64GB DDR5' },
      { icon: HardDrive, label: 'Storage', value: '2TB NVMe SSD' },
      { icon: Monitor, label: 'Display', value: '32" 4K 240Hz' }
    ],
    gradient: 'from-orange-500 to-red-600'
  }
];

export default function PCSpecs() {
  return (
    <section id="specs" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-4">
            <Gamepad2 className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-medium">Hardware Specifications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Top-Tier Gaming Hardware
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience gaming on cutting-edge hardware designed for maximum performance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pcConfigs.map((config, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="mb-6">
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${config.gradient} bg-opacity-10 border border-orange-500/20 mb-3`}>
                  <span className="text-sm font-semibold text-orange-500">
                    {config.tier}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{config.name}</h3>
              </div>

              <div className="space-y-6">
                {config.specs.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors duration-200"
                  >
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <spec.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm">{spec.label}</p>
                      <p className="text-white font-semibold text-lg">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-lg">
                <p className="text-gray-300 text-sm text-center">
                  <span className="text-orange-500 font-semibold">All PCs include:</span> Mechanical Keyboard, Gaming Mouse, Premium Headset
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Windows 11 Pro', value: 'OS' },
            { label: 'RGB Lighting', value: 'Setup' },
            { label: 'Water Cooling', value: 'System' },
            { label: '1000+ Games', value: 'Library' }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center">
              <p className="text-2xl font-bold text-white mb-1">{feature.label}</p>
              <p className="text-gray-400 text-sm">{feature.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
