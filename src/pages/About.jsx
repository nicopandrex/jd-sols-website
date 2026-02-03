import Button from '../components/Button';
import SEO from '../components/SEO';
import { FaCheckCircle, FaMobileAlt, FaBolt, FaChartBar, FaSearch, FaComments, FaShieldAlt } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us - Local Business Web Design Specialists"
        description="JD Sols specializes in helping local businesses generate real leads through modern websites and local SEO. No fluff, just results."
      />
      
      <div className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-dark-bg to-dark-card py-16 lg:py-20">
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-4">
                About JD Sols
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
                We Help Local Businesses Win Online
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                No fancy marketing speak. No empty promises. Just practical solutions that generate 
                real leads for businesses serving their local communities.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24 bg-dark-bg">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-gray-100 mb-6">
                    Why We Started JD Sols
                  </h2>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      We got tired of seeing great local businesses lose customers to terrible websites. 
                      Plumbers, dentists, landscapers, auto shops—hardworking people providing excellent 
                      services but getting crushed online by competitors with better web presence.
                    </p>
                    <p>
                      The problem? Most web agencies either charge enterprise prices for basic sites, 
                      or they deliver cheap templates that don't actually help businesses grow. Cookie-cutter 
                      designs with no strategy. Beautiful sites with no leads. Confusing jargon with no results.
                    </p>
                    <p>
                      So we built JD Sols around one simple principle: help local businesses generate 
                      measurable leads at fair prices. No fluff. No unnecessary complexity. Just modern 
                      websites that work, backed by the tracking to prove it.
                    </p>
                  </div>
                </div>
                
                <div className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-primary-500/50 transition-all">
                  <h3 className="text-xl font-bold text-gray-100 mb-4">What Makes Us Different</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-100">Local Business Specialists</p>
                        <p className="text-sm text-gray-400">
                          We only work with local service businesses. We understand your customers 
                          and what drives them to call.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-100">Results Over Beauty</p>
                        <p className="text-sm text-gray-400">
                          Pretty sites are nice. Sites that generate leads are better. We optimize 
                          for conversions first.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-100">Transparent Everything</p>
                        <p className="text-sm text-gray-400">
                          No hidden fees. No confusing contracts. No vague timelines. You always 
                          know what's happening.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-100">Plain English Communication</p>
                        <p className="text-sm text-gray-400">
                          We explain tech in terms you understand. No jargon unless necessary, 
                          and when we use it, we explain it.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24 bg-dark-card">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-12 text-center">
                How We Work
              </h2>
              
              <div className="space-y-8">
                <div className="bg-dark-bg border border-dark-border rounded-xl p-8 hover:border-primary-500/50 transition-all">
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    Clear Communication
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    You'll never wonder what's happening with your project. Regular updates, clear timelines, 
                    direct access to us. No ghosting. No waiting days for responses. We treat your time like 
                    it matters because it does.
                  </p>
                </div>
                
                <div className="bg-dark-bg border border-dark-border rounded-xl p-8 hover:border-primary-500/50 transition-all">
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We respect that every day without a proper website is a day you're losing customers. 
                    Most projects go live in 3-4 weeks. No unnecessary delays. No dragging projects out 
                    to justify fees. When we say it'll be done, it'll be done.
                  </p>
                </div>
                
                <div className="bg-dark-bg border border-dark-border rounded-xl p-8 hover:border-primary-500/50 transition-all">
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    Measurable Results
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We're obsessed with tracking. You'll know exactly how many leads your site generates, 
                    which pages work best, where visitors come from. No vague "building brand awareness" 
                    nonsense. Real numbers you can use to grow your business.
                  </p>
                </div>
                
                <div className="bg-dark-bg border border-dark-border rounded-xl p-8 hover:border-primary-500/50 transition-all">
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    Honest Recommendations
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    If you don't need something, we'll tell you. We won't upsell services you don't need 
                    just to pad the invoice. Sometimes the best advice we give is "you don't need this yet." 
                    We want long-term clients, not one-time projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-16 lg:py-24 bg-dark-bg">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-6 text-center">
                Who We Work With
              </h2>
              <p className="text-lg text-gray-300 mb-12 text-center">
                We specialize in local service businesses across various industries:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary-500/50 transition-all">
                  <h3 className="font-bold text-gray-100 mb-3">Home Services</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Plumbing</li>
                    <li>• HVAC</li>
                    <li>• Electrical</li>
                    <li>• Landscaping</li>
                    <li>• Roofing</li>
                    <li>• Cleaning Services</li>
                  </ul>
                </div>
                
                <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary-500/50 transition-all">
                  <h3 className="font-bold text-gray-100 mb-3">Professional Services</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Dental Practices</li>
                    <li>• Medical Clinics</li>
                    <li>• Legal Services</li>
                    <li>• Accounting</li>
                    <li>• Real Estate</li>
                    <li>• Insurance</li>
                  </ul>
                </div>
                
                <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary-500/50 transition-all">
                  <h3 className="font-bold text-gray-100 mb-3">Automotive & Retail</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Auto Repair</li>
                    <li>• Car Dealerships</li>
                    <li>• Restaurants</li>
                    <li>• Retail Shops</li>
                    <li>• Gyms & Fitness</li>
                    <li>• Salons & Spas</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400">
                  Don't see your industry? If you serve local customers, we can help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-dark-bg text-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Approach to Every Project
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                These principles guide every website we build:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <FaMobileAlt className="text-4xl mb-4 text-primary-400" />
                  <h3 className="font-bold text-xl mb-2">Mobile First</h3>
                  <p className="text-gray-300">
                    Most searches happen on phones. We design for mobile, then scale up to desktop.
                  </p>
                </div>
                
                <div>
                  <FaBolt className="text-4xl mb-4 text-primary-400" />
                  <h3 className="font-bold text-xl mb-2">Speed Matters</h3>
                  <p className="text-gray-300">
                    Every site we build loads in under 3 seconds. Fast sites convert better. Period.
                  </p>
                </div>
                
                <div>
                  <FaChartBar className="text-4xl mb-4 text-primary-400" />
                  <h3 className="font-bold text-xl mb-2">Track Everything</h3>
                  <p className="text-gray-300">
                    If you can't measure it, you can't improve it. We track all leads from day one.
                  </p>
                </div>
                
                <div>
                  <FaSearch className="text-4xl mb-4 text-primary-400" />
                  <h3 className="font-bold text-xl mb-2">SEO Baked In</h3>
                  <p className="text-gray-300">
                    SEO isn't an add-on. It's built into every page from the foundation up.
                  </p>
                </div>
                
                <div>
                  <FaComments className="text-4xl mb-4 text-primary-400" />
                  <h3 className="font-bold text-xl mb-2">Clear CTAs</h3>
                  <p className="text-gray-300">
                    Every page makes it obvious what visitors should do next. No confusion.
                  </p>
                </div>
                
                <div>
                  <FaShieldAlt className="text-4xl mb-4 text-primary-400" />
                  <h3 className="font-bold text-xl mb-2">Secure & Maintained</h3>
                  <p className="text-gray-300">
                    Security isn't optional. Every site gets SSL, backups, and monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-dark-bg">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-6">
                Let's Talk About Your Business
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a free strategy call. We'll look at your current online presence, identify opportunities, 
                and give you honest recommendations—whether you work with us or not.
              </p>
              <Button to="/contact" variant="cta" size="lg">
                Schedule Your Free Strategy Call
              </Button>
              <p className="mt-6 text-gray-400">
                30 minutes that could change how you get customers. No sales pitch. Just value.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
