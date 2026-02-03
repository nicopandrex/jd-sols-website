import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy policy for JD Sols. Learn how we collect, use, and protect your personal information."
      />
      
      <div className="pt-16 lg:pt-20">
        <section className="py-16 lg:py-20 bg-dark-bg">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
                Privacy Policy
              </h1>
              <p className="text-gray-400 mb-12">
                Last updated: February 2, 2026
              </p>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">Introduction</h2>
                  <p className="text-gray-300 leading-relaxed">
                    JD Sols ("we," "our," or "us") respects your privacy and is committed to protecting 
                    your personal information. This Privacy Policy explains how we collect, use, and 
                    safeguard your information when you visit our website or use our services.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">Information We Collect</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business name and website URL</li>
                    <li>Project details and communication preferences</li>
                    <li>Information you provide through forms, emails, or phone calls</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">How We Use Your Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Respond to your inquiries and provide customer service</li>
                    <li>Schedule and conduct strategy calls</li>
                    <li>Provide quotes and proposals for our services</li>
                    <li>Deliver and improve our services</li>
                    <li>Send you relevant updates about your project</li>
                    <li>Communicate with you about our services (you can opt out anytime)</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">Information Sharing</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may 
                    share your information with trusted service providers who assist us in operating our 
                    website and conducting our business, as long as they agree to keep this information 
                    confidential.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet is 100% secure.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">Cookies and Analytics</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies and similar tracking technologies to improve your browsing experience 
                    and analyze website traffic. We may use Google Analytics or similar services to understand 
                    how visitors use our site. You can control cookies through your browser settings.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">Your Rights</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or how we handle your information, 
                    please contact us:
                  </p>
                  <div className="bg-dark-card border border-dark-border rounded-xl p-6">
                    <p className="text-gray-300">
                      <strong>Email:</strong> privacy@jdsols.com<br />
                      <strong>Phone:</strong> (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">Changes to This Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
