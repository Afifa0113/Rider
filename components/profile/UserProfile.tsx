import { useState } from 'react';
import { User, Shield, Bell, CreditCard, Star, Phone, Mail, MapPin, Edit2, Save } from 'lucide-react';

export function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 43210',
    gender: 'Female',
    profession: 'Software Engineer',
    company: 'Tech Corp India',
  });

  const [safetyPreferences, setSafetyPreferences] = useState({
    genderPreference: 'same',
    shareLocation: true,
    emergencyContacts: [
      { name: 'Rajesh Sharma (Father)', phone: '+91 98765 12345' },
      { name: 'Anjali Mehta (Friend)', phone: '+91 98765 67890' },
    ],
    autoShareTrips: true,
  });

  const rideHistory = [
    {
      id: 1,
      date: '2025-12-05',
      from: 'Kempegowda Airport',
      to: 'Koramangala',
      cost: 380,
      saved: 470,
      rating: 5,
      coTraveler: 'Rajesh K.',
    },
    {
      id: 2,
      date: '2025-11-28',
      from: 'HSR Layout',
      to: 'Kempegowda Airport',
      cost: 420,
      saved: 430,
      rating: 5,
      coTraveler: 'Anjali M.',
    },
    {
      id: 3,
      date: '2025-11-15',
      from: 'Kempegowda Airport',
      to: 'Indiranagar',
      cost: 350,
      saved: 500,
      rating: 4,
      coTraveler: 'Vikram S.',
    },
  ];

  const totalSavings = rideHistory.reduce((sum, ride) => sum + ride.saved, 0);
  const totalRides = rideHistory.length;
  const averageRating = 4.8;

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In real app, save to backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-gray-900 mb-8">My Profile</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="text-gray-900">Profile</div>
                <button
                  onClick={() => (isEditing ? handleSaveProfile() : setIsEditing(true))}
                  className="text-[#3B82F6] hover:text-blue-700 flex items-center gap-1"
                >
                  {isEditing ? (
                    <>
                      <Save size={16} />
                      <span>Save</span>
                    </>
                  ) : (
                    <>
                      <Edit2 size={16} />
                      <span>Edit</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mb-3">
                  <span className="text-gray-900">{userData.name.charAt(0)}</span>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    className="text-gray-900 text-center border border-gray-300 rounded px-2 py-1 mb-1"
                  />
                ) : (
                  <div className="text-gray-900 mb-1">{userData.name}</div>
                )}
                <div className="text-gray-600">{userData.profession}</div>
                <div className="flex items-center gap-1 text-yellow-500 mt-2">
                  <Star size={16} fill="currentColor" />
                  <span className="text-gray-900">{averageRating}</span>
                  <span className="text-gray-500">({totalRides} rides)</span>
                </div>
                <div className="bg-[#16A34A] text-white px-3 py-1 rounded-full mt-2">Verified</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-gray-400" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      className="flex-1 border border-gray-300 rounded px-2 py-1 text-gray-900"
                    />
                  ) : (
                    <span className="text-gray-600">{userData.email}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-gray-400" />
                  {isEditing ? (
                    <input
                      type="tel"
                      value={userData.phone}
                      onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                      className="flex-1 border border-gray-300 rounded px-2 py-1 text-gray-900"
                    />
                  ) : (
                    <span className="text-gray-600">{userData.phone}</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <User size={20} className="text-gray-400" />
                  <span className="text-gray-600">{userData.gender}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-gray-400" />
                  <span className="text-gray-600">{userData.company}</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-gray-900 mb-4">Your Impact</div>
              <div className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-[#16A34A] mb-1">₹{totalSavings.toLocaleString()}</div>
                  <div className="text-gray-600">Total Saved</div>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-[#3B82F6] mb-1">{totalRides}</div>
                  <div className="text-gray-600">Shared Rides</div>
                </div>

                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-purple-600 mb-1">0</div>
                  <div className="text-gray-600">Safety Incidents</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Settings & History */}
          <div className="lg:col-span-2 space-y-6">
            {/* Safety Preferences */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="text-[#3B82F6]" size={24} />
                <div className="text-gray-900">Safety Preferences</div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-3">Gender Preference for Co-Travelers</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['any', 'same', 'female', 'male'].map((pref) => (
                      <button
                        key={pref}
                        onClick={() => setSafetyPreferences({ ...safetyPreferences, genderPreference: pref })}
                        className={`px-4 py-2 rounded-lg border-2 transition-colors capitalize ${
                          safetyPreferences.genderPreference === pref
                            ? 'border-[#3B82F6] bg-blue-50 text-[#3B82F6]'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {pref === 'any' ? 'Any Gender' : pref === 'same' ? 'Same Gender' : `${pref} Only`}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-3">Emergency Contacts</label>
                  <div className="space-y-2">
                    {safetyPreferences.emergencyContacts.map((contact, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="text-gray-900">{contact.name}</div>
                          <div className="text-gray-600">{contact.phone}</div>
                        </div>
                        <Phone size={20} className="text-[#16A34A]" />
                      </div>
                    ))}
                    <button className="w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors">
                      + Add Emergency Contact
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-gray-900 mb-1">Auto-Share Rides with Emergency Contacts</div>
                    <div className="text-gray-600">Automatically share ride details via SMS</div>
                  </div>
                  <button
                    onClick={() =>
                      setSafetyPreferences({
                        ...safetyPreferences,
                        autoShareTrips: !safetyPreferences.autoShareTrips,
                      })
                    }
                    className={`w-12 h-6 rounded-full transition-colors ${
                      safetyPreferences.autoShareTrips ? 'bg-[#16A34A]' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        safetyPreferences.autoShareTrips ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <Bell className="text-[#3B82F6]" size={24} />
                <div className="text-gray-900">Notifications</div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Flight Status Updates', enabled: true },
                  { label: 'Ride Matches Available', enabled: true },
                  { label: 'Safety Alerts', enabled: true },
                  { label: 'Promotional Offers', enabled: false },
                ].map((notification, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">{notification.label}</span>
                    <button
                      className={`w-12 h-6 rounded-full transition-colors ${
                        notification.enabled ? 'bg-[#16A34A]' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          notification.enabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Ride History */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="text-[#3B82F6]" size={24} />
                <div className="text-gray-900">Ride History</div>
              </div>

              <div className="space-y-4">
                {rideHistory.map((ride) => (
                  <div key={ride.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-gray-900 mb-2">{ride.date}</div>
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <MapPin size={16} className="text-[#3B82F6]" />
                          <span>{ride.from}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <MapPin size={16} className="text-[#16A34A]" />
                          <span>{ride.to}</span>
                        </div>
                        <div className="text-gray-600">
                          Co-Traveler: <span className="text-gray-900">{ride.coTraveler}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-gray-900 mb-1">₹{ride.cost}</div>
                        <div className="text-[#16A34A] mb-2">Saved ₹{ride.saved}</div>
                        <div className="flex items-center gap-1 text-yellow-500 justify-end">
                          {[...Array(ride.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
