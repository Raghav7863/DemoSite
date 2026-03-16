import { Check, Clock, Users, Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Casual',
    icon: Clock,
    price: '5',
    duration: 'per hour',
    features: [
      'Standard Gaming PC',
      'High-speed Internet',
      'Comfortable Gaming Chair',
      'Free Soft Drinks',
      'Access to Game Library'
    ],
    popular: false
  },
  {
    name: 'Pro Gamer',
    icon: Zap,
    price: '8',
    duration: 'per hour',
    features: [
      'Premium Gaming PC (RTX 4090)',
      '1 Gbps Fiber Internet',
      'RGB Gaming Chair',
      'Free Drinks & Snacks',
      'Priority Booking',
      'Tournament Access'
    ],
    popular: true
  },
  {
    name: 'Team Room',
    icon: Users,
    price: '40',
    duration: 'per hour (5 players)',
    features: [
      '5 Premium Gaming PCs',
      'Private Gaming Room',
      'Team Voice Chat Setup',
      'Unlimited Drinks & Snacks',
      'Extended Hours Available',
      'Custom Tournament Hosting'
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible pricing options for casual gamers and competitive esports teams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular
                  ? 'border-orange-500 shadow-lg shadow-orange-500/20'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-500/10 p-3 rounded-lg">
                  <plan.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:shadow-orange-500/50'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
