import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import { Button } from './ui/Button';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 py-2 shadow-md backdrop-blur-md text-dark-900" 
            : "bg-transparent py-4 text-white"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
              <img src="/assets/logo.png" width={100}/>
             <span className={`text-lg font-bold tracking-tight ${isScrolled ? 'text-dark-900' : 'text-white'}`}>
               G'NR Guest House Siquijor
             </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sand-500 ${
                  isScrolled ? "text-dark-900" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button 
              size="sm" 
              variant={isScrolled ? 'primary' : 'secondary'} 
              className="gap-2"
              onClick={onContactClick}
            >
              <MessageCircle size={16} />
              Contact Us
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} className={isScrolled ? "text-dark-900" : "text-white"} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Side Slide-in) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Drawer Content */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 z-[70] w-3/4 max-w-sm bg-white p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <span className="text-xl font-bold text-tropical-500">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-gray-800 hover:text-tropical-500"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Button 
                  className="w-full gap-2" 
                  variant="primary"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                >
                  <MessageCircle size={18} />
                  Contact Us
                </Button>
                
                <a href={`tel:${CONTACT_INFO.phone}`} className="w-full">
                  <Button className="w-full gap-2" variant="outline">
                    <Phone size={18} />
                    Call Directly
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
