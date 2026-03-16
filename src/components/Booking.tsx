import { Calendar, Clock, Users, Mail, User, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    pcType: 'standard',
    players: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request submitted! We will contact you shortly to confirm your reservation.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      pcType: 'standard',
      players: '1'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Book Your Session
          </h2>
          <p className="text-xl text-gray-400">
            Reserve your gaming station and get ready for an epic experience
          </p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <User className="w-4 h-4 text-orange-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                  <Users className="w-4 h-4 text-orange-500" />
                  Number of Players
                </label>
                <select
                  name="players"
                  value={formData.players}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="1">1 Player</option>
                  <option value="2">2 Players</option>
                  <option value="3">3 Players</option>
                  <option value="4">4 Players</option>
                  <option value="5">5+ Players (Team Room)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-300 font-medium mb-2">
                PC Configuration
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="pcType"
                    value="standard"
                    checked={formData.pcType === 'standard'}
                    onChange={handleChange}
                    className="peer sr-only"
                  />
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-4 peer-checked:border-orange-500 peer-checked:bg-orange-500/5 transition-all">
                    <p className="text-white font-semibold mb-1">Standard PC</p>
                    <p className="text-gray-400 text-sm">RTX 4070 Ti - $5/hour</p>
                  </div>
                </label>
                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="pcType"
                    value="premium"
                    checked={formData.pcType === 'premium'}
                    onChange={handleChange}
                    className="peer sr-only"
                  />
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-4 peer-checked:border-orange-500 peer-checked:bg-orange-500/5 transition-all">
                    <p className="text-white font-semibold mb-1">Premium PC</p>
                    <p className="text-gray-400 text-sm">RTX 4090 - $8/hour</p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Confirm Booking
            </button>

            <p className="text-gray-400 text-sm text-center">
              By booking, you agree to our terms and conditions. We'll send you a confirmation email shortly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
