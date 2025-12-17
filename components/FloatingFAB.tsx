import React, { useState } from 'react';
import { Plus, MessageCircle, Phone, MapPin, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const FloatingFAB: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="flex flex-col gap-3 items-end"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
          >
            <a 
              href={CONTACT_INFO.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg"
            >
              <span className="text-sm font-semibold">WhatsApp</span>
              <MessageCircle size={20} />
            </a>

            <a 
              href={CONTACT_INFO.messenger} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg"
            >
              <span className="text-sm font-semibold">Messenger</span>
              <Facebook size={20} />
            </a>
            
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 rounded-full bg-tropical-500 px-4 py-2 text-white shadow-lg"
            >
              <span className="text-sm font-semibold">Call</span>
              <Phone size={20} />
            </a>

            <a 
              href="#contact"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg"
            >
              <span className="text-sm font-semibold">Directions</span>
              <MapPin size={20} />
            </a>

            <a 
              href="#contact"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-blue-800 px-4 py-2 text-white shadow-lg"
            >
              <span className="text-sm font-semibold">Booking.com</span>
                <img src="/assets/booking.png" width={25}/>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-colors ${
          isOpen ? 'bg-red-500 rotate-45' : 'bg-sand-500'
        } text-white`}
        aria-label="Open contact menu"
      >
        <Plus size={32} className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
    </div>
  );
};

export default FloatingFAB;
