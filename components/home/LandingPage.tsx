import { Shield, Users, DollarSign, MapPin, Bell, Star, ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onBookRide: () => void;
}

export function LandingPage({ onBookRide }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-50 mb-4 text-4xl md:text-5xl font-bold">
              Safe, Verified Airport Ride-Sharing
            </h1>
            <p className="text-blue-100 mb-8 text-lg">
              Save up to 50% on airport rides while ensuring maximum safety with real-time monitoring,
              verified co-travelers, and instant emergency response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBookRide}
                className="bg-white text-[#3B82F6] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Book Your Ride
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-white mb-2 text-3xl font-bold">₹380</div>
              <div className="text-blue-200 text-base">Avg. Shared Ride</div>
            </div>
            <div className="text-center">
              <div className="text-white mb-2 text-3xl font-bold">30-50%</div>
              <div className="text-blue-200 text-base">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-white mb-2 text-3xl font-bold">&lt;2 min</div>
              <div className="text-blue-200 text-base">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-white mb-2 text-3xl font-bold">4.8★</div>
              <div className="text-blue-200 text-base">Safety Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4 text-3xl font-bold">Why Choose SafeRide Airport?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We prioritize your safety and savings with cutting-edge technology and verified matching
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Safety First */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-[#DC2626]" size={24} />
              </div>
              <h3 className="text-gray-900 mb-2 text-xl font-bold">Panic Button & Safety</h3>
              <p className="text-gray-600 mb-4 text-base">
                56px panic button with instant alerts to police, emergency contacts, and 24/7 safety team.
                Real-time route monitoring within 500m corridor.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Multi-channel emergency alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>IoT warning light on vehicle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Share live location with family</span>
                </li>
              </ul>
            </div>

            {/* Verified Matching */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-[#3B82F6]" size={24} />
              </div>
              <h3 className="text-gray-900 mb-2 text-xl font-bold">Verified Co-Travelers</h3>
              <p className="text-gray-600 mb-4 text-base">
                Match with verified professionals on the same flight. Choose same-gender preference
                for added comfort.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Same-flight prioritization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Corporate/professional verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Minimum 3.5★ rating required</span>
                </li>
              </ul>
            </div>

            {/* Cost Savings */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="text-[#16A34A]" size={24} />
              </div>
              <h3 className="text-gray-900 mb-2 text-xl font-bold">Maximum Savings</h3>
              <p className="text-gray-600 mb-4 text-base">
                Save ₹470 per trip compared to solo rides. Bundle flight + ride for additional
                5-10% discount.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>₹380 avg. vs ��850 solo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Bundle discounts available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Corporate subscription plans</span>
                </li>
              </ul>
            </div>

            {/* Smart Integration */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-purple-600" size={24} />
              </div>
              <h3 className="text-gray-900 mb-2 text-xl font-bold">Flight Integration</h3>
              <p className="text-gray-600 mb-4 text-base">
                Auto-populate flight details from MakeMyTrip, Goibibo, Cleartrip. Rides auto-adjust
                on delays.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>One-click flight import</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Auto-adjust on flight changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Single checkout experience</span>
                </li>
              </ul>
            </div>

            {/* Real-time Tracking */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-[#16A34A]" size={24} />
              </div>
              <h3 className="text-gray-900 mb-2 text-xl font-bold">Live Route Monitoring</h3>
              <p className="text-gray-600 mb-4 text-base">
                Real-time GPS tracking with route deviation alerts. Share your journey with
                trusted contacts.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>±500m corridor monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Automatic deviation alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Family tracking links</span>
                </li>
              </ul>
            </div>

            {/* 24/7 Support */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="text-orange-600" size={24} />
              </div>
              <h3 className="text-gray-900 mb-2 text-xl font-bold">24/7 Safety Team</h3>
              <p className="text-gray-600 mb-4 text-base">
                Round-the-clock monitoring and support. Guaranteed response within 10 seconds
                for emergencies.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>&lt;10 sec emergency response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#16A34A] mt-1">✓</span>
                  <span>Direct police coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas / Testimonials */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4 text-3xl font-bold">Trusted by Travelers Like You</h2>
            <p className="text-gray-600 text-lg">See how SafeRide helps different travelers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-lg">
                  <span>P</span>
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-base">Priya, 32</div>
                  <div className="text-gray-600 text-sm">Frequent Traveler</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-base">
                "I travel twice a month for work. SafeRide saves me ₹9,400 annually while giving me
                peace of mind with the panic button and verified co-travelers."
              </p>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center font-bold text-lg">
                  <span>R</span>
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-base">Rajesh, 28</div>
                  <div className="text-gray-600 text-sm">Budget-Conscious</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-base">
                "As a startup employee, every rupee counts. The flight+ride bundle saves me
                additional 10% and expense tracking is super easy."
              </p>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center font-bold text-lg">
                  <span>A</span>
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-base">Anjali, 26</div>
                  <div className="text-gray-600 text-sm">Safety-First</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-base">
                "Same-gender preference and live tracking shared with family makes late-night
                airport rides stress-free. My parents love it too!"
              </p>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#3B82F6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-4 text-3xl font-bold">Ready to Travel Safer and Smarter?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of travelers who save money without compromising on safety
          </p>
          <button
            onClick={onBookRide}
            className="bg-white text-[#3B82F6] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 font-bold text-lg"
          >
            Book Your First Ride
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}