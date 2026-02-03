import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gray-100">
                JD <span className="text-primary-500">Sols</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Modern websites and local visibility for businesses that want real leads.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-100 mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <FaPhone className="text-primary-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FaEnvelope className="text-primary-500" />
                <span>hello@jdsols.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} JD Sols. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
