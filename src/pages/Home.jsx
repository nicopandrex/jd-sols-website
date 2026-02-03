import { useState, useRef, useEffect } from 'react';
import { FaBullseye, FaSearch, FaChartLine, FaTools, FaMapMarkerAlt, FaMobileAlt, FaTachometerAlt, FaEyeSlash, FaQuestionCircle, FaChevronDown } from 'react-icons/fa';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import FAQItem from '../components/FAQItem';
import SEO from '../components/SEO';

export default function Home() {
  const [openProblem, setOpenProblem] = useState(null);
  const [openService, setOpenService] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialScrollRef = useRef(null);
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      business: 'Mitchell\'s Auto Repair',
      rating: 5,
      text: 'Within three months of launching our new site, our phone calls doubled. We can actually track where leads come from now. Worth every penny.'
    },
    {
      name: 'David Chen',
      business: 'Chen Family Dental',
      rating: 5,
      text: 'JD Sols transformed our online presence. The booking form alone brought us 15+ new patients in the first month. Mobile-friendly design made all the difference.'
    },
    {
      name: 'Maria Rodriguez',
      business: 'Rodriguez Landscaping',
      rating: 5,
      text: 'Our old website was embarrassing. Now we get compliments on it regularly, and the quote requests keep coming in. Great investment for our business.'
    },
    {
      name: 'James Thompson',
      business: 'Thompson Plumbing',
      rating: 5,
      text: 'The team set up call tracking so I know exactly which ads work. Game changer for our marketing budget. Plus the site loads lightning fast on phones.'
    },
  ];

  const services = [
    {
      icon: <FaBullseye />,
      title: 'Modern Mobile-Optimized Websites',
      description: 'Your customers are on their phones. We build fast, mobile-first websites that work flawlessly on every device and convert visitors into leads.',
      outcomes: [
        'Lightning-fast load times',
        'Mobile-responsive design',
        'Easy-to-update content',
        'Built for conversions'
      ]
    },
    {
      icon: <FaSearch />,
      title: 'Local SEO Foundation',
      description: 'Get found on Google when people in your area search for what you offer. We handle the technical basics so you show up where it matters.',
      outcomes: [
        'Google Business Profile optimization',
        'Local keyword targeting',
        'On-page SEO setup',
        'Schema markup for local search'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Lead Tracking & Analytics',
      description: 'Know exactly where your leads come from. Track form submissions, phone calls, direction requests, and more in one simple dashboard.',
      outcomes: [
        'Form submission tracking',
        'Call tracking integration',
        'Google Analytics setup',
        'Monthly performance reports'
      ]
    },
    {
      icon: <FaTools />,
      title: 'Monthly Maintenance',
      description: 'Your website stays fast, secure, and up-to-date without you lifting a finger. Includes updates, backups, and small content changes.',
      outcomes: [
        'Security updates & monitoring',
        'Weekly backups',
        'Performance optimization',
        'Up to 2 hours of edits/month'
      ]
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Strategy Call',
      description: 'We discuss your business goals, target customers, and competitive landscape. Quick audit of your current online presence.'
    },
    {
      number: '02',
      title: 'Plan & Quote',
      description: 'You receive a clear plan with timeline and transparent pricing. No hidden fees, no surprises.'
    },
    {
      number: '03',
      title: 'Design & Build',
      description: 'We create your site with regular check-ins. You see progress and provide feedback throughout.'
    },
    {
      number: '04',
      title: 'Launch & Track',
      description: 'Site goes live with all tracking in place. You immediately start seeing where your leads come from.'
    },
    {
      number: '05',
      title: 'Optimize & Grow',
      description: 'Monthly reports show what\'s working. We continuously improve based on real data.'
    },
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most sites are live within 3-4 weeks from kickoff. Complex projects with custom features may take 6-8 weeks. We provide a detailed timeline during your strategy call.'
    },
    {
      question: 'What does a website cost?',
      answer: 'Projects typically range from $1,200 to $5,000+ depending on complexity and features. Our Starter package begins at $1,200 for a 5-page site. During your free strategy call, we\'ll provide an exact quote based on your specific needs.'
    },
    {
      question: 'What\'s included in monthly maintenance?',
      answer: 'Security updates, weekly backups, performance monitoring, uptime monitoring, plugin/theme updates, and up to 2 hours of content edits or small changes per month. It\'s peace of mind that your site stays fast and secure.'
    },
    {
      question: 'How quickly will SEO show results?',
      answer: 'Local SEO is a marathon, not a sprint. You\'ll typically see initial movement in 2-3 months, with more significant results at 6+ months. We focus on foundational work that builds over time rather than shortcuts that get penalized.'
    },
    {
      question: 'Do I need to know anything technical?',
      answer: 'Not at all. We handle everything technical and explain things in plain English. You focus on running your business; we handle making sure your site works perfectly.'
    },
    {
      question: 'Can I update the website myself?',
      answer: 'Absolutely. We build on user-friendly platforms and provide training. That said, most clients prefer our monthly maintenance plan so they don\'t have to worry about it.'
    },
    {
      question: 'How does lead tracking work?',
      answer: 'We set up tracking for all lead sources: contact forms, phone calls, chat messages, direction requests, etc. You get a simple dashboard showing which pages drive leads and where traffic comes from. It takes the guesswork out of your marketing.'
    },
    {
      question: 'What do you need from me to get started?',
      answer: 'Your business info (logo, photos, services, pricing if you want it displayed), access to your domain/hosting (or we can set it up), and about 2-3 hours of your time spread across the project for feedback and content review.'
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Home - Generate Real Leads for Your Local Business"
        description="JD Sols builds modern, mobile-optimized websites that generate real leads for local businesses. Free strategy call. Fast turnaround. Proven results."
      />
      
      <div className="pt-12 lg:pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-500/5" />
          <div className="section-container relative">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block px-4 py-2 bg-dark-card border border-primary-500/30 text-primary-500 text-sm font-medium rounded-full backdrop-blur-sm">
                  Local Business Focused
                </span>
                <span className="inline-block px-4 py-2 bg-dark-card border border-primary-500/30 text-primary-500 text-sm font-medium rounded-full backdrop-blur-sm">
                  Mobile-First Design
                </span>
                <span className="inline-block px-4 py-2 bg-dark-card border border-primary-500/30 text-primary-500 text-sm font-medium rounded-full backdrop-blur-sm">
                  2 Week Turnaround
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-100 mb-6 leading-tight">
                Generate Real Leads with a Website Built for{' '}
                <span className="text-primary-500">Local Business</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Stop losing customers to slow, outdated websites. Get a modern, mobile-optimized site 
                that actually converts visitors into calls and form submissions—plus the tracking to prove it.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button to="/contact" variant="cta" size="lg">
                  Get Your Free Website Audit
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => scrollToSection('services')}
                >
                  See What We Offer
                </Button>
              </div>
              
              <div className="bg-dark-card border-l-4 border-primary-500 rounded-r-lg p-6">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-gray-100">Strategy call includes:</strong> Quick audit of your current site, 
                  list of opportunities we see, suggested plan with timeline, and honest answers to your questions. 
                  Zero pressure. If it's not a fit, we'll tell you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Strip */}
        <section className="py-12 lg:py-16 border-y border-dark-border overflow-hidden">
          <div className="section-container">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-2">
                Trusted by Local Businesses
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-100">
                Real Results from Real Businesses
              </h2>
            </div>
            
            {/* Mobile: Manual scroll carousel */}
            <div className="lg:hidden">
              <div 
                ref={testimonialScrollRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 -mx-4"
                onScroll={(e) => {
                  const scrollLeft = e.target.scrollLeft;
                  const width = e.target.offsetWidth;
                  const index = Math.round(scrollLeft / width);
                  setActiveTestimonial(index);
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full snap-center">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
              
              {/* Scroll indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const container = testimonialScrollRef.current;
                      if (container) {
                        container.scrollTo({
                          left: container.offsetWidth * index,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === index 
                        ? 'w-8 bg-primary-500' 
                        : 'w-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Desktop: Auto-scroll carousel */}
            <div className="hidden lg:block relative">
              <div className="flex gap-6 animate-scroll">
                {/* First set of testimonials */}
                {testimonials.map((testimonial, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-[450px]">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {testimonials.map((testimonial, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-[450px]">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why You Need a New Website */}
        <section className="py-16 lg:py-24 bg-red-950/10 border-y border-red-900/20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-6 text-center">
                Your Website Is Costing You Customers
              </h2>
              
              <p className="text-lg text-gray-300 mb-10 text-center">
                Here's what happens when your site isn't up to par:
              </p>
              
              <div className="space-y-4 mb-10">
                {/* Mobile: Dropdown version */}
                <div className="lg:hidden space-y-3">
                  {[
                    { icon: FaMobileAlt, title: 'Terrible on Mobile', text: "Over 70% of local searches happen on phones. If your site doesn't work perfectly on mobile, you're invisible to most potential customers." },
                    { icon: FaTachometerAlt, title: 'Slow Loading = Lost Sales', text: "Customers leave if your site takes more than 3 seconds to load. Every second of delay costs you real money in lost conversions." },
                    { icon: FaEyeSlash, title: 'Invisible on Google', text: "Poor SEO means you don't show up when people search for services in your area. Your competitors with better sites are taking those customers." },
                    { icon: FaQuestionCircle, title: "No Idea What's Working", text: "Without proper tracking, you're throwing money at marketing with no clue if it's working. You can't improve what you don't measure." }
                  ].map((problem, index) => (
                    <div key={index} className="bg-red-950/20 border-2 border-red-900/40 rounded-xl border-l-4 border-l-red-500 overflow-hidden shadow-lg shadow-red-900/20">
                      <button
                        onClick={() => setOpenProblem(openProblem === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <div className="flex items-center gap-3">
                          <problem.icon className="text-red-400 text-xl flex-shrink-0" />
                          <h3 className="font-bold text-gray-100">{problem.title}</h3>
                        </div>
                        <FaChevronDown className={`text-red-400 transition-transform ${openProblem === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openProblem === index && (
                        <div className="px-4 pb-4">
                          <p className="text-gray-400 text-sm">{problem.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Desktop: Full display */}
                <div className="hidden lg:block space-y-4">
                  <div className="bg-red-950/20 border-2 border-red-900/40 rounded-xl p-6 border-l-4 border-l-red-500 hover:border-red-500 hover:bg-red-950/30 transition-all shadow-lg shadow-red-900/20">
                    <div className="flex items-start gap-3">
                      <FaMobileAlt className="text-red-400 text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-100 mb-2">Terrible on Mobile</h3>
                        <p className="text-gray-400">
                          Over 70% of local searches happen on phones. If your site doesn't work perfectly on mobile, 
                          you're invisible to most potential customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-950/20 border-2 border-red-900/40 rounded-xl p-6 border-l-4 border-l-red-500 hover:border-red-500 hover:bg-red-950/30 transition-all shadow-lg shadow-red-900/20">
                    <div className="flex items-start gap-3">
                      <FaTachometerAlt className="text-red-400 text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-100 mb-2">Slow Loading = Lost Sales</h3>
                        <p className="text-gray-400">
                          Customers leave if your site takes more than 3 seconds to load. Every second of delay 
                          costs you real money in lost conversions.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-950/20 border-2 border-red-900/40 rounded-xl p-6 border-l-4 border-l-red-500 hover:border-red-500 hover:bg-red-950/30 transition-all shadow-lg shadow-red-900/20">
                    <div className="flex items-start gap-3">
                      <FaEyeSlash className="text-red-400 text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-100 mb-2">Invisible on Google</h3>
                        <p className="text-gray-400">
                          Poor SEO means you don't show up when people search for services in your area. Your 
                          competitors with better sites are taking those customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-950/20 border-2 border-red-900/40 rounded-xl p-6 border-l-4 border-l-red-500 hover:border-red-500 hover:bg-red-950/30 transition-all shadow-lg shadow-red-900/20">
                    <div className="flex items-start gap-3">
                      <FaQuestionCircle className="text-red-400 text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-100 mb-2">No Idea What's Working</h3>
                        <p className="text-gray-400">
                          Without proper tracking, you're throwing money at marketing with no clue if it's working. 
                          You can't improve what you don't measure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button to="/contact" variant="cta" size="lg">
                  Start Getting More Leads Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-16 lg:py-24 border-t border-dark-border">
          <div className="section-container">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-2">
                What We Do
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 mb-6">
                Everything You Need to Generate Leads Online
              </h2>
              <p className="text-lg text-gray-300">
                No fluff. No unnecessary add-ons. Just the core services that drive real results for local businesses.
              </p>
            </div>
            
            {/* Mobile: Accordion version */}
            <div className="md:hidden space-y-3 max-w-3xl mx-auto mb-8">
              {services.map((service, index) => (
                <div key={index} className="bg-dark-card border-2 border-dark-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenService(openService === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-dark-hover transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl text-primary-500">{service.icon}</div>
                      <h3 className="font-bold text-gray-100 text-lg">{service.title}</h3>
                    </div>
                    <FaChevronDown className={`text-primary-500 transition-transform flex-shrink-0 ${openService === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openService === index && (
                    <div className="px-4 pb-4 border-t border-dark-border pt-4">
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                      {service.outcomes && service.outcomes.length > 0 && (
                        <ul className="space-y-2">
                          {service.outcomes.map((outcome, idx) => (
                            <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-primary-500 mt-0.5 flex-shrink-0">✓</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Desktop: Grid with cards */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button to="/contact" variant="cta" size="lg">
                See Packages & Pricing
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-16 lg:py-24 border-t border-dark-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 mb-6">
                Simple Process, Clear Timeline
              </h2>
              <p className="text-lg text-gray-300">
                No confusing jargon. No hidden steps. Here's exactly how we work together.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-dark-card border border-dark-border rounded-xl p-4 lg:p-8 mb-4 lg:mb-6 hover:border-primary-500/50 transition-all"
                >
                  <div className="flex gap-3 lg:gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-2xl lg:text-4xl font-bold text-primary-500/40">{step.number}</div>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-2xl font-bold text-gray-100 mb-2 lg:mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm lg:text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Tracking Explanation */}
        <section className="py-16 lg:py-24 border-t border-dark-border">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-2">
                  Know What Works
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-6">
                  Stop Guessing, Start Tracking Every Lead
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Most business owners have no idea where their customers come from. That ends today.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-gray-100">Track Every Form Submission</p>
                      <p className="text-gray-400">Know who filled out what, when, and from which page</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-gray-100">Monitor Phone Calls</p>
                      <p className="text-gray-400">See which marketing drove the call and from what page</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-gray-100">Measure Direction Clicks</p>
                      <p className="text-gray-400">Track when people click for directions to your business</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 text-2xl">✓</span>
                    <div>
                      <p className="font-semibold text-gray-100">Monthly Performance Reports</p>
                      <p className="text-gray-400">Simple reports showing what's working and what's not</p>
                    </div>
                  </div>
                </div>
                
                <Button to="/contact" variant="cta" size="lg">
                  Get Started with Lead Tracking
                </Button>
              </div>
              
              <div className="hidden lg:block bg-dark-card border border-dark-border rounded-xl p-8 shadow-2xl">
                <div className="mb-6">
                  <p className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-wider">Sample Monthly Report</p>
                  <div className="relative bg-primary-500 border-2 border-primary-600 rounded-xl p-6 mb-4 shadow-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300">
                    <div className="relative">
                      <p className="text-sm text-white/90 mb-2 font-medium">Total Leads This Month</p>
                      <p className="text-5xl font-bold text-white">47</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-card border-2 border-primary-500 rounded-xl p-5 shadow-lg hover:shadow-xl hover:shadow-primary-500/30">
                      <p className="text-sm text-primary-400 mb-2 font-semibold">Form Submissions</p>
                      <p className="text-3xl font-bold text-primary-500 group-hover:scale-110 transition-transform">28</p>
                    </div>
                    <div className="bg-dark-card border-2 border-primary-500 rounded-xl p-5 shadow-lg hover:shadow-xl hover:shadow-primary-500/30">
                      <p className="text-sm text-primary-400 mb-2 font-semibold">Phone Calls</p>
                      <p className="text-3xl font-bold text-primary-500 group-hover:scale-110 transition-transform">19</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-dark-card border-2 border-primary-500 rounded-xl p-5 shadow-lg">
                  <p className="text-sm font-semibold text-primary-500 mb-4 uppercase tracking-wider">Top Converting Pages</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm bg-dark-card/50 rounded-lg p-3 hover:bg-primary-500/10 border-l-2 border-primary-500/50 hover:border-primary-500 transition-all duration-200">
                      <span className="text-gray-200 font-mono">/services</span>
                      <span className="font-bold text-primary-500 text-base">18 leads</span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-dark-card/50 rounded-lg p-3 hover:bg-primary-500/10 border-l-2 border-primary-500/50 hover:border-primary-500 transition-all duration-200">
                      <span className="text-gray-200 font-mono">/contact</span>
                      <span className="font-bold text-primary-500 text-base">15 leads</span>
                    </div>
                    <div className="flex justify-between items-center text-sm bg-dark-card/50 rounded-lg p-3 hover:bg-primary-500/10 border-l-2 border-primary-500/50 hover:border-primary-500 transition-all duration-200">
                      <span className="text-gray-200 font-mono">/home</span>
                      <span className="font-bold text-primary-500 text-base">14 leads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Strategy Call Section */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-t border-dark-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-transparent" />
          <div className="section-container relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 mb-6">
                Book Your Free Strategy Call
              </h2>
              <p className="text-xl mb-12 text-gray-300">
                30 minutes that could transform how you get customers online.
              </p>
              
              <div className="bg-dark-card/50 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8 lg:p-12 mb-10">
                <p className="text-lg font-semibold text-gray-100 mb-6">What happens on the call:</p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 text-2xl">→</span>
                    <div>
                      <p className="font-semibold text-gray-100 mb-1">Quick Audit</p>
                      <p className="text-gray-400">We look at your current site and online presence</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 text-2xl">→</span>
                    <div>
                      <p className="font-semibold text-gray-100 mb-1">Opportunity List</p>
                      <p className="text-gray-400">Specific things you could improve to get more leads</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 text-2xl">→</span>
                    <div>
                      <p className="font-semibold text-gray-100 mb-1">Custom Plan</p>
                      <p className="text-gray-400">What we'd recommend for your specific business</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 text-2xl">→</span>
                    <div>
                      <p className="font-semibold text-gray-100 mb-1">Timeline & Pricing</p>
                      <p className="text-gray-400">Transparent pricing and realistic timeline</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-300 italic">
                  No sales pitch. No obligation. If we're not the right fit, we'll tell you honestly.
                </p>
              </div>
              
              <Button to="/contact" variant="cta" size="lg">
                Schedule Your Free Strategy Call
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 lg:py-24 border-t border-dark-border">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-12 text-center">
                Common Questions
              </h2>
              
              <div>
                {faqs.map((faq, index) => (
                  <FAQItem key={index} {...faq} />
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-gray-300 mb-4">
                  Still have questions? Let's talk.
                </p>
                <Button to="/contact" variant="cta">
                  Let's Talk About Your Website
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-t border-dark-border">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
          <div className="section-container relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-100 mb-6">
                Ready to Generate Real Leads from Your Website?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Stop losing customers to outdated, slow websites. Book your free strategy call 
                and let's build something that actually drives business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="cta" size="lg">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
