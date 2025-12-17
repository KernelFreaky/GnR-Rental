import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { FeatureItem } from '../types';
import { CONTACT_INFO } from '../constants';
import { Button } from './ui/Button';

interface RoomDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: FeatureItem | null;
}

const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ isOpen, onClose, room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !room) return null;

  const images = room.images || [room.imageUrl];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleWhatsApp = () => {
    window.open(CONTACT_INFO.whatsapp, '_blank');
  };

  const handleMessenger = () => {
    window.open(CONTACT_INFO.messenger, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${CONTACT_INFO.phone}`;
  };

  const handleBooking = () => {
    window.open(CONTACT_INFO.bookingUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <X size={24} className="text-gray-800" />
        </button>

        {/* Image Slider Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100">
          <img 
            src={images[currentImageIndex]} 
            alt={`${room.title} view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="mb-auto">
            {room.tag && (
              <span className="inline-block px-3 py-1 bg-tropical-100 text-tropical-700 text-xs font-bold rounded-full mb-3">
                {room.tag}
              </span>
            )}
            <h2 className="text-3xl font-bold text-dark-900 mb-2">{room.title}</h2>
            <p className="text-xl text-tropical-600 font-bold mb-6">{room.price}</p>
            
            <div className="prose text-gray-600 mb-8">
              <p>{room.description}</p>
              <p className="mt-4 text-sm text-gray-500">
                Amenities included: Air conditioning, Free Wi-Fi, Fresh Linens, Towels, and Toiletries.
              </p>
            </div>
          </div>

          <div className="space-y-3 mt-6">
            <h3 className="font-bold text-gray-900 mb-2">Book this room via:</h3>
            <Button 
              onClick={handleBooking}
              className="w-full flex items-center justify-center gap-2 bg-[#0063BF] hover:bg-blue-800 text-white border-none"
            >
              <img src="/assets/booking.png" width={20}/>
              Booking.com
            </Button>
            
            <Button 
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white border-none"
            >
              <MessageCircle size={20} />
              WhatsApp
            </Button>
            
            <Button 
              onClick={handleMessenger}
              className="w-full flex items-center justify-center gap-2 bg-[#0084FF] hover:bg-[#0063BF] text-white border-none"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.5 5.43 3.89 7.17-.18 1.47-.95 3.19-1.04 3.38-.1.21.13.43.33.31 1.45-.87 3.2-1.63 4.38-1.93.8.14 1.63.22 2.44.22 5.52 0 10-4.03 10-9S17.52 2 12 2zm1.19 12.38l-2.65-2.83-5.18 2.83 5.7-6.05 2.68 2.82 5.15-2.82-5.7 6.05z"/>
              </svg>
              Messenger
            </Button>
            
            <Button 
              onClick={handleCall}
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call / Text {CONTACT_INFO.phone}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailModal;
