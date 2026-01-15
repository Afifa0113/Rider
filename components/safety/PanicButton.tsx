import { useState } from 'react';
import { AlertTriangle, Phone, X } from 'lucide-react';

export function PanicButton() {
  const [panicActivated, setPanicActivated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handlePanicPress = () => {
    setShowConfirmation(true);
  };

  const handleConfirmPanic = () => {
    setShowConfirmation(false);
    setPanicActivated(true);

    // Simulate emergency response actions
    let count = 10;
    setCountdown(count);

    const interval = setInterval(() => {
      count--;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        setCountdown(null);
      }
    }, 1000);

    // In a real app, this would:
    // 1. Send GPS coordinates to emergency contacts
    // 2. Alert local police
    // 3. Notify 24/7 safety team
    // 4. Trigger IoT warning light on vehicle
    // 5. Start recording audio/video
    // 6. Send SMS/WhatsApp to emergency contacts
  };

  const handleCancelPanic = () => {
    setShowConfirmation(false);
  };

  const handleDeactivatePanic = () => {
    setPanicActivated(false);
    setCountdown(null);
  };

  return (
    <>
      {/* Main Panic Button */}
      {!panicActivated && (
        <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-red-200">
          <div className="text-center">
            <div className="text-gray-900 mb-2">Emergency Panic Button</div>
            <p className="text-gray-600 mb-6">
              Press if you feel unsafe. Instant alerts sent to police, emergency contacts, and safety team.
            </p>
            <button
              onClick={handlePanicPress}
              className="w-14 h-14 bg-[#DC2626] text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-all hover:scale-110 mx-auto shadow-lg"
              style={{ width: '56px', height: '56px' }}
            >
              <AlertTriangle size={28} />
            </button>
            <p className="text-gray-500 mt-4">Tap to activate emergency alert</p>
          </div>
        </div>
      )}

      {/* Panic Activated State */}
      {panicActivated && (
        <div className="bg-[#DC2626] text-white rounded-xl shadow-lg p-6 animate-pulse">
          <div className="text-center">
            <AlertTriangle size={48} className="mx-auto mb-4" />
            <div className="mb-2">EMERGENCY ALERT ACTIVATED</div>
            <p className="text-red-100 mb-6">
              {countdown !== null
                ? `Emergency services notified in ${countdown} seconds...`
                : 'Emergency response team notified'}
            </p>

            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <div className="space-y-2 text-red-100">
                <div className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span>Police alerted with GPS location</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span>Emergency contacts notified via SMS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span>24/7 Safety team monitoring live</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span>Vehicle warning light activated</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span>Audio recording started</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <button className="bg-white text-[#DC2626] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Phone size={20} />
                Call 100 (Police)
              </button>
              <button
                onClick={handleDeactivatePanic}
                className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
              >
                I'm Safe Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-900">Confirm Emergency Alert</div>
              <button
                onClick={handleCancelPanic}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 mb-4">
                This will immediately alert:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626]">•</span>
                  <span>Local police with your GPS location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626]">•</span>
                  <span>Your emergency contacts via SMS and call</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626]">•</span>
                  <span>24/7 SafeRide safety team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC2626]">•</span>
                  <span>Activate vehicle warning light</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCancelPanic}
                className="flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPanic}
                className="flex-1 bg-[#DC2626] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Activate Emergency
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
