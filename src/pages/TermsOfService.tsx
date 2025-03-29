
import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";

const TermsOfService = () => {
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
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
              
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Viral Alchemy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              
              <h2>3. Disclaimer</h2>
              <p>
                The materials on Viral Alchemy's website are provided on an 'as is' basis. Viral Alchemy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2>4. Limitations</h2>
              <p>
                In no event shall Viral Alchemy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Viral Alchemy's website, even if Viral Alchemy or a Viral Alchemy authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Viral Alchemy's website could include technical, typographical, or photographic errors. Viral Alchemy does not warrant that any of the materials on its website are accurate, complete or current. Viral Alchemy may make changes to the materials contained on its website at any time without notice.
              </p>
              
              <h2>6. Links</h2>
              <p>
                Viral Alchemy has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Viral Alchemy of the site. Use of any such linked website is at the user's own risk.
              </p>
              
              <h2>7. Modifications</h2>
              <p>
                Viral Alchemy may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
              
              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
              
              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
