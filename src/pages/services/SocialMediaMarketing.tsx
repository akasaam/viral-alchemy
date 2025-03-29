
import { Layout } from "@/components/layout/layout";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const SocialMediaMarketing = () => {
  const platforms = [
    { name: "Instagram", icon: Instagram, color: "bg-pink-500" },
    { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700" },
    { name: "Twitter", icon: Twitter, color: "bg-blue-400" },
  ];

  const services = [
    "Social Media Strategy Development",
    "Content Creation & Curation",
    "Profile Setup & Optimization",
    "Community Management",
    "Advertising Campaigns",
    "Analytics & Reporting",
    "Influencer Marketing",
    "Social Listening & Monitoring"
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
              Social Media <span className="text-gradient">Marketing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Build your brand presence and engage your audience with strategic social media campaigns.
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
            >
              <h2 className="text-3xl font-bold mb-6">Engage Your Audience Across All Platforms</h2>
              <p className="text-muted-foreground mb-6">
                Our social media marketing services are designed to help your brand build meaningful connections with your audience, drive engagement, and increase conversions across all major social platforms.
              </p>
              <p className="text-muted-foreground mb-8">
                With a focus on strategic content creation, community management, and data-driven optimization, we help your brand stand out in crowded social feeds and achieve measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                {platforms.map((platform) => (
                  <div key={platform.name} className="flex items-center bg-card p-3 rounded-lg border">
                    <platform.icon className={`mr-2 h-5 w-5 text-white p-1 rounded-full ${platform.color}`} />
                    <span>{platform.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-xl border"
            >
              <h3 className="text-2xl font-bold mb-6">Our Social Media Services</h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
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
            Ready to Transform Your Social Media Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            Let's create a customized social media strategy that drives results for your business.
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

export default SocialMediaMarketing;
