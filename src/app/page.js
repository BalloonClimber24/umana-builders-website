'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const services = [
    { title: 'Kitchen Remodeling', icon: '🔨', description: 'From concept to completion, we create kitchens that blend functionality with timeless design.' },
    { title: 'Bathroom Renovation', icon: '🚿', description: 'Transform your bathroom into a personal retreat with modern fixtures and quality materials.' },
    { title: 'Facade Repairs & Painting', icon: '🏢', description: 'Restore and enhance your property\'s exterior with professional craftsmanship.' },
    { title: 'Interior Remodels', icon: '🏠', description: 'Complete home transformations tailored to your lifestyle and budget.' },
    { title: 'Flooring Installation', icon: '📐', description: 'Expert installation of hardwood, tile, vinyl, and specialty flooring.' },
    { title: 'Commercial Renovation', icon: '🏗️', description: 'Reliable commercial services for property managers and business owners.' },
    { title: 'Windows & Doors', icon: '🚪', description: 'Energy-efficient installations that enhance comfort and value.' },
    { title: 'Fencing & Outdoor', icon: '🌳', description: 'Custom outdoor solutions built to last.' },
    { title: 'Garbage Enclosures', icon: '♻️', description: 'Code-compliant enclosures for commercial properties.' },
  ]

  const galleryImages = [
    { src: '/images/gallery/287A5041-D9A6-45C7-8116-1C7B2DB7AC76_1_105_c.jpeg', category: 'commercial', title: 'Commercial Office Reception' },
    { src: '/images/gallery/2A5E5FE0-1424-4A0B-9081-349B96D9042B_1_105_c.jpeg', category: 'outdoor', title: 'Outdoor Kitchen & Bar' },
    { src: '/images/gallery/4BADC19B-8221-4B10-B670-A70328DC66CD_1_105_c.jpeg', category: 'bathroom', title: 'Luxury Bathroom with Marble Tile' },
    { src: '/images/gallery/92FAC914-2753-4FF4-BCF8-664079B5F801_1_105_c.jpeg', category: 'exterior', title: 'Exterior Door Restoration' },
    { src: '/images/gallery/61A2D407-06B4-45FE-8FF3-B931F6733348_1_105_c.jpeg', category: 'outdoor', title: 'Covered Patio with Custom Lighting' },
    { src: '/images/gallery/B71EB8C8-0015-4324-AC50-B8C50872E8B2_1_105_c.jpeg', category: 'kitchen', title: 'Modern Kitchen Remodel' },
    { src: '/images/gallery/E20D0ED2-D956-4A27-85D2-3DEAB45A04AD_1_105_c.jpeg', category: 'bathroom', title: 'Custom Shower with Built-In Niches' },
    { src: '/images/gallery/F8B77052-58B8-4FE7-8466-9E3ADCBD486C_1_105_c.jpeg', category: 'bathroom', title: 'Designer Bathroom with Statement Tile' },
  ]

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Website Inquiry from ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}

