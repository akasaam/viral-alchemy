
import { Layout } from "@/components/layout/layout";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: [
        "123 Digital Avenue,",
        "Marketing District,",
        "MA 12345",
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: [
        "+91 750-141-1769",
        "Monday to Friday",
        "9:00 AM - 6:00 PM",
      ],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: [
        "saambarlin@gmail.com",
        "For general inquiries",
        "We respond within 24 hours",
      ],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: [
        "Monday to Friday",
        "9:00 AM - 6:00 PM",
        "Weekend Closed",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <AnimatedGradient className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get In <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Have questions about our services or ready to start a project? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </AnimatedGradient>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-gradient flex items-center justify-center mb-4">
                  <div className="text-white">{info.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                <div className="text-muted-foreground">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="mb-1">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form, and we'll be in touch within 24 hours to discuss how we can help you achieve your digital marketing goals.
              </p>
              
              <div className="bg-card p-8 rounded-xl shadow-sm border">
                <ContactForm />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-gradient">Location</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Feel free to visit our office for an in-person meeting. We're conveniently located in the heart of the city.
              </p>
              
              <div className="h-[400px] bg-muted rounded-xl overflow-hidden mb-6">
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
              
              <div className="bg-card p-6 rounded-xl border">
                <h3 className="font-semibold mb-4">Parking & Transportation</h3>
                <p className="text-muted-foreground mb-2">
                  Paid parking is available in the building garage. We're also conveniently located near public transportation.
                </p>
                <p className="text-muted-foreground">
                  <strong>Nearest Bus Stop:</strong> Digital Avenue (Line 42, 55)<br />
                  <strong>Nearest Subway:</strong> Marketing District Station (Blue Line)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Frequently Asked <span className="text-gradient">Questions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Find answers to common questions about working with us.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How long does it take to see results from digital marketing?",
                answer: "Results timeline varies based on your goals, industry, and current digital presence. Some tactics like PPC can show immediate results, while SEO typically takes 3-6 months to see significant improvements. We provide realistic timelines during our initial consultation.",
              },
              {
                question: "Do you offer customized marketing packages?",
                answer: "Yes, all our marketing strategies are tailored to your specific business needs and goals. We don't believe in one-size-fits-all solutions. After understanding your business, we'll recommend the services that will have the most impact.",
              },
              {
                question: "How do you measure the success of campaigns?",
                answer: "We establish clear KPIs aligned with your business goals at the beginning of our partnership. We provide regular reports tracking these metrics, along with actionable insights on how to improve performance.",
              },
              {
                question: "What industries do you specialize in?",
                answer: "We've worked with clients across various industries, including e-commerce, SaaS, healthcare, real estate, finance, and more. Our diverse experience allows us to adapt our strategies to different market needs.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
                className="bg-card border rounded-xl p-6"
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
