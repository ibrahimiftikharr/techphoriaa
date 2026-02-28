import { Link } from 'react-router';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">Techphoria</span>
            </div>
            <p className="text-gray-400 text-sm">
              A global technology service company delivering innovative solutions to clients worldwide.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>LMS Solutions</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>AI & Automation</li>
              <li>Cybersecurity</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={18} className="text-[#667eea] mt-0.5 flex-shrink-0" />
                <a href="mailto:Techphoria321@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  Techphoria321@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone size={18} className="text-[#667eea] mt-0.5 flex-shrink-0" />
                <a href="tel:+923127588997" className="text-gray-400 hover:text-white transition-colors">
                  +92 312 7588997
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-[#667eea] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Islamabad, Pakistan</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock size={18} className="text-[#667eea] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Mon - Fri, 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Techphoria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}