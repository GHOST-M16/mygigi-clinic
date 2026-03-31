/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  Activity,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive oral exams, cleanings, and preventative care for all ages.',
    icon: <Stethoscope className="w-8 h-8 text-dental-blue" />,
  },
  {
    title: 'Orthodontics',
    description: 'Modern solutions for straighter smiles, including clear aligners and braces.',
    icon: <Activity className="w-8 h-8 text-dental-blue" />,
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments for a brighter, more confident smile.',
    icon: <Sparkles className="w-8 h-8 text-dental-blue" />,
  },
  {
    title: 'Emergency Care',
    description: 'Rapid response and gentle care for urgent dental issues and pain relief.',
    icon: <ShieldCheck className="w-8 h-8 text-dental-blue" />,
  },
];

const testimonials = [
  {
    name: 'Patricia Lee',
    role: 'Patient',
    content: 'The doctor examined carefully and patiently I had my teeth cleaned, filled and extracted today There was no pain at all. The nurse was very nice and polite. Recommended!',
    rating: 5,
  },
  {
    name: 'Frances Chang',
    role: 'Patient',
    content: 'So far good experience, that helps me a lot to reduce anxiety meeting dentist. Dr will explain procedure patiently and let us know the cost upfront. Fair price. Thanks for the great service. Pleasant environment too.',
    rating: 5,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/images/logo.jpg" 
              alt="mygigi logo" 
              className="h-12 w-auto" 
              referrerPolicy="no-referrer" 
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-dental-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/60127661153" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-mint-green hover:text-emerald-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="tel:+60127661153" 
              className="flex items-center gap-2 text-sm font-semibold text-dental-blue"
            >
              <Phone className="w-4 h-4" />
              <span>012-766 1153</span>
            </a>
            <button className="bg-dental-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sky-600 transition-all shadow-lg shadow-sky-100">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="block text-lg font-medium text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                  <a 
                    href="https://wa.me/60127661153" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-mint-green font-semibold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Chat</span>
                  </a>
                  <a href="tel:+60127661153" className="flex items-center gap-2 text-dental-blue font-semibold">
                    <Phone className="w-5 h-5" />
                    <span>012-766 1153</span>
                  </a>
                  <button className="w-full bg-dental-blue text-white py-3 rounded-xl font-semibold">
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-sky-50 to-white" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-sky-100 text-dental-blue text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  Welcome to mygigi
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                  Your Smile, Our <span className="text-dental-blue">Priority.</span>
                </h1>
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Experience gentle, professional dental care in a modern environment. We combine advanced technology with a personal touch to keep your smile healthy and bright.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-dental-blue text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-sky-600 transition-all shadow-xl shadow-sky-200 flex items-center justify-center gap-2 group">
                    Book Appointment
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    Our Services
                  </button>
                </div>
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`} 
                        alt="Patient" 
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="text-slate-500 font-medium">Trusted by 2,000+ happy patients</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] lg:aspect-square">
                  <img 
                    src="https://lh3.googleusercontent.com/p/AF1QipOrvtgXxYrdhH2SEiHzgJICSy2MHVbD_8HydDg=s1360-w1360-h1020-rw" 
                    alt="mygigi Dental Clinic" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-mint-green/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-dental-blue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-mint-green/10 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-mint-green" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">100% Safe</p>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Sterilized Care</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Solutions</h2>
              <p className="text-slate-600">From routine checkups to advanced cosmetic procedures, we offer a full range of services to keep your smile at its best.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl border border-slate-100 hover:border-dental-blue/20 hover:bg-sky-50/30 transition-all group"
                >
                  <div className="mb-6 p-3 bg-sky-50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-dental-blue text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/dentist-team/800/1000" 
                    alt="Our Dental Team" 
                    className="rounded-3xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-[240px] hidden sm:block">
                    <p className="text-4xl font-bold text-dental-blue mb-1">15+</p>
                    <p className="text-sm font-semibold text-slate-900 mb-2">Years of Excellence</p>
                    <p className="text-xs text-slate-500 leading-relaxed">Providing gentle care to our local community since 2009.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-dental-blue font-bold text-xs uppercase tracking-widest mb-4 block">About mygigi</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">A Mission to Provide Gentle, Local Care</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  At mygigi, we believe that dental visits shouldn't be stressful. Our clinic was founded on the principle of patient-first care, combining a calming environment with the latest dental technology.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Our team of experts is dedicated to continuous learning and implementing the most effective, least invasive treatments available today. We take the time to listen to your concerns and create personalized treatment plans that fit your life.
                </p>
                <ul className="space-y-4 mb-10">
                  {['State-of-the-art technology', 'Compassionate & gentle approach', 'Flexible scheduling options', 'Transparent pricing'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-900 font-medium">
                      <div className="w-5 h-5 bg-mint-green rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all">
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="reviews" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
              <p className="text-slate-600">Real stories from real patients who trust us with their smiles.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col"
                >
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={`https://picsum.photos/seed/${testimonial.name}/100/100`} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location Section */}
        <section id="contact" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">Get in Touch</h2>
                <p className="text-slate-400 mb-12 leading-relaxed">
                  Have a question or ready to book your appointment? Reach out to us using the form or contact details below. We're here to help!
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-dental-blue" />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Our Location</p>
                      <p className="text-slate-400 text-sm">
                        B-G-30, Ground Floor, Pusat Perdagangan BS,<br />
                        Jalan BS 14/1, Taman Bukit Serdang, Seri<br />
                        Kembangan, Malaysia, 43300
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Clock className="w-6 h-6 text-dental-blue" />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Clinic Hours</p>
                      <p className="text-slate-400 text-sm">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Phone className="w-6 h-6 text-dental-blue" />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Call Us</p>
                      <p className="text-slate-400 text-sm">012-766 1153</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Mail className="w-6 h-6 text-dental-blue" />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Email Us</p>
                      <p className="text-slate-400 text-sm">mygigidentalbs@gmail.com</p>
                    </div>
                  </div>
                </div>


              </div>

              <div className="bg-white rounded-3xl p-8 lg:p-12 text-slate-900">
                <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">First Name</label>
                      <input 
                        type="text" 
                        placeholder="John" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-dental-blue focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Doe" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-dental-blue focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="mygigidentalbs@gmail.com" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-dental-blue focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-dental-blue focus:ring-2 focus:ring-sky-100 outline-none transition-all appearance-none bg-white">
                      <option>General Dentistry</option>
                      <option>Orthodontics</option>
                      <option>Teeth Whitening</option>
                      <option>Emergency Care</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      rows={4} 
                      placeholder="How can we help you?" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-dental-blue focus:ring-2 focus:ring-sky-100 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-dental-blue text-white py-4 rounded-xl font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-100 mt-4">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="/images/logo.jpg" 
                  alt="mygigi logo" 
                  className="h-10 w-auto" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Providing modern, gentle dental care for the whole family. Your smile is our greatest reward.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-dental-blue hover:border-dental-blue transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/mygigidentalclinic" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-dental-blue hover:border-dental-blue transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-dental-blue hover:border-dental-blue transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-slate-500 hover:text-dental-blue transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Services</h4>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.title}>
                    <a href="#services" className="text-sm text-slate-500 hover:text-dental-blue transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            

          </div>
          
          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">
              © 2026 mygigi Dental Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="text-xs text-slate-400 hover:text-slate-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/60127661153" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
}
