import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import nextgenxLogo from '@/assets/nextgenx-logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-text">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 md:col-span-2">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-2 flex-shrink-0">
                <img src={nextgenxLogo} alt="NextGenX AI Club Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-white font-bold text-xl tracking-wider">NextGenX AI Club</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p>Plot No.18, IILM University,</p>
              <p>Knowledge park II, Greater Noida,</p>
              <p>Uttar Pradesh 201306</p>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>letstalk@collegeclub.io</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 7368071436</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 text-center sm:text-left">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="footer-link text-sm">About us</a></li>
              <li><a href="#" className="footer-link text-sm">Contact us</a></li>
              <li><a href="#" className="footer-link text-sm">Join us</a></li>
              <li><a href="#" className="footer-link text-sm">Login</a></li>
            </ul>
          </div>

          {/* More To Explore */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 text-center sm:text-left">More To Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="footer-link text-sm">Common Application form</a></li>
              <li><a href="#" className="footer-link text-sm">Admissions</a></li>
              <li><a href="#" className="footer-link text-sm">Job Ready Courses</a></li>
              <li><a href="#" className="footer-link text-sm">Scholarships</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 text-center sm:text-left">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="footer-link text-sm">Terms</a></li>
              <li><a href="#" className="footer-link text-sm">Privacy</a></li>
              <li><a href="#" className="footer-link text-sm">Cookies</a></li>
              <li><a href="#" className="footer-link text-sm">Licenses</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold text-lg mb-6 text-center sm:text-left">Follow us on</h4>
            <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
              <a href="#" className="social-icon">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="social-icon">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="social-icon">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="social-icon">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="relative overflow-hidden bg-footer-purple py-8">
        <div className="text-center px-4">
          <h2 className="text-footer-accent font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider opacity-90 break-words">
            NextGenX AI Club
          </h2>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-footer-bg py-4 text-center border-t border-footer-icon-bg px-4">
        <p className="text-sm text-footer-text">© 2025 NextGenX AI Club All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;