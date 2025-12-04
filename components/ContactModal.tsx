import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed left-1/2 top-1/2 z-[110] w-full max-w-md px-3 md:px-4"
            initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b bg-gray-50 px-4 py-3 md:px-6 md:py-4 sticky top-0 z-10">
                <h3 className="text-lg font-bold text-dark-900">Get in Touch</h3>
                <button
                  onClick={onClose}
                  className="rounded-full p-1 text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="grid gap-4 p-4 md:p-6">
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-green-100 bg-green-50 p-4 transition-all hover:bg-green-100 hover:shadow-md group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-sm group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">WhatsApp</h4>
                    <p className="text-sm text-gray-600">Fastest response</p>
                  </div>
                </a>

                <a
                  href={CONTACT_INFO.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4 transition-all hover:bg-blue-100 hover:shadow-md group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm group-hover:scale-110 transition-transform">
                    <Facebook size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Messenger</h4>
                    <p className="text-sm text-gray-600">Chat with us</p>
                  </div>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-4 rounded-xl border border-orange-100 bg-orange-50 p-4 transition-all hover:bg-orange-100 hover:shadow-md group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tropical-500 text-white shadow-sm group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call or Text</h4>
                    <p className="text-sm text-gray-600">{CONTACT_INFO.phone}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
