import { Pill, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">HealthCare Pharmacy</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in health and wellness. Providing quality pharmaceutical care since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Our Team', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                    <span className="mr-2">→</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Prescription Refills', 'Home Delivery', 'Health Consultation', 'Vaccination Services', 'Medicare Assistance'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center">
                    <span className="mr-2">→</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <span>123 Health Street, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>info@healthcarepharmacy.com</span>
              </li>
            </ul>
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">Store Hours</p>
              <p className="text-gray-400 text-sm">Mon - Fri: 8:00 AM - 9:00 PM</p>
              <p className="text-gray-400 text-sm">Sat - Sun: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} HealthCare Pharmacy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
