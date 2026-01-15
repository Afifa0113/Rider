import { useState } from 'react';
import { Plane, MapPin, Calendar, Clock, Users, Shield, DollarSign, ChevronRight, Luggage, Building2, IndianRupee } from 'lucide-react';

interface RideBookingProps {
  onRideBooked: () => void;
}

export function RideBooking({ onRideBooked }: RideBookingProps) {
  const [step, setStep] = useState<'flight' | 'preferences' | 'matches' | 'payment'>('flight');
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('Kempegowda International Airport');
  const [dropLocation, setDropLocation] = useState('');
  const [genderPreference, setGenderPreference] = useState<'any' | 'same' | 'female' | 'male'>('any');
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [terminalNumber, setTerminalNumber] = useState('');
  const [luggageCount, setLuggageCount] = useState('1');

  // Mock flight integration data
  const mockFlightData = {
    flightNumber: 'AI 503',
    airline: 'Air India',
    from: 'Mumbai (BOM)',
    to: 'Bangalore (BLR)',
    date: '2025-12-15',
    time: '14:30',
    status: 'On Time',
  };

  // Mock co-traveler matches
  const mockMatches = [
    {
      id: 1,
      name: 'Priya S.',
      gender: 'Female',
      rating: 4.8,
      trips: 24,
      verified: true,
      sameFlight: true,
      profession: 'Software Engineer',
      cost: 380,
      savings: 470,
      eta: '2 min',
      estimatedArrival: '3:15 PM',
    },
    {
      id: 2,
      name: 'Rajesh K.',
      gender: 'Male',
      rating: 4.6,
      trips: 18,
      verified: true,
      sameFlight: true,
      profession: 'Consultant',
      cost: 380,
      savings: 470,
      eta: '5 min',
      estimatedArrival: '3:18 PM',
    },
    {
      id: 3,
      name: 'Anjali M.',
      gender: 'Female',
      rating: 4.9,
      trips: 31,
      verified: true,
      sameFlight: false,
      profession: 'Marketing Manager',
      cost: 420,
      savings: 430,
      eta: '8 min',
      estimatedArrival: '3:21 PM',
    },
  ];

  const handleImportFlight = () => {
    setFlightNumber(mockFlightData.flightNumber);
    setDate(mockFlightData.date);
    setTime(mockFlightData.time);
  };

  const handleContinue = () => {
    if (step === 'flight') setStep('preferences');
    else if (step === 'preferences') setStep('matches');
    else if (step === 'matches' && selectedMatch !== null) setStep('payment');
  };

  const handleConfirmBooking = () => {
    onRideBooked();
  };

  const getStepNumber = (stepName: string) => {
    const steps = ['flight', 'preferences', 'matches', 'payment'];
    return steps.indexOf(stepName) + 1;
  };

  const currentStepNumber = getStepNumber(step);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Step-by-Step Progress Indicator */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            {['Flight Info', 'Preferences', 'Match', 'Payment'].map((label, index) => {
              const stepNum = index + 1;
              const isActive = stepNum === currentStepNumber;
              const isCompleted = stepNum < currentStepNumber;
              const isLast = index === 3;

              return (
                <div key={label} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all font-bold text-lg ${
                        isActive
                          ? 'bg-[#3B82F6] text-white shadow-md scale-110'
                          : isCompleted
                          ? 'bg-green-100 text-[#16A34A]'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {isCompleted ? '✓' : stepNum}
                    </div>
                    <span
                      className={`text-sm mt-2 text-center font-semibold ${
                        isActive ? 'text-[#3B82F6]' : 'text-gray-500'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {!isLast && (
                    <div
                      className={`h-0.5 flex-1 mx-2 transition-all ${
                        isCompleted ? 'bg-[#16A34A]' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1: Flight Information */}
        {step === 'flight' && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-gray-900 text-2xl font-bold mb-6">Flight & Ride Details</h2>

            {/* Flight Integration Banner */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Plane className="text-[#3B82F6] flex-shrink-0 mt-0.5" size={20} />
                <div className="flex-1">
                  <div className="text-gray-900 font-bold text-base mb-2">Import from Flight Booking</div>
                  <p className="text-gray-600 text-sm mb-3">
                    Automatically import details from MakeMyTrip, Goibibo, or Cleartrip
                  </p>
                  <button
                    onClick={handleImportFlight}
                    className="bg-[#3B82F6] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                  >
                    Import Flight Details
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold text-base mb-2">Flight Number</label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      placeholder="e.g., AI 503"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold text-base mb-2">
                    <Building2 className="inline mr-1" size={16} />
                    Terminal Number
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3B82F6]" size={20} />
                    <input
                      type="text"
                      value={terminalNumber}
                      onChange={(e) => setTerminalNumber(e.target.value)}
                      placeholder="e.g., T1, T2"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold text-base mb-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold text-base mb-2">Arrival Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold text-base mb-2">
                    <Luggage className="inline mr-1" size={16} />
                    Luggage Capacity
                  </label>
                  <div className="relative">
                    <Luggage className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3B82F6]" size={20} />
                    <select
                      value={luggageCount}
                      onChange={(e) => setLuggageCount(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent appearance-none bg-white text-base"
                    >
                      <option value="1">1 Bag</option>
                      <option value="2">2 Bags</option>
                      <option value="3">3 Bags</option>
                      <option value="4">4+ Bags</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold text-base mb-2">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold text-base mb-2">Drop Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      placeholder="Enter your destination address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-base"
                    />
                  </div>
                </div>
              </div>
            </div>

            {flightNumber && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-[#16A34A] mb-2">
                  <Shield size={20} />
                  <span className="font-bold text-base">Flight Verified</span>
                </div>
                <p className="text-gray-600 text-sm">
                  {mockFlightData.airline} {flightNumber} • {mockFlightData.from} → {mockFlightData.to} •{' '}
                  {mockFlightData.status}
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleContinue}
                disabled={!flightNumber || !date || !time || !dropLocation}
                className="bg-[#3B82F6] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed inline-flex items-center gap-2 shadow-md font-semibold text-base"
              >
                Continue
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Safety Preferences */}
        {step === 'preferences' && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-gray-900 text-2xl font-bold mb-6">Safety & Matching Preferences</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold text-base mb-3">Gender Preference</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    onClick={() => setGenderPreference('any')}
                    className={`px-4 py-3 rounded-lg border-2 transition-colors font-semibold text-base ${
                      genderPreference === 'any'
                        ? 'border-[#3B82F6] bg-blue-50 text-[#3B82F6]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    Any Gender
                  </button>
                  <button
                    onClick={() => setGenderPreference('same')}
                    className={`px-4 py-3 rounded-lg border-2 transition-colors font-semibold text-base ${
                      genderPreference === 'same'
                        ? 'border-[#3B82F6] bg-blue-50 text-[#3B82F6]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    Same Gender
                  </button>
                  <button
                    onClick={() => setGenderPreference('female')}
                    className={`px-4 py-3 rounded-lg border-2 transition-colors font-semibold text-base ${
                      genderPreference === 'female'
                        ? 'border-[#3B82F6] bg-blue-50 text-[#3B82F6]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    Female Only
                  </button>
                  <button
                    onClick={() => setGenderPreference('male')}
                    className={`px-4 py-3 rounded-lg border-2 transition-colors font-semibold text-base ${
                      genderPreference === 'male'
                        ? 'border-[#3B82F6] bg-blue-50 text-[#3B82F6]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    Male Only
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Shield className="text-[#3B82F6] flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <div className="text-gray-900 font-bold text-base mb-2">Your Safety Features</div>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#16A34A]">✓</span>
                        <span>All matches are verified professionals with min. 3.5★ rating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#16A34A]">✓</span>
                        <span>Panic button available throughout the ride</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#16A34A]">✓</span>
                        <span>Real-time route monitoring with deviation alerts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#16A34A]">✓</span>
                        <span>Share live location with family/friends</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep('flight')}
                className="text-gray-600 hover:text-gray-900 px-4 py-2 font-semibold"
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                className="bg-[#3B82F6] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-flex items-center gap-2 shadow-md font-semibold text-base"
              >
                Find Matches
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Co-Traveler Matches - REDESIGNED with prominent Price & ETA */}
        {step === 'matches' && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-gray-900 text-2xl font-bold mb-2">Available Co-Travelers</h2>
            <p className="text-gray-600 text-base mb-6">Select a verified co-traveler for your shared ride</p>

            <div className="space-y-4">
              {mockMatches.map((match) => (
                <div
                  key={match.id}
                  onClick={() => setSelectedMatch(match.id)}
                  className={`rounded-lg border-2 cursor-pointer transition-all overflow-hidden ${
                    selectedMatch === match.id
                      ? 'border-[#3B82F6] shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  {/* PROMINENT PRICE & ETA HEADER */}
                  <div className={`p-4 flex items-center justify-between ${
                    selectedMatch === match.id ? 'bg-blue-50' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className="text-left">
                        <div className="flex items-baseline gap-1">
                          <IndianRupee size={24} className="text-gray-900" />
                          <span className="text-gray-900 font-bold text-3xl">{match.cost}</span>
                        </div>
                        <div className="text-[#16A34A] text-sm font-semibold">Save ₹{match.savings}</div>
                      </div>
                      <div className="h-10 w-px bg-gray-300" />
                      <div className="text-left">
                        <div className="flex items-center gap-1 text-gray-900 font-bold text-xl">
                          <Clock size={20} />
                          <span>{match.eta}</span>
                        </div>
                        <div className="text-gray-600 text-sm font-medium">ETA {match.estimatedArrival}</div>
                      </div>
                    </div>
                    {match.sameFlight && (
                      <span className="bg-[#3B82F6] text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                        Same Flight
                      </span>
                    )}
                  </div>

                  {/* TRAVELER INFO */}
                  <div className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                        <span>{match.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-900 font-bold text-base">{match.name}</span>
                          {match.verified && (
                            <span className="bg-[#16A34A] text-white px-2 py-0.5 rounded text-xs font-semibold">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="text-gray-600 text-sm">{match.profession}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-gray-600 text-sm mt-3 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-1 font-medium">
                        <Users size={14} />
                        <span>{match.trips} trips</span>
                      </div>
                      <div className="flex items-center gap-1 font-medium">
                        <span>★</span>
                        <span>{match.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 font-medium">
                        <Shield size={14} />
                        <span>{match.gender}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep('preferences')}
                className="text-gray-600 hover:text-gray-900 px-4 py-2 font-semibold"
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                disabled={selectedMatch === null}
                className="bg-[#3B82F6] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed inline-flex items-center gap-2 shadow-md font-semibold text-base"
              >
                Continue to Payment
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {step === 'payment' && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-gray-900 text-2xl font-bold mb-6">Confirm & Pay</h2>

            {selectedMatch && (
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-gray-700 font-bold text-lg mb-4">Ride Summary</div>
                  <div className="space-y-2 text-gray-600 text-base">
                    <div className="flex justify-between">
                      <span className="font-medium">Flight</span>
                      <span className="font-semibold">{flightNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Date & Time</span>
                      <span className="font-semibold">
                        {date} at {time}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">From</span>
                      <span className="font-semibold">{pickupLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">To</span>
                      <span className="font-semibold">{dropLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Co-Traveler</span>
                      <span className="font-semibold">{mockMatches.find((m) => m.id === selectedMatch)?.name}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-semibold text-base">Ride Cost</span>
                    <span className="text-gray-900 font-bold text-2xl">
                      ₹{mockMatches.find((m) => m.id === selectedMatch)?.cost}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#16A34A]">
                    <span className="font-semibold text-base">You Save</span>
                    <span className="font-bold text-xl">₹{mockMatches.find((m) => m.id === selectedMatch)?.savings}</span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="text-[#3B82F6] flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <div className="text-gray-900 font-bold text-base mb-2">Safety Features Included</div>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>✓ Panic button with instant emergency response</li>
                        <li>✓ Real-time route monitoring</li>
                        <li>✓ Live location sharing with family</li>
                        <li>✓ 24/7 safety team support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold text-base mb-3">Payment Method</label>
                  <div className="space-y-3">
                    <div className="border-2 border-[#3B82F6] bg-blue-50 rounded-lg p-4 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-[#3B82F6] flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-900 font-semibold text-base">UPI / Cards / Net Banking</div>
                          <div className="text-gray-600 text-sm">Pay securely via payment gateway</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setStep('matches')}
                className="text-gray-600 hover:text-gray-900 px-4 py-2 font-semibold"
              >
                Back
              </button>
              <button
                onClick={handleConfirmBooking}
                className="bg-[#16A34A] text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2 shadow-md font-bold text-base"
              >
                Confirm & Pay ₹{mockMatches.find((m) => m.id === selectedMatch)?.cost}
                <DollarSign size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}