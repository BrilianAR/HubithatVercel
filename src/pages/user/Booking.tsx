import { useState } from 'react';
import { ArrowLeft, Check, Clock, CreditCard, User, MapPin, Phone, Mail, Calendar, Home, Users, ChevronRight } from 'lucide-react';
import Gopay from '../../assets/goopay.png';
import OVO from '../../assets/ovo.png';
import Dana from '../../assets/dana.png';

// Define type for payment method
type PaymentMethod = 'creditCard' | 'bankTransfer' | 'eWallet';

// Main App Component
export default function BookingApp() {
  const [currentPage, setCurrentPage] = useState<'orderDetails' | 'payment' | 'paymentStatus' | 'complete'>('orderDetails');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('creditCard');
  // const [paymentStatus, setPaymentStatus] = useState<'pending' | 'completed'>('pending');

  const goToPayment = () => {
    setCurrentPage('payment');
  };

  const processPayment = () => {
    setCurrentPage('paymentStatus');
    // Simulate payment processing
    setTimeout(() => {
      // setPaymentStatus('completed');
      setCurrentPage('complete');
    }, 3000);
  };

  const goBack = () => {
    if (currentPage === 'payment') {
      setCurrentPage('orderDetails');
    } else if (currentPage === 'paymentStatus') {
      setCurrentPage('payment');
    }
  };

  const startNewBooking = () => {
    setCurrentPage('orderDetails');
    setPaymentMethod('creditCard');
    // setPaymentStatus('pending');
  };

  return (
    <div className="min-h-screen bg-white max-w-7xl lg:px-8 px-2 m-auto pt-30 flex flex-col">
      <header className="bg-white py-4 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="/" className="lg:text-lg text-[var(--bg-color)] font-semibold hover:text-[var(--button-color)] transition-colors">
            Home
          </a>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <h1 className="lg:text-lg font-bold text-gray-800">Hubithat Booking</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Page Navigation Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className={`flex flex-col items-center ${currentPage === 'orderDetails' ? 'text-[var(--bg-color)]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentPage === 'orderDetails' ? 'bg-[var(--bg-color)] text-white' : 'bg-gray-200'}`}>1</div>
              <span className="text-sm">Details</span>
            </div>
            <div className="flex-grow mx-2 border-t border-gray-300 self-start mt-4"></div>
            <div className={`flex flex-col items-center ${currentPage === 'payment' ? 'text-[var(--bg-color)]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentPage === 'payment' ? 'bg-[var(--bg-color)] text-white' : 'bg-gray-200'}`}>2</div>
              <span className="text-sm">Payment</span>
            </div>
            <div className="flex-grow mx-2 border-t border-gray-300 self-start mt-4"></div>
            <div className={`flex flex-col items-center ${currentPage === 'paymentStatus' || currentPage === 'complete' ? 'text-[var(--bg-color)]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${currentPage === 'paymentStatus' || currentPage === 'complete' ? 'bg-[var(--bg-color)] text-white' : 'bg-gray-200'}`}>3</div>
              <span className="text-sm">Complete</span>
            </div>
          </div>
        </div>

        {/* Page Content */}
        {currentPage === 'orderDetails' && (
          <OrderDetailsPage onContinue={goToPayment} />
        )}

        {currentPage === 'payment' && (
          <PaymentPage
            onBack={goBack}
            onPaymentMethodChange={setPaymentMethod}
            paymentMethod={paymentMethod}
            onProcessPayment={processPayment}
          />
        )}

        {currentPage === 'paymentStatus' && (
          <PaymentStatusPage />
        )}

        {currentPage === 'complete' && (
          <CompletePage onStartNewBooking={startNewBooking} />
        )}
      </main>
    </div>
  );
}

// Order Details Page
interface OrderDetailsPageProps {
  onContinue: () => void;
}

