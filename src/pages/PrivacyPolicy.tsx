
import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Introduction</h2>
              <p>
                Welcome to Viral Alchemy ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2>2. Information We Collect</h2>
              <p>
                We may collect several types of information from and about users of our website, including:
              </p>
              <ul>
                <li>Personal identifiers, such as name, email address, phone number</li>
                <li>Business information, such as company name and job title</li>
                <li>Technical data, such as IP address, browser type, device information</li>
                <li>Usage data, such as how you interact with our website</li>
              </ul>
              
              <h2>3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you marketing communications</li>
                <li>To improve our website and services</li>
                <li>To protect against fraudulent or illegal activity</li>
              </ul>
              
              <h2>4. Disclosure of Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with your consent</li>
                <li>Legal authorities when required by law</li>
              </ul>
              
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2>6. Your Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal data, such as the right to access, correct, or delete your information.
              </p>
              
              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> saambarlin@gmail.com<br />
                <strong>Phone:</strong> +91 750-141-1769
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
