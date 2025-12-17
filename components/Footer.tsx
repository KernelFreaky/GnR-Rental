import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white pt-12 pb-6">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <img src="/assets/logo.png" width={100}/>
               </div>
               <span className="text-xl font-bold tracking-tight">G'NR Guest House Siquijor</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Experience the best of Siquijor Island with our comfortable rooms, guided tours, and reliable motorbike rentals.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-sand-500 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{CONTACT_INFO.address}</li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Booking */}
          <div>
            <h4 className="text-lg font-semibold text-sand-500 mb-4">Follow & Book</h4>
             <div className="flex gap-4 mb-6">
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-tropical-500 transition-colors">
                 <Instagram size={20} />
               </a>
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-tropical-500 transition-colors">
                 <Facebook size={20} />
               </a>
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-tropical-500 transition-colors">
                 <img src="/assets/booking.png" width={25}/>
               </a>
             </div>
             <a 
               href={CONTACT_INFO.bookingUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block px-6 py-2 bg-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
             >
               Book on Booking.com
             </a>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Guest House Siquijor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