function OrderDetailsPage({ onContinue }: OrderDetailsPageProps) {
  return (
    <div className="bg-white rounded-lg py-6">
      <h2 className="text-2xl font-bold mb-6">Order Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <MapPin className="mr-2 text-[var(--bg-color)]" size={20} />
              Rooms Address
            </h3>
            <p className="text-gray-700">
              Hubithat Paskal, Bandung, Jalan Pasirkaliki No.76a, Pasirkaliki, Bandung City, West Java, Indonesia
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Phone className="mr-2 text-[var(--bg-color)]" size={20} />
              Phone
            </h3>
            <p className="text-gray-700">6285720016745</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Mail className="mr-2 text-[var(--bg-color)]" size={20} />
              Email
            </h3>
            <p className="text-gray-700">hubhotel.paskal@hubithat.com</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Calendar className="mr-2 text-[var(--bg-color)]" size={20} />
                Check-in
              </h3>
              <p className="text-gray-700">14 May 2025, <strong>14.00 WIB</strong></p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Calendar className="mr-2 text-[var(--bg-color)]" size={20} />
                Check-out
              </h3>
              <p className="text-gray-700">15 May 2025 <strong>12.00 WIB</strong></p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Clock className="mr-2 text-[var(--bg-color)]" size={20} />
              Stay Duration
            </h3>
            <p className="text-gray-700">1 Night</p>
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Home className="mr-2 text-[var(--bg-color)]" size={20} />
              Room Type
            </h3>
            <p className="text-gray-700">Habithat 1 </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Home className="mr-2 text-[var(--bg-color)]" size={20} />
              Total Room
            </h3>
            <p className="text-gray-700">1 Room</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Users className="mr-2 text-[var(--bg-color)]" size={20} />
              Room Capacity
            </h3>
            <p className="text-gray-700">2 Adult, 1 Children</p>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <User className="mr-2 text-[var(--bg-color)]" size={20} />
              Contact Details
            </h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="mb-2">
                <span className="font-medium text-gray-700">Name:</span>
                <span className="ml-2">Brilian Adiguna Riyanto</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <span className="ml-2">ag4863017@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">By proceeding, you agree to our Terms and Conditions</p>
          </div>
          <button
            onClick={onContinue}
            className="bg-[var(--bg-color)] text-white py-3 px-6 rounded-lg hover:bg-[var(--button-color)] transition font-medium"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

// Payment Page
interface PaymentPageProps {
  onBack: () => void;
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (method: PaymentMethod) => void;
  onProcessPayment: () => void;
}

function PaymentPage({ onBack, paymentMethod, onPaymentMethodChange, onProcessPayment }: PaymentPageProps) {
  return (
    <div className="bg-white rounded-lg p-2">
      <div className="flex items-center mb-6">
        <button onClick={onBack} className="mr-4">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h2 className="text-2xl font-bold">Payment</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>

            <div className="space-y-3">
              <div
                className={`border ${paymentMethod === 'creditCard' ? 'border-[var(--button-color)] bg-blue-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer flex items-center`}
                onClick={() => onPaymentMethodChange('creditCard')}
              >
                <div className={`w-5 h-5 rounded-full border ${paymentMethod === 'creditCard' ? 'border-[var(--button-color)]' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                  {paymentMethod === 'creditCard' && <div className="w-3 h-3 rounded-full bg-[var(--button-color)]"></div>}
                </div>
                <CreditCard className="mr-3 text-gray-600" size={20} />
                <span className="font-medium">Credit or Debit Card</span>
              </div>

              <div
                className={`border ${paymentMethod === 'bankTransfer' ? 'border-[var(--button-color)] bg-blue-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer flex items-center`}
                onClick={() => onPaymentMethodChange('bankTransfer')}
              >
                <div className={`w-5 h-5 rounded-full border ${paymentMethod === 'bankTransfer' ? 'border-[var(--button-color)]' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                  {paymentMethod === 'bankTransfer' && <div className="w-3 h-3 rounded-full bg-[var(--button-color)]"></div>}
                </div>
                <svg className="mr-3 text-gray-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
                <span className="font-medium">Bank Transfer</span>
              </div>

              <div
                className={`border ${paymentMethod === 'eWallet' ? 'border-[var(--button-color)] bg-blue-50' : 'border-gray-200'} rounded-lg p-4 cursor-pointer flex items-center`}
                onClick={() => onPaymentMethodChange('eWallet')}
              >
                <div className={`w-5 h-5 rounded-full border ${paymentMethod === 'eWallet' ? 'border-[var(--button-color)]' : 'border-gray-300'} flex items-center justify-center mr-3`}>
                  {paymentMethod === 'eWallet' && <div className="w-3 h-3 rounded-full bg-[var(--button-color)]"></div>}
                </div>
                <svg className="mr-3 text-gray-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <span className="font-medium">E-Wallet</span>
              </div>
            </div>
          </div>

          {paymentMethod === 'creditCard' && (
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-4">Enter Card Details</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--button-color)] focus:border-[var(--button-color)]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--button-color)] focus:border-[var(--button-color)]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input type="text" placeholder="123" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--button-color)] focus:border-[var(--button-color)]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Holder Name</label>
                  <input type="text" placeholder="Name as appears on card" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--button-color)] focus:border-[var(--button-color)]" />
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'bankTransfer' && (
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-4">Bank Transfer Details</h4>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="mb-4">Please transfer the total amount to the following bank account:</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bank:</span>
                    <span className="font-medium">BCA (Bank Central Asia)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-medium">PT Hubithat</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Number:</span>
                    <span className="font-medium">1234567890</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {paymentMethod === 'eWallet' && (
            <div className="mt-6">
              <h4 className="text-md font-semibold mb-4">Choose E-Wallet</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:border-[var(--button-color)]">
                  <img src={Gopay} alt="gopay" className="w-34 m-auto mb-2" />
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:border-[var(--button-color)]">
                  <img src={OVO} alt="ovo" className="w-30 m-auto mb-2 mt-4" />
                </div>
                <div className="border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:border-[var(--button-color)]">
                  <img src={Dana} alt="dana" className="w-28 m-auto mb-2 mt-8" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="py-6 lg:py-0 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Habithat 1 (1 Night)</span>
                <span>IDR 500,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Service Fee</span>
                <span>IDR 25,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span>IDR 52,500</span>
              </div>
              <div className="pt-3 border-t border-gray-200 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-[var(--bg-color)]">IDR 577,500</span>
              </div>
            </div>

            <button
              onClick={onProcessPayment}
              className="w-full bg-[var(--bg-color)] text-white py-3 px-6 rounded-lg hover:bg-[var(--button-color)] transition font-medium"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Payment Status Page
function PaymentStatusPage() {
  return (
    <div className="bg-white rounded-lg p-6 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[var(--button-color)]">
          <Clock className="text-white" size={28} />
        </div>

        <h2 className="text-2xl font-bold mb-2">Processing Your Payment</h2>
        <p className="text-gray-600 mb-8">Please wait while we process your payment. This may take a few moments.</p>

        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
          <div className="absolute top-0 left-0 h-full bg-[var(--bg-color)] w-1/2 animate-pulse"></div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[var(--button-second)] animate-pulse mr-1"></div>
          <div className="w-3 h-3 rounded-full bg-[var(--button-second)] animate-pulse mr-1"></div>
          <div className="w-3 h-3 rounded-full bg-[var(--button-second)] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

// Complete Page
interface CompletePageProps {
  onStartNewBooking: () => void;
}

function CompletePage({ onStartNewBooking }: CompletePageProps) {
  return (
    <div className="bg-white rounded-lg p-6 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <Check className="text-green-600" size={28} />
        </div>

        <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-8">Your booking has been successfully confirmed. A confirmation email has been sent to ag4863017@gmail.com</p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="font-semibold mb-4 text-left">Booking Details</h3>

          <div className="text-left space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Booking ID</span>
              <span className="font-medium">hub-25051401</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Room Type</span>
              <span className="font-medium">Habithat 1 </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Check-in</span>
              <span className="font-medium">14 May 2025, 14.00 WIB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Check-out</span>
              <span className="font-medium">15 May 2025, 12.00 WIB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Amount</span>
              <span className="font-medium">IDR 577,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium">Credit Card</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            className="bg-white border border-[var(--bg-color)] text-[var(--bg-color)] py-3 px-6 rounded-lg hover:bg-[var(--bg-color)] hover:text-white transition font-medium"
          >
            Download Receipt
          </button>
          <button
            onClick={onStartNewBooking}
            className="bg-[var(--bg-color)] text-white py-3 px-6 rounded-lg hover:bg-[var(--button-color)] transition font-medium"
          >
            Start New Booking
          </button>
        </div>
      </div>
    </div>
  );
}