import { useState } from 'react';
import { Send, Building, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

// Contact Page Component
export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    investmentAmount: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    // For demo purposes, we'll just show a success message
    setIsSubmitted(true);
  };
  
  return (
    <div className="py-12 pt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-500">
            We're here to answer your questions and explore potential partnerships
          </p>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Building className="h-6 w-6 text-[var(--bg-color)]" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p className="font-medium text-gray-900">Corporate Headquarters</p>
                    <p>InvestNext Tower</p>
                    <p>123 Finance Street</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-[var(--bg-color)]" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-[var(--bg-color)]" />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p className="font-medium text-gray-900">Email</p>
                    <p>partnerships@investnext.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Global Offices</h3>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[var(--bg-color)]" />
                    </div>
                    <div className="ml-3 text-sm text-gray-500">
                      <p className="font-medium text-gray-900">London</p>
                      <p>30 St Mary Axe</p>
                      <p>London, EC3A 8BF</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[var(--bg-color)]" />
                    </div>
                    <div className="ml-3 text-sm text-gray-500">
                      <p className="font-medium text-gray-900">Singapore</p>
                      <p>One Raffles Place</p>
                      <p>Singapore, 048616</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[var(--bg-color)]" />
                    </div>
                    <div className="ml-3 text-sm text-gray-500">
                      <p className="font-medium text-gray-900">Dubai</p>
                      <p>Emirates Towers</p>
                      <p>Dubai, UAE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[var(--bg-color)]" />
                    </div>
                    <div className="ml-3 text-sm text-gray-500">
                      <p className="font-medium text-gray-900">Hong Kong</p>
                      <p>International Finance Centre</p>
                      <p>Hong Kong</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-lg text-gray-500">
                    Your message has been received. A member of our investment team will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Inquiry</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--bg-color)] focus:border-[var(--bg-color)]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--bg-color)] focus:border-[var(--bg-color)]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--bg-color)] focus:border-[var(--bg-color)]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700">
                        Potential Investment Amount
                      </label>
                      <select
                        id="investmentAmount"
                        name="investmentAmount"
                        value={formState.investmentAmount}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--bg-color)] focus:border-[var(--bg-color)]"
                      >
                        <option value="">Select an amount</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="1m-5m">$1,000,000 - $5,000,000</option>
                        <option value="5m+">$5,000,000+</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[var(--bg-color)] focus:border-[var(--bg-color)]"
                        placeholder="Tell us about your investment goals and interests..."
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[var(--bg-color)] hover:bg-[var(--button-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--bg-color)]"
                      >
                        Submit Inquiry
                        <Send className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">What is the minimum investment amount?</h3>
              <p className="text-gray-600">
                Our opportunities typically start at $250,000, though this varies by project. We work with partners to find the right investment level for their portfolio.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">What industries do you focus on?</h3>
              <p className="text-gray-600">
                We focus on technology, real estate, sustainable energy, and healthcare sectors, with selective opportunities in emerging markets.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">How involved can investors be in projects?</h3>
              <p className="text-gray-600">
                We offer various levels of involvement, from passive investment to strategic partnership with board positions, depending on expertise and interest.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-3">What is your due diligence process?</h3>
              <p className="text-gray-600">
                Our thorough process includes financial analysis, market research, leadership assessment, and regulatory compliance review before any investment decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}