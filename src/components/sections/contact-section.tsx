
import { motion } from "framer-motion";
import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to <span className="text-gradient">Grow</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Fill out the form, and we'll be in touch within 24 hours to discuss how we can help you achieve your digital marketing goals.
            </p>
            
            <div className="bg-muted/40 p-6 rounded-xl mb-8">
              <h3 className="font-semibold mb-2">Why Work With Us?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-va-purple text-white flex-shrink-0 flex items-center justify-center text-xs mt-0.5 mr-2">✓</div>
                  <span>Data-driven strategies tailored to your specific goals</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-va-purple text-white flex-shrink-0 flex items-center justify-center text-xs mt-0.5 mr-2">✓</div>
                  <span>Transparent reporting and communication</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-va-purple text-white flex-shrink-0 flex items-center justify-center text-xs mt-0.5 mr-2">✓</div>
                  <span>Proven track record of delivering results</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-va-purple text-white flex-shrink-0 flex items-center justify-center text-xs mt-0.5 mr-2">✓</div>
                  <span>Experienced team of digital marketing specialists</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Our Location</h3>
              <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1636484892530!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Viral Alchemy Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
