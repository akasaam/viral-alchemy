
import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";

const CookiePolicy = () => {
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
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
              
              <h2>2. How We Use Cookies</h2>
              <p>
                We use cookies for a variety of reasons, including:
              </p>
              <ul>
                <li><strong>Essential cookies:</strong> These are necessary for the website to function properly.</li>
                <li><strong>Functionality cookies:</strong> These allow us to remember choices you make and provide enhanced features.</li>
                <li><strong>Analytics cookies:</strong> These help us understand how visitors interact with our website, which allows us to improve it.</li>
                <li><strong>Marketing cookies:</strong> These are used to track visitors across websites to enable us to display relevant advertisements.</li>
              </ul>
              
              <h2>3. Types of Cookies We Use</h2>
              <p>
                Our website uses both session cookies (which expire once you close your browser) and persistent cookies (which stay on your device for a set period or until you delete them).
              </p>
              
              <h2>4. Third-Party Cookies</h2>
              <p>
                We may also use third-party cookies, such as Google Analytics, to help analyze how users use the site. These cookies collect information about your use of the website, such as which pages you visited and which links you clicked on.
              </p>
              
              <h2>5. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. You can usually find these in the 'options' or 'preferences' menu of your browser. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
              </p>
              
              <h2>6. Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
              </p>
              
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy;