Message:
${formData.message}
    `
    window.location.href = `mailto:umanacorp@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Navbar />

      {/* Hero Section - Redesigned with Logo */}
      <section className="relative bg-umana-navy pt-32 pb-20 md:pb-28 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-pattern-subtle"></div>
        </div>

        {/* Accent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-umana-500/10 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-umana-500/10 text-umana-500 px-4 py-2 rounded-full mb-6 border border-umana-500/20">
                <div className="w-2 h-2 bg-umana-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">30 Years of Excellence in New Jersey</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
                UMANA
                <span className="block text-yellow-500">BUILDERS</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
                Expert home improvement and commercial renovation services across Monmouth, Ocean, Bergen, and Essex Counties.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:7326184087" className="btn-primary inline-flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (732) 618-4087
                </a>
                <a href="#contact" className="btn-secondary">
                  Request Free Estimate
                </a>
              </div>

              <p className="text-sm text-slate-400">
                Licensed & Insured • NJ HIC# 13VH10301500
              </p>
            </div>

            {/* Right Side - Large Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-umana-500/20 rounded-full filter blur-3xl"></div>
                <img
                  src="/images/logo-transparent.png"
                  alt="Umana Builders Logo"
                  className="relative w-full max-w-lg lg:max-w-2xl drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Why Choose Umana Builders?
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Big contractors only want massive projects. Handymen disappear after the deposit clears.
              <strong className="text-slate-900"> We're the crew you can actually count on.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '⚡', title: 'Versatile Solutions', desc: 'From emergency repairs to major renovations - residential and commercial. We handle the jobs others ignore.' },
              { icon: '🛡️', title: 'Reliable Service', desc: '30 years in business. We show up, we deliver, and we do it right the first time.' },
              { icon: '🤝', title: 'Personal Touch', desc: 'Local contractor care with modern capabilities. Honest communication and peace of mind.' }
            ].map((item, i) => (
              <div key={i} className="card card-hover p-8 relative group">
                <div className="absolute top-0 left-0 w-1 h-0 bg-umana-500 group-hover:h-full transition-all duration-500 rounded-l-xl"></div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-subtle rounded-2xl p-10 md:p-12 border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-slate-900">Who We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Homeowners', desc: 'Dream kitchen, bathroom renovation, or home addition - we bring your vision to life.' },
                { title: 'Property Managers', desc: 'Your single point of contact for turnover repairs, maintenance, and emergency situations.' },
                { title: 'Commercial Landlords', desc: 'Code-compliant work, on time and on budget. Garbage enclosures, facades, and tenant improvements.' }
              ].map((item, i) => (
                <div key={i} className="accent-bar pl-6">
                  <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto mt-4">
              If it involves improving your property, chances are we do it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card card-hover p-6 group">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-umana-600 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle mx-auto mt-4">
              Quality craftsmanship across residential and commercial projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'kitchen', 'bathroom', 'outdoor', 'commercial', 'exterior'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-umana-500 text-white shadow-md'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-umana-500'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Design Section */}
      <section id="ai-design" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-umana-500/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-5 bg-pattern-subtle"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-umana-500/20 text-umana-500 px-4 py-2 rounded-full mb-6 border border-umana-500/30">
              <span className="text-sm font-medium">🤖 AI-Powered Design Visualization</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dream It With AI
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Turn your renovation ideas into reality with AI-powered visualization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Visualize Your Dream', desc: 'Use free AI tools like ChatGPT or DALL-E to create images of your ideal space.' },
                  { num: '2', title: 'Share With Us', desc: 'Send us your AI-generated images along with photos of your current space.' },
                  { num: '3', title: 'We Make It Real', desc: 'Get a detailed estimate and plan to bring your vision to life with quality craftsmanship.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-umana-500 text-white rounded-lg flex items-center justify-center font-bold">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Why This Works</h3>
              <ul className="space-y-4">
                {[
                  'Eliminate miscommunication - we see exactly what you want',
                  'Get excited about your project before breaking ground',
                  'Make better decisions about materials and finishes',
                  'Turn tire-kickers into committed, invested clients'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-umana-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#contact" className="inline-block bg-umana-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-umana-600 transition-colors">
                  Start Your Dream Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Get Your Free Estimate</h2>
            <p className="section-subtitle mx-auto mt-4">
              Ready to start your project? We respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="card p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-umana-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-umana-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-umana-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-umana-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                    <option value="Bathroom Renovation">Bathroom Renovation</option>
                    <option value="Facade Repairs">Facade Repairs & Painting</option>
                    <option value="Interior Remodel">Interior Remodel</option>
                    <option value="Flooring">Flooring</option>
                    <option value="Commercial">Commercial Renovation</option>
                    <option value="Windows/Doors">Windows & Doors</option>
                    <option value="Outdoor">Fencing & Outdoor</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-umana-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-umana-50 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-umana-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Phone</p>
                      <a href="tel:7326184087" className="text-umana-600 hover:text-umana-700 text-lg font-medium">
                        (732) 618-4087
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-umana-50 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-umana-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Email</p>
                      <a href="mailto:umanacorp@live.com" className="text-umana-600 hover:text-umana-700">
                        umanacorp@live.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-umana-50 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-umana-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Service Areas</p>
                      <p className="text-slate-600">Monmouth, Ocean, Bergen & Essex Counties</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8 bg-slate-900 border-slate-800">
                <h3 className="text-xl font-bold mb-4 text-white">Why Clients Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    '30 years of proven reliability',
                    'Licensed & fully insured',
                    'Free estimates & consultations',
                    'Residential & commercial expertise',
                    'Quality work, done right the first time'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-umana-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
