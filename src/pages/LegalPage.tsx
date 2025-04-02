
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LegalPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl font-bold mb-8">Legal Policies</h1>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4" id="privacy-policy">Privacy Policy</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">1. Introduction</h3>
              <p>
                Splivix ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you visit our website or use our services.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">2. Information We Collect</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you 
                express an interest in obtaining information about us or our products and services, 
                when you participate in activities on our website, or otherwise when you contact us.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">3. How We Use Your Information</h3>
              <p>
                We use personal information collected via our website for a variety of business purposes 
                described below. We process your personal information for these purposes in reliance on 
                our legitimate business interests, in order to enter into or perform a contract with you, 
                with your consent, and/or for compliance with our legal obligations.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">4. Disclosure of Your Information</h3>
              <p>
                We may share information we have collected about you in certain situations. Your 
                information may be disclosed as follows:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>By Law or to Protect Rights</li>
                <li>Third-Party Service Providers</li>
                <li>Business Transfers</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">5. Security of Your Information</h3>
              <p>
                We use administrative, technical, and physical security measures to help protect your 
                personal information. While we have taken reasonable steps to secure the personal 
                information you provide to us, please be aware that despite our efforts, no security 
                measures are perfect or impenetrable, and no method of data transmission can be 
                guaranteed against any interception or other type of misuse.
              </p>
            </div>
          </section>
          
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4" id="terms-of-service">Terms of Service</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">1. Agreement to Terms</h3>
              <p>
                By accessing our website and using our services, you agree to be bound by these Terms and all 
                applicable laws and regulations. If you do not agree with any of these Terms, you are prohibited 
                from using or accessing this site.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials on Splivix's website 
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">3. Disclaimer</h3>
              <p>
                The materials on Splivix's website are provided on an 'as is' basis. Splivix makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or other 
                violation of rights.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">4. Limitations</h3>
              <p>
                In no event shall Splivix or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising 
                out of the use or inability to use the materials on Splivix's website, even if Splivix 
                or a Splivix authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4" id="cookie-policy">Cookie Policy</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">1. What Are Cookies</h3>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They are widely used in order to make websites work, or work more efficiently, as well 
                as to provide information to the owners of the site.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">2. How We Use Cookies</h3>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, 
                there are no industry standard options for disabling cookies without completely disabling 
                the functionality and features they add to this site.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">3. The Cookies We Set</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Account related cookies: If you create an account with us, we will use cookies for the management of the signup process and general administration.</li>
                <li>Login related cookies: We use cookies when you are logged in so that we can remember this fact.</li>
                <li>Form related cookies: When you submit data to through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-6 mb-3">4. Third Party Cookies</h3>
              <p>
                In some special cases we also use cookies provided by trusted third parties. The following 
                section details which third party cookies you might encounter through this site.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience.</li>
                <li>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
