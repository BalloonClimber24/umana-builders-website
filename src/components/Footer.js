import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Umana Builders LLC Logo"
              width={150}
              height={60}
              className="h-14 w-auto mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-gray-400 text-sm mb-4">
              30 years of reliable home improvement and commercial renovation services across New Jersey.
            </p>
            <p className="text-sm text-gray-400">
              NJ HIC# 13VH10301500
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-umana-teal transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-umana-teal transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-umana-teal transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#ai-design" className="text-gray-400 hover:text-umana-teal transition-colors">
                  Dream It With AI
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-umana-teal transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 text-umana-teal flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:7326184087" className="text-gray-400 hover:text-umana-teal">
                  (732) 618-4087
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 text-umana-teal flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:umanacorp@live.com" className="text-gray-400 hover:text-umana-teal">
                  umanacorp@live.com
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 text-umana-teal flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  Serving Monmouth, Ocean, Bergen & Essex Counties
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Umana Builders LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
