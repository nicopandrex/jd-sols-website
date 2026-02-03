import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import SEO from '../components/SEO';
import { FaBullseye, FaSearch, FaChartLine, FaTools, FaMapMarkerAlt } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaBullseye className="text-primary-500" />,
      title: 'Modern Mobile-Optimized Websites',
      description: 'Your customers are on their phones. We build fast, mobile-first websites that work flawlessly on every device and convert visitors into leads.',
      outcomes: [
        'Lightning-fast load times (under 3 seconds)',
        'Responsive design that works on all devices',
        'Easy-to-use content management system',
        'Built-in contact forms and lead capture',
        'Professional, modern design',
        'Hosting and domain setup included'
      ]
    },
    {
      icon: <FaSearch className="text-primary-500" />,
      title: 'Local SEO Optimization',
      description: 'Get found on Google when people in your area search for what you offer. We handle the technical SEO foundation so you show up where it matters most.',
      outcomes: [
        'Google Business Profile optimization',
        'Local keyword research and targeting',
        'On-page SEO (titles, descriptions, headings)',
        'Schema markup for local businesses',
        'XML sitemap creation',
        'Google Search Console setup'
      ]
    },
    {
      icon: <FaChartLine className="text-primary-500" />,
      title: 'Lead Tracking & Analytics',
      description: 'Stop guessing where your customers come from. Track form submissions, phone calls, direction requests, and more in one simple dashboard that makes sense.',
      outcomes: [
        'Google Analytics 4 setup and configuration',
        'Form submission tracking',
        'Call tracking integration options',
        'Goal and conversion tracking',
        'Monthly performance reports',
        'ROI measurement and insights'
      ]
    },
    {
      icon: <FaTools className="text-primary-500" />,
      title: 'Monthly Maintenance & Updates',
      description: 'Your website stays fast, secure, and up-to-date without you lifting a finger. We handle all the technical stuff so you can focus on running your business.',
      outcomes: [
        'Security monitoring and updates',
        'Weekly automated backups',
        'Performance optimization',
        'Uptime monitoring (99.9% guarantee)',
        'Plugin and theme updates',
        'Up to 2 hours of content edits per month'
      ]
    },
    {
      icon: <FaMapMarkerAlt className="text-primary-500" />,
      title: 'Google Business Profile Management',
      description: 'Your Google Business Profile is often the first impression potential customers get. We optimize it to drive more calls, directions, and website visits.',
      outcomes: [
        'Complete profile optimization',
        'Category and attribute selection',
        'Photo optimization and management',
        'Review response strategy',
        'Regular post scheduling',
        'Insight tracking and reporting'
      ]
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: 'Starting at $1,200',
      description: 'Perfect for small businesses that need a professional online presence',
      features: [
        'Up to 5 pages',
        'Mobile-responsive design',
        'Contact form',
        'Basic SEO setup',
        'Google Analytics',
        '2 rounds of revisions',
        '3-4 week delivery',
      ],
      highlight: false
    },
    {
      name: 'Growth',
      price: 'Starting at $2,500',
      description: 'For businesses ready to seriously compete online and generate leads',
      features: [
        'Up to 10 pages',
        'Advanced mobile optimization',
        'Multiple contact forms',
        'Full SEO foundation',
        'Google Business Profile setup',
        'Lead tracking setup',
        'Call tracking integration',
        'Monthly maintenance (3 months)',
        '4-5 week delivery',
      ],
      highlight: true
    },
    {
      name: 'Pro',
      price: 'Starting at $4,000',
      description: 'Complete online presence for businesses that want maximum lead generation',
      features: [
        'Unlimited pages',
        'Custom design & features',
        'Advanced lead tracking',
        'Full local SEO campaign',
        'Google Business Profile management',
        'Competitor analysis',
        'Conversion rate optimization',
        'Priority support',
        'Monthly maintenance (6 months)',
        '6-8 week delivery',
      ],
      highlight: false
    },
  ];

  return (
    <>
      <SEO 
        title="Services & Pricing - Web Design for Local Businesses"
        description="Professional web design, local SEO, and lead tracking for local businesses. Transparent pricing starting at $1,200. Book your free strategy call today."
      />
      
      <div className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-dark-bg to-dark-card py-16 lg:py-20">
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-4">
                Services & Pricing
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
                Everything You Need to Dominate Your Local Market
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transparent pricing. No hidden fees. No unnecessary upsells. Just the services that 
                actually drive leads for local businesses.
              </p>
              <Button to="/contact" variant="cta" size="lg">
                Get Your Custom Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-16 lg:py-24 bg-dark-bg">
          <div className="section-container">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-gray-300">
                Each service is designed to solve real problems local businesses face when trying to 
                generate leads online.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-8">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 lg:py-24 bg-dark-card">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-4">
                Package Pricing
              </h2>
              <p className="text-lg text-gray-300 mb-2">
                These are starting points. Final pricing depends on your specific needs.
              </p>
              <p className="text-base text-gray-400">
                All packages include: hosting setup assistance, SSL certificate, responsive design, 
                and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`bg-dark-bg border rounded-xl p-8 transition-all ${
                    pkg.highlight 
                      ? 'border-2 border-primary-500 shadow-lg shadow-primary-500/10 relative' 
                      : 'border-dark-border hover:border-primary-500/50'
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-primary-500 text-white px-4 py-1 text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-primary-500 mb-3">{pkg.price}</p>
                    <p className="text-gray-400">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-500 mr-2">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    to="/contact" 
                    variant={pkg.highlight ? 'cta' : 'outline'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-dark-bg border border-dark-border rounded-xl p-6">
                <h3 className="font-bold text-gray-100 mb-3">Add-Ons Available:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-100">Monthly Maintenance</p>
                    <p className="text-gray-400">From $150/month</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">Ongoing SEO</p>
                    <p className="text-gray-400">From $500/month</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">Content Writing</p>
                    <p className="text-gray-400">From $100/page</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">Professional Photography</p>
                    <p className="text-gray-400">From $300/session</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-dark-bg">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-12 text-center">
                Why Local Businesses Choose JD Sols
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 text-xl font-bold">
                      01
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-100 mb-2">We Speak Plain English</h3>
                    <p className="text-gray-300">
                      No tech jargon. No confusing acronyms. We explain everything in terms that make sense 
                      for your business.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 text-xl font-bold">
                      02
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-100 mb-2">Fast Turnaround</h3>
                    <p className="text-gray-300">
                      Most projects go live in 3-4 weeks. We don't drag our feet. You get results quickly.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 text-xl font-bold">
                      03
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-100 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-300">
                      You know exactly what you're paying for. No hidden fees, no surprise charges, no bait and switch.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 text-xl font-bold">
                      04
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-100 mb-2">Local Business Expertise</h3>
                    <p className="text-gray-300">
                      We specialize in local businesses. We understand your customers, your competition, and what works.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 text-xl font-bold">
                      05
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-100 mb-2">Proven Track Record</h3>
                    <p className="text-gray-300">
                      Our clients see real results: more calls, more form submissions, more customers walking through the door.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/20 rounded-lg flex items-center justify-center text-primary-500 text-xl font-bold">
                      06
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-100 mb-2">Ongoing Support</h3>
                    <p className="text-gray-300">
                      We don't disappear after launch. You have direct access to us whenever you need help or have questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Book your free strategy call and get a custom quote based on your specific business needs.
              </p>
              <Button to="/contact" variant="cta" size="lg">
                Schedule Your Free Strategy Call
              </Button>
              <p className="mt-6 text-white/80">
                Typical response time: Within 24 hours
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
