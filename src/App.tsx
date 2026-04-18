import { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  Wrench, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Droplets,
  Disc,
  Search,
  Settings,
  Thermometer,
  Battery,
  Layers,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const BUSINESS_INFO = {
  name: "Jason Auto Repair",
  address: "634 W Girard Ave, Salt Lake City, UT 84116",
  phone: "(801) 839-6579",
  hours: "Open daily, 8:00 AM - 6:00 PM",
  rating: 4.5,
  reviewCount: 124,
  owner: "Miguel"
};

const SERVICES = [
  { name: "Oil Changes", icon: Droplets, description: "Full synthetic, blend, or conventional oil changes with new filters." },
  { name: "Brake Repair", icon: Disc, description: "Brake pad replacement, rotor resurfacing, and fluid flushes." },
  { name: "Engine Diagnostics", icon: Search, description: "Advanced computer diagnostics to pinpoint performance issues." },
  { name: "Transmission Repair", icon: Settings, description: "Expert service for manual and automatic transmissions." },
  { name: "AC & Heating Repair", icon: Thermometer, description: "Climate control diagnostics and refrigerant recharging." },
  { name: "Starter & Battery", icon: Battery, description: "Testing and replacement for batteries, starters, and alternators." },
  { name: "Suspension Work", icon: Layers, description: "Shocks, struts, and control arm replacement for a smooth ride." },
  { name: "Check Engine Light", icon: Activity, description: "Detailed scanning and repair of all sensor-related issues." },
];

const REVIEWS = [
  { text: "Very considerate people and the best service in town.", author: "Sarah M.", stars: 5 },
  { text: "They work fast and the prices are affordable. Highly recommend!", author: "David L.", stars: 5 },
  { text: "Fixed my heater in 30 minutes. Miguel knows his stuff.", author: "James T.", stars: 5 },
  { text: "Explained everything clearly and showed progress. Very honest.", author: "Linda K.", stars: 5 },
  { text: "Best mechanic I've ever had in SLC.", author: "Robert P.", stars: 5 },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-red selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-brand-red p-2 rounded transform group-hover:rotate-12 transition-transform">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              JASON <span className="text-brand-red">AUTO REPAIR</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="bg-brand-red hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-dark pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Services', 'About', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-display font-bold text-white border-b border-white/5 pb-4"
                >
                  {item}
                </button>
              ))}
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="bg-brand-red text-white py-4 rounded-xl text-xl font-bold flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Section 1: Hero */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/mechanic/1920/1080?grayscale" 
              alt="Garage background"
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1 rounded-full text-brand-red font-bold text-xs uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                </span>
                Same-Day Service Available
              </div>
              <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6">
                Fast, Honest <br /> 
                <span className="text-brand-red">Auto Repair</span> <br /> 
                You Can Trust
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                Family-owned shop delivering affordable, expert service in Salt Lake City. Led by Miguel, we treat every car like it's our own.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                  className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
                >
                  View Location
                  <MapPin className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
                {[
                  { label: "4.5 Stars", sub: "100+ Reviews", icon: Star },
                  { label: "Same-Day", sub: "Repairs", icon: Clock },
                  { label: "Affordable", sub: "Pricing", icon: ShieldCheck },
                  { label: "Honest", sub: "Diagnostics", icon: CheckCircle2 },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-brand-red">
                      <item.icon className="w-5 h-5" />
                      <span className="font-bold text-white text-lg">{item.label}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.sub}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Why Choose Us */}
        <section className="py-24 bg-brand-gray/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
                Why Drivers Choose Jason Auto Repair
              </h2>
              <div className="w-20 h-1.5 bg-brand-red mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Fast Turnaround", desc: "Most repairs completed same day or within 24 hours.", icon: Zap },
                { title: "Honest Pricing", desc: "No surprises. We explain everything before we start.", icon: ShieldCheck },
                { title: "Experienced", desc: "Led by Miguel, trusted by Salt Lake City locals for years.", icon: Wrench },
                { title: "Customer First", desc: "Friendly service and clear communication every step.", icon: Users },
              ].map((item, idx) => (
                <div key={idx} className="bg-brand-gray p-8 rounded-2xl border border-white/5 hover:border-brand-red/50 transition-all group">
                  <div className="bg-brand-red/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                    <item.icon className="w-7 h-7 text-brand-red group-hover:text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Services */}
        <section id="services" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
                <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
                  Our Auto Repair Services
                </h2>
              </div>
              <p className="text-gray-400 max-w-sm">From routine maintenance to complex engine work, we have the tools and expertise to handle it all.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-brand-gray/50 border border-white/5 p-6 rounded-2xl hover:bg-brand-gray transition-all"
                >
                  <service.icon className="w-8 h-8 text-brand-red mb-4" />
                  <h4 className="font-bold text-white text-lg mb-2">{service.name}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-3 text-white font-bold text-xl group"
              >
                Get Your Car Fixed Today 
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-red group-hover:pl-2 transition-all">
                  <Phone className="w-6 h-6" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: About */}
        <section id="about" className="py-24 bg-brand-gray/50 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/repair-shop/800/1000" 
                  alt="Miguel working"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-red p-8 rounded-2xl hidden lg:block">
                <span className="text-white font-display font-bold text-4xl">15+</span>
                <p className="text-white/80 text-sm font-medium">Years of Service</p>
              </div>
            </div>
            <div>
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-8">
                A Local Shop You Can Rely On
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 italic">
                "We don't just fix cars, we help families stay safe on the road. That's been my philosophy since day one." — Miguel
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Jason Auto Repair is a family-owned business built on trust, honesty, and hard work. Led by Miguel, our team has helped hundreds of SLC drivers get back on the road quickly and affordably. We believe in showing you exactly what your car needs, explaining the process, and delivering quality work without ever overcharging.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-white text-xl mb-1">Family Owned</h4>
                  <p className="text-sm text-gray-500">Local SLC roots and values.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1">Expert Led</h4>
                  <p className="text-sm text-gray-500">Decades of mechanical skill.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Reviews */}
        <section id="reviews" className="py-24 bg-brand-dark overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
                What Our Customers Say
              </h2>
              <div className="flex items-center gap-4 bg-brand-gray p-4 rounded-xl border border-white/5">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <div>
                  <p className="font-bold text-white">4.5 Rating</p>
                  <p className="text-xs text-gray-500">from 100+ Reviews</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REVIEWS.map((review, idx) => (
                <div key={idx} className="bg-brand-gray p-8 rounded-2xl border border-white/5 relative">
                  <Star className="w-10 h-10 text-brand-red/20 absolute top-6 right-6" />
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed font-medium">"{review.text}"</p>
                  <p className="text-brand-red font-bold text-sm">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Process */}
        <section className="py-24 bg-brand-red">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
                How It Works
              </h2>
              <p className="text-white/80 max-w-xl mx-auto font-medium">Simple, transparent, and direct. We make getting your car fixed as easy as possible.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: "Call or Visit", step: "01", desc: "Reach out to schedule or drop by for a quick check." },
                { title: "Quick Diagnosis", step: "02", desc: "We use state-of-the-art tools to find the real issue." },
                { title: "Approve the Work", step: "03", desc: "We provide an honest quote. No work starts without you." },
                { title: "Drive Away Fixed", step: "04", desc: "High-quality repair finished fast. Get back on the road." },
              ].map((step, idx) => (
                <div key={idx} className="relative group text-center lg:text-left">
                  <span className="font-display font-bold text-8xl text-black/10 absolute -top-8 -left-4 lg:left-0 transition-all group-hover:text-black/20">
                    {step.step}
                  </span>
                  <div className="relative z-10 pt-12">
                    <h3 className="font-bold text-2xl text-white mb-3">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-dark/95 z-0" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
              Need Your Car Fixed Today?
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
              Don't wait until a small problem becomes a major repair. Call now and get fast, affordable service from a trusted local mechanic.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="bg-brand-red hover:bg-red-700 text-white px-10 py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
              >
                Get Directions
                <MapPin className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 8: Contact */}
        <section id="contact" className="py-24 bg-brand-gray/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-bold text-4xl text-white mb-8 underline decoration-brand-red decoration-4 transition-all">
                Contact Us
              </h2>
              
              <div className="space-y-8 mb-12">
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                  className="flex items-start gap-5 group"
                >
                  <div className="bg-brand-gray p-4 rounded-xl text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-white text-2xl font-bold">{BUSINESS_INFO.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <div className="bg-brand-gray p-4 rounded-xl text-brand-red">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-white text-xl font-medium">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-brand-gray p-4 rounded-xl text-brand-red">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Hours</p>
                    <p className="text-white text-xl font-medium">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.3653118206967!2d-111.91136372342373!3d40.7766380336965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f4ffd936233d%3A0xe740f1a91d293f0b!2s634%20W%20Girard%20Ave%2C%20Salt%20Lake%20City%2C%20UT%2084116!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Jason Auto Repair Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Section 9: Footer */}
      <footer className="bg-brand-dark pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-red p-1.5 rounded">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
                  JASON <span className="text-brand-red">AUTO REPAIR</span>
                </span>
              </div>
              <p className="text-gray-500 italic max-w-xs mb-6">
                "Honest work. Fair prices. Done right the first time."
              </p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item === 'Home' ? 'home' : item.toLowerCase())}
                      className="text-gray-500 hover:text-brand-red transition-colors text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Service Area</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Serving Salt Lake City and surrounding areas including North Salt Lake, West Valley City, and Millcreek.
              </p>
              <div className="flex items-center gap-2 text-brand-red text-sm font-bold">
                <MapPin className="w-4 h-4" />
                Salt Lake City, UT
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-8 text-gray-600 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Floating Call Button for Mobile */}
        <div className="fixed bottom-6 right-6 md:hidden z-50">
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
            className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center shadow-2xl animate-bounce"
          >
            <Phone className="w-8 h-8 text-white" />
          </a>
        </div>
      </footer>
    </div>
  );
}
