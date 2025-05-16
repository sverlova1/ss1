import React from 'react';
import { Link } from './Navigation';
import { Smartphone, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-white flex items-center mb-4">
              <Smartphone className="mr-2" size={24} />
              <span>¿„ÂÌÚÒÚ‚Ó IT ”ÒÎÛ„</span>
            </Link>
            <p className="mb-4">
              Expert repair services for smartphones, laptops, and electronic peripherals. 
              Quality parts and skilled technicians for all your device repairs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/phones" className="hover:text-white transition-colors">
                  Smartphone Repair
                </Link>
              </li>
              <li>
                <Link href="/services/laptops" className="hover:text-white transition-colors">
                  Laptop Repair
                </Link>
              </li>
              <li>
                <Link href="/services/tablets" className="hover:text-white transition-colors">
                  Tablet Repair
                </Link>
              </li>
              <li>
                <Link href="/services/audio" className="hover:text-white transition-colors">
                  Audio Device Repair
                </Link>
              </li>
              <li>
                <Link href="/services/diagnostics" className="hover:text-white transition-colors">
                  Device Diagnostics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-white transition-colors">
                  Warranty Info
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="hover:text-white transition-colors">
                  Repair Tracking
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for tech tips, repair guides, and exclusive offers.
            </p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                <Mail size={20} />
              </button>
            </form>
            <p className="text-sm">
              By subscribing, you agree to our <Link href="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} –ê–≥–µ–Ω—Ç—Å—Ç–≤–æ IT –£—Å–ª—É–≥. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;