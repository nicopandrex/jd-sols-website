import { useState } from 'react';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    helpWith: '',
    projectDetails: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Optional field
    return /^[\d\s\-\(\)\+]+$/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    // Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.helpWith) {
      newErrors.helpWith = 'Please select what you need help with';
    }
    
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please tell us about your project';
    } else if (formData.projectDetails.trim().length < 20) {
      newErrors.projectDetails = 'Please provide more details (at least 20 characters)';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Success
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        website: '',
        helpWith: '',
        projectDetails: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <>
        <SEO 
          title="Thank You - We'll Be In Touch Soon"
          description="Thank you for contacting JD Sols. We'll review your information and get back to you within 24 hours."
        />
        
        <div className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg to-dark-card">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    className="w-10 h-10 text-green-600" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
                  Thanks for Reaching Out!
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  We've received your information and we're excited to learn more about your business.
                </p>
              </div>
              
              <div className="bg-dark-card border border-dark-border rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">What Happens Next?</h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold">1.</span>
                    <p className="text-gray-300">
                      We'll review your project details and prepare some initial thoughts
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold">2.</span>
                    <p className="text-gray-300">
                      We'll reach out within 24 hours (usually much faster) to schedule your strategy call
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary-500 font-bold">3.</span>
                    <p className="text-gray-300">
                      On the call, we'll discuss your goals, audit your current presence, and provide honest recommendations
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-400">
                  In the meantime, feel free to explore our services or learn more about how we work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button to="/services" variant="outline">
                    View Our Services
                  </Button>
                  <Button to="/about" variant="outline">
                    Learn About Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Contact Us - Book Your Free Strategy Call"
        description="Book a free strategy call with JD Sols. Get a quick audit, opportunity list, and custom plan for your local business website. No pressure, just value."
      />
      
      <div className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-dark-bg to-dark-card py-16 lg:py-20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-wide mb-4">
                Get Started
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
                Book Your Free Strategy Call
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Tell us about your business and we'll schedule a 30-minute call to discuss how we can 
                help you generate more leads online. No sales pitch. Just honest advice and a clear plan.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 lg:py-20 bg-dark-bg">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Form */}
                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-100 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-dark-card border rounded-lg text-gray-100 placeholder-gray-500 ${
                          errors.fullName ? 'border-red-500' : 'border-dark-border'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="John Smith"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-semibold text-gray-100 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Smith Plumbing Co."
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-100 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-dark-card border rounded-lg text-gray-100 placeholder-gray-500 ${
                          errors.email ? 'border-red-500' : 'border-dark-border'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="john@smithplumbing.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-100 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-dark-card border rounded-lg text-gray-100 placeholder-gray-500 ${
                          errors.phone ? 'border-red-500' : 'border-dark-border'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    {/* Website URL */}
                    <div>
                      <label htmlFor="website" className="block text-sm font-semibold text-gray-100 mb-2">
                        Current Website URL (if you have one)
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="https://www.yoursite.com"
                      />
                    </div>

                    {/* What do you need help with */}
                    <div>
                      <label htmlFor="helpWith" className="block text-sm font-semibold text-gray-100 mb-2">
                        What do you need help with? *
                      </label>
                      <select
                        id="helpWith"
                        name="helpWith"
                        value={formData.helpWith}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-dark-card border rounded-lg text-gray-100 ${
                          errors.helpWith ? 'border-red-500' : 'border-dark-border'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                      >
                        <option value="">Select an option</option>
                        <option value="new-website">New Website</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="seo">Local SEO</option>
                        <option value="maintenance">Website Maintenance</option>
                        <option value="google-business">Google Business Profile</option>
                        <option value="not-sure">Not Sure / Want Recommendations</option>
                      </select>
                      {errors.helpWith && (
                        <p className="mt-1 text-sm text-red-600">{errors.helpWith}</p>
                      )}
                    </div>

                    {/* Project Details */}
                    <div>
                      <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-100 mb-2">
                        Tell us about your project *
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        rows="6"
                        className={`w-full px-4 py-3 bg-dark-card border rounded-lg text-gray-100 placeholder-gray-500 ${
                          errors.projectDetails ? 'border-red-500' : 'border-dark-border'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="Tell us about your business, what you're hoping to achieve, any specific features you need, timeline expectations, etc."
                      />
                      {errors.projectDetails && (
                        <p className="mt-1 text-sm text-red-600">{errors.projectDetails}</p>
                      )}
                      <p className="mt-1 text-sm text-gray-400">
                        The more details you provide, the better we can prepare for your strategy call.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button type="submit" variant="cta" size="lg" className="w-full">
                        Request Free Strategy Call
                      </Button>
                      <p className="mt-3 text-sm text-gray-400 text-center">
                        By submitting this form, you agree to be contacted about your project.
                      </p>
                    </div>
                  </form>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Contact Info */}
                  <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary-500/50 transition-all">
                    <h3 className="font-bold text-gray-100 mb-4">Get In Touch</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-100 mb-1">Email</p>
                        <a href="mailto:hello@jdsols.com" className="text-primary-500 hover:underline">
                          hello@jdsols.com
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-100 mb-1">Phone</p>
                        <a href="tel:+15551234567" className="text-primary-500 hover:underline">
                          (555) 123-4567
                        </a>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-100 mb-1">Response Time</p>
                        <p className="text-gray-300">
                          We typically respond within 24 hours, but often much faster during business hours.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="bg-dark-card border border-primary-500/20 rounded-xl p-6 hover:border-primary-500/50 transition-all">
                    <h3 className="font-bold text-gray-100 mb-4">What to Expect</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500">✓</span>
                        <span>Quick response to your inquiry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500">✓</span>
                        <span>30-minute strategy call at your convenience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500">✓</span>
                        <span>Honest assessment of your online presence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500">✓</span>
                        <span>Clear recommendations and next steps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500">✓</span>
                        <span>Transparent pricing and timeline</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary-500">✓</span>
                        <span>Zero pressure to commit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
