
import { Layout } from "@/components/layout/layout";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, BarChart, Globe, Search, Settings } from "lucide-react";

const SEO = () => {
  const seoServices = [
    "Keyword Research & Strategy",
    "On-Page SEO Optimization",
    "Technical SEO Audits",
    "Content Strategy & Creation",
    "Local SEO",
    "Link Building",
    "SEO Analytics & Reporting",
    "Competitor Analysis"
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
              Search Engine <span className="text-gradient">Optimization</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Improve your visibility and drive organic traffic with data-driven SEO strategies.
            </motion.p>
          </div>
        </div>
      </AnimatedGradient>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">Drive Organic Traffic & Increase Visibility</h2>
              <p className="text-muted-foreground mb-6">
                Our SEO services are designed to help your business rank higher in search engine results, increase organic traffic, and improve conversion rates through data-driven strategies.
              </p>
              <p className="text-muted-foreground mb-8">
                We take a comprehensive approach to SEO, focusing on technical optimization, content strategy, and off-page factors to ensure your website ranks for the keywords that matter most to your business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-4 bg-card rounded-lg border text-center">
                  <Search className="mb-2 h-10 w-10 p-2 rounded-full bg-gradient text-white" />
                  <h4 className="font-semibold">Keyword Optimization</h4>
                </div>
                <div className="flex flex-col items-center p-4 bg-card rounded-lg border text-center">
                  <Globe className="mb-2 h-10 w-10 p-2 rounded-full bg-gradient text-white" />
                  <h4 className="font-semibold">Technical SEO</h4>
                </div>
                <div className="flex flex-col items-center p-4 bg-card rounded-lg border text-center">
                  <Settings className="mb-2 h-10 w-10 p-2 rounded-full bg-gradient text-white" />
                  <h4 className="font-semibold">On-Page SEO</h4>
                </div>
                <div className="flex flex-col items-center p-4 bg-card rounded-lg border text-center">
                  <BarChart className="mb-2 h-10 w-10 p-2 rounded-full bg-gradient text-white" />
                  <h4 className="font-semibold">SEO Analytics</h4>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-xl border order-1 lg:order-2"
            >
              <h3 className="text-2xl font-bold mb-6">Our SEO Services</h3>
              <ul className="space-y-4">
                {seoServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-va-purple flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Boost Your Search Rankings?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            Let's create a customized SEO strategy that drives organic growth for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="bg-white text-va-purple hover:bg-white/90">
              <Link to="/contact">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SEO;
