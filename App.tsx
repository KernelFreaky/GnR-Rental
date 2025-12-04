import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';
import FloatingFAB from './components/FloatingFAB';
import ContactModal from './components/ContactModal';
import { FeatureCard } from './components/ui/Card';
import { Button } from './components/ui/Button';
import { 
  HERO_SLIDES, 
  FEATURED_ROOMS, 
  FEATURED_TOURS, 
  MOTORBIKE_HIGHLIGHTS, 
  GALLERY_IMAGES,
  CONTACT_INFO 
} from './constants';
import { ArrowRight, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContact = () => setIsContactModalOpen(true);

  return (
    <div className="relative min-h-screen font-sans text-dark-900">
      <Header onContactClick={openContact} />
      
      {/* Hero Section */}
      <HeroSlider slides={HERO_SLIDES} />

      {/* Quick Actions / Categories Intro */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Comfortable Rooms', desc: 'AC & Garden Views', icon: '🛏️', link: '#rooms' },
            { title: 'Island Tours', desc: 'Falls, Beaches, Magic', icon: '🏝️', link: '#tours' },
            { title: 'Motorbike Rentals', desc: 'Explore at your pace', icon: '🛵', link: '#bikes' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer" onClick={() => document.querySelector(item.link)?.scrollIntoView({behavior: 'smooth'})}>
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-tropical-500">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Rooms */}
      <section id="rooms" className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-tropical-500">Our Rooms</h2>
              <p className="text-gray-600 mt-2">Relax in comfort after a day of adventure.</p>
            </div>
            <button 
              onClick={openContact}
              className="hidden md:flex items-center text-tropical-500 font-semibold hover:text-tropical-600"
            >
              Check Availability <ArrowRight size={18} className="ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_ROOMS.map(room => (
              <FeatureCard 
                key={room.id}
                image={room.imageUrl}
                title={room.title}
                description={room.description}
                price={room.price}
                tag={room.tag}
                ctaText="Book Now"
                onCtaClick={openContact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section id="tours" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tropical-500">Island Tours</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Let our locals guide you to the hidden gems of Siquijor. From the mystic healers to the crystal clear waterfalls.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_TOURS.map(tour => (
              <FeatureCard 
                key={tour.id}
                image={tour.imageUrl}
                title={tour.title}
                description={tour.description}
                price={tour.price}
                ctaText="Inquire Tour"
                onCtaClick={openContact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Motorbikes */}
      <section id="bikes" className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-tropical-500 mb-4">Motorbike Rentals</h2>
                <p className="text-lg text-gray-600 mb-6">The best way to see the island is on two wheels. Well-maintained bikes, helmets included.</p>
                <ul className="space-y-3 mb-8">
                  {['Automatic & Manual options', 'Helmets included', '24-hour rental periods', 'Gas station nearby'].map(item => (
                    <li key={item} className="flex items-center text-gray-700">
                      <CheckCircle className="text-sand-500 mr-2" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button size="lg" onClick={openContact}>Reserve a Bike</Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {MOTORBIKE_HIGHLIGHTS.slice(0, 2).map(bike => (
                   <div key={bike.id} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <img src={bike.imageUrl} alt={bike.title} className="w-full h-32 object-cover rounded-lg mb-3" />
                      <h4 className="font-bold text-dark-900">{bike.title}</h4>
                      <p className="text-sand-600 font-bold text-sm">{bike.price}</p>
                   </div>
                 ))}
                 <div className="sm:col-span-2 bg-tropical-500 p-6 rounded-xl text-white flex flex-col justify-center items-center text-center">
                    <h3 className="text-xl font-bold mb-2">Need a License?</h3>
                    <p className="text-sm opacity-90 mb-4">We can help you verify your requirements.</p>
                    <Button variant="secondary" size="sm" onClick={openContact}>Ask Us</Button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Gallery Strip */}
      {/* <section id="gallery" className="py-12 bg-dark-900 overflow-hidden">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white">Island Moments</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-6 px-4 no-scrollbar snap-x">
          {GALLERY_IMAGES.map((src, idx) => (
            <div key={idx} className="flex-none w-80 snap-center">
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-60 object-cover rounded-lg hover:opacity-90 transition-opacity" 
              />
            </div>
          ))}
        </div>
      </section> */}

      {/* About & Contact Grid */}
      <section id="contact" className="py-20 bg-gray-50">
         <div className="mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* About/Why Us */}
               <div>
                  <h2 className="text-3xl font-bold text-tropical-500 mb-6">Why Stay With Us?</h2>
                  <div className="prose text-gray-600 mb-8">
                    <p className="mb-4">Guest House Siquijor isn't just a place to sleep; it's your home base for adventure. Located centrally in San Juan, we are minutes away from the best sunsets and restaurants.</p>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                     <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                           <Phone size={24} />
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">Call or Text</p>
                           <p className="font-semibold">{CONTACT_INFO.phone}</p>
                        </div>
                     </div>
                     <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                           <Mail size={24} />
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">Email Us</p>
                           <p className="font-semibold">{CONTACT_INFO.email}</p>
                        </div>
                     </div>
                     <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <div className="bg-sand-100 p-3 rounded-full text-sand-600 mr-4">
                           <MapPin size={24} />
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">Find Us</p>
                           <p className="font-semibold">San Juan, Siquijor</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Map & Form */}
               <div className="bg-white p-2 rounded-xl shadow-lg h-[500px] overflow-hidden">
                  <iframe 
                    src={CONTACT_INFO.mapEmbedUrl} 
                    width="100%" 
                    height="100%" 
                    style={{border:0, borderRadius: '0.75rem'}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Guest House Location"
                  ></iframe>
               </div>
            </div>
         </div>
      </section>

      <Footer />
      <FloatingFAB />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
};

export default App;
