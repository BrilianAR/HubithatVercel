import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import {ProgressiveReveal} from  '../../components/animations'



const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <ProgressiveReveal>
      <div className="flex flex-col px-4 lg:px-10 lg:flex-row justify-between items-center w-full max-w-7xl mx-auto h-[800px]">
        {/* Left Column - Contact Information */}
        <div className="w-full lg:max-w-lg">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl mb-1 font-['Kumbh_Sans']">Get In Touch</h1>
            <p className="text-lg mb-8 font-['Kumbh_Sans']">
              Contact us to learn more about HubiThat and partnerships.
            </p>
            
            {/* Email */}
            <div className="flex items-center gap-4 mb-3">
              <Mail size={16} />
              <p className="text-base font-['Kumbh_Sans']">info@hubithat.com</p>
            </div>
            
            {/* Phone */}
            <div className="flex items-center gap-4 mb-3">
              <Phone size={16} />
              <p className="text-base font-['Kumbh_Sans']">+1-555-123-4567</p>
            </div>
            
            {/* Address */}
            <div className="flex items-center gap-4">
              <MapPin size={16} />
              <p className="text-base font-['Kumbh_Sans']">123 Main Street, Suite 400, Anytown, CA 91234</p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="w-full lg:max-w-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-base font-['Kumbh_Sans']">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-base font-['Kumbh_Sans'] bg-white"
                required
              />
            </div>
            
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base font-['Kumbh_Sans']">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-base font-['Kumbh_Sans'] bg-white"
                required
              />
            </div>
            
            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-base font-['Kumbh_Sans']">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-base font-['Kumbh_Sans'] bg-white h-24"
                required
              />
            </div>
            
            {/* Terms Checkbox */}
            <div className="flex items-center gap-2 mt-2 mb-8">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4"
                required
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-700 font-['Kumbh_Sans']">
                I accept the terms
              </label>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[var(--button-color)] text-white hover:bg-[var(--bg-color)] hover:bg-opacity-80 font-semibold py-3 px-8 rounded-full w-fit font-['Kumbh_Sans']"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>

    </ProgressiveReveal>
  );
};

export default ContactPage;