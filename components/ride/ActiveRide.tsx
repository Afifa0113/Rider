import { useState, useEffect } from 'react';
import { PanicButton } from '../safety/PanicButton';
import { MapPin, Navigation, Phone, Share2, CheckCircle, Clock, User } from 'lucide-react';

interface ActiveRideProps {
  onRideComplete: () => void;
}

export function ActiveRide({ onRideComplete }: ActiveRideProps) {
  const [rideStatus, setRideStatus] = useState<'waiting' | 'on-route' | 'completed'>('waiting');
  const [trackingActive, setTrackingActive] = useState(true);
  const [sharedWithContacts, setSharedWithContacts] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState(25);
  const [currentLocation, setCurrentLocation] = useState('Kempegowda International Airport');

  // Simulate ride progress
  useEffect(() => {
    if (rideStatus === 'waiting') {
      const timer = setTimeout(() => setRideStatus('on-route'), 3000);
      return () => clearTimeout(timer);
    }

    if (rideStatus === 'on-route') {
      const interval = setInterval(() => {
        setEstimatedTime((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setRideStatus('completed');
            return 0;
          }
          return prev - 1;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [rideStatus]);

  const handleShareLocation = () => {
    setSharedWithContacts(true);
    // In real app, this would open share dialog
    alert('Location shared with emergency contacts via SMS and WhatsApp');
  };

  const handleCompleteRide = () => {
    onRideComplete();
  };

  // Mock ride data
  const rideData = {
    driver: {
      name: 'Ramesh Kumar',
      rating: 4.7,
      vehicle: 'Toyota Innova',
      plate: 'KA 01 AB 1234',
      photo: 'R',
    },
    coTraveler: {
      name: 'Priya S.',
      rating: 4.8,
      verified: true,
      photo: 'P',
    },
    pickup: 'Kempegowda International Airport',
    destination: 'Koramangala, Bangalore',
    distance: '42 km',
    estimatedDuration: '25 min',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Map Area - Simulated */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-br from-green-100 to-green-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Navigation className="text-[#16A34A] mx-auto mb-2" size={48} />
            <p className="text-gray-700">Live Route Tracking</p>
            <p className="text-gray-600">{currentLocation}</p>
          </div>
        </div>

        {/* Route Status Badge */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${trackingActive ? 'bg-[#16A34A]' : 'bg-gray-400'}`} />
              <span className="text-gray-900">
                {trackingActive ? 'Route Monitored' : 'Tracking Off'}
              </span>
            </div>
          </div>

          {rideStatus === 'on-route' && (
            <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#3B82F6]" />
                <span className="text-gray-900">{estimatedTime} min</span>
              </div>
            </div>
          )}
        </div>

        {/* Share Location Button */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={handleShareLocation}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg transition-colors ${
              sharedWithContacts
                ? 'bg-[#16A34A] text-white'
                : 'bg-white text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Share2 size={20} />
            <span>{sharedWithContacts ? 'Location Shared' : 'Share Location'}</span>
          </button>
        </div>
      </div>

      {/* Ride Details */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 pb-8">
        {/* Status Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-gray-900 font-bold text-xl mb-1">
                {rideStatus === 'waiting' && 'Driver Arriving'}
                {rideStatus === 'on-route' && 'On Route to Destination'}
                {rideStatus === 'completed' && 'Ride Completed'}
              </div>
              <div className="text-gray-600 text-base">
                {rideStatus === 'waiting' && 'Your driver will arrive in 3 minutes'}
                {rideStatus === 'on-route' && `${estimatedTime} minutes to destination`}
                {rideStatus === 'completed' && 'You have arrived safely'}
              </div>
            </div>
            {rideStatus === 'completed' && (
              <CheckCircle className="text-[#16A34A]" size={32} />
            )}
          </div>

          {/* Progress Bar */}
          {rideStatus !== 'completed' && (
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-[#3B82F6] h-2 rounded-full transition-all duration-1000"
                style={{
                  width: rideStatus === 'waiting' ? '10%' : `${((25 - estimatedTime) / 25) * 100}%`,
                }}
              />
            </div>
          )}

          {/* Route */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#3B82F6]" size={16} />
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm font-medium">Pickup</div>
                <div className="text-gray-900 font-semibold text-base">{rideData.pickup}</div>
              </div>
            </div>

            <div className="ml-4 border-l-2 border-gray-200 h-8" />

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#16A34A]" size={16} />
              </div>
              <div className="flex-1">
                <div className="text-gray-500 text-sm font-medium">Destination</div>
                <div className="text-gray-900 font-semibold text-base">{rideData.destination}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Driver & Co-Traveler Info */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Driver */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="text-gray-700 font-bold text-base mb-3">Driver</div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-lg">
                <span>{rideData.driver.photo}</span>
              </div>
              <div className="flex-1">
                <div className="text-gray-900 font-bold text-base">{rideData.driver.name}</div>
                <div className="text-gray-600 text-sm">
                  ★ {rideData.driver.rating} • {rideData.driver.vehicle}
                </div>
              </div>
              <button className="w-10 h-10 bg-[#16A34A] text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Phone size={20} />
              </button>
            </div>
            <div className="text-gray-600 bg-gray-50 px-3 py-2 rounded font-semibold text-base">
              {rideData.driver.plate}
            </div>
          </div>

          {/* Co-Traveler */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="text-gray-700 font-bold text-base mb-3">Co-Traveler</div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center font-bold text-lg">
                <span>{rideData.coTraveler.photo}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-bold text-base">{rideData.coTraveler.name}</span>
                  {rideData.coTraveler.verified && (
                    <span className="bg-[#16A34A] text-white px-2 py-0.5 rounded text-xs font-semibold">Verified</span>
                  )}
                </div>
                <div className="text-gray-600 text-sm">★ {rideData.coTraveler.rating}</div>
              </div>
              <button className="w-10 h-10 bg-[#3B82F6] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <User size={20} />
              </button>
            </div>
            <div className="text-gray-600 bg-gray-50 px-3 py-2 rounded text-sm font-medium">
              Same Flight • Same Gender
            </div>
          </div>
        </div>

        {/* Safety Features */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="text-gray-900 font-bold text-lg mb-4">Active Safety Features</div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-[#16A34A]" size={16} />
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-base">Route Monitoring</div>
                <div className="text-gray-600 text-sm">Real-time tracking active</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-[#16A34A]" size={16} />
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-base">24/7 Safety Team</div>
                <div className="text-gray-600 text-sm">Monitoring your journey</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-[#16A34A]" size={16} />
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-base">Emergency Response</div>
                <div className="text-gray-600 text-sm">&lt;10 sec response time</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                sharedWithContacts ? 'bg-green-100' : 'bg-gray-100'
              }`}>
                <CheckCircle className={sharedWithContacts ? 'text-[#16A34A]' : 'text-gray-400'} size={16} />
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-base">Location Sharing</div>
                <div className="text-gray-600 text-sm">
                  {sharedWithContacts ? 'Shared with contacts' : 'Not shared yet'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panic Button - Prominent Position */}
        <PanicButton />

        {/* Complete Ride Button */}
        {rideStatus === 'completed' && (
          <div className="mt-6">
            <button
              onClick={handleCompleteRide}
              className="w-full bg-[#16A34A] text-white py-4 rounded-lg hover:bg-green-700 transition-colors shadow-md font-bold text-lg"
            >
              Complete Ride & Rate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}