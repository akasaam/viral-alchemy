import { Layout } from "@/components/layout/layout";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { AnimatedCards } from "@/components/ui/animated-cards";
import { motion } from "framer-motion";
import { ArrowRight, BarChart, Database, Globe, Layers, LineChart, MessageSquare, Search, Share2, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Services = () => {
  const mainServices = [
    {
      id: 1,
      title: "Social Media Marketing",
      content: "Build your brand presence and engage your audience with strategic social media campaigns.",
      icon: <MessageSquare className="h-6 w-6" />,
      link: "/services/social-media-marketing"
    },
    {
      id: 2,
      title: "Search Engine Optimization",
      content: "Improve your visibility and drive organic traffic with data-driven SEO strategies.",
      icon: <Search className="h-6 w-6" />,
      link: "/services/seo"
    },
    {
      id: 3,
      title: "Content Marketing",
      content: "Tell your brand story and establish authority with compelling content strategies.",
      icon: <Layers className="h-6 w-6" />,
      link: "/services/content-marketing"
    },
    {
      id: 4,
      title: "Website Development",
      content: "Create stunning, high-performance websites that convert visitors into customers.",
      icon: <Globe className="h-6 w-6" />,
      link: "/website-development"
    },
  ];

  const additionalServices = [
    {
      id: 5,
      title: "Data Analytics",
      content: "Make informed decisions with comprehensive data analysis and reporting.",
      icon: <Database className="h-6 w-6" />,
    },
    {
      id: 6,
      title: "PPC Advertising",
      content: "Maximize ROI with targeted pay-per-click campaigns that deliver results.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      id: 7,
      title: "Email Marketing",
      content: "Nurture leads and drive conversions with personalized email campaigns.",
      icon: <Share2 className="h-6 w-6" />,
    },
    {
      id: 8,
      title: "Conversion Rate Optimization",
      content: "Improve your website's performance and increase conversions with data-driven strategies.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: 9,
      title: "Market Research",
      content: "Understand your target audience and competitors to inform your marketing strategy.",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      id: 10,
      title: "Performance Marketing",
      content: "Drive measurable results with holistic performance marketing strategies.",
      icon: <LineChart className="h-6 w-6" />,
    },
  ];

  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (!pageLoaded) {
      setPageLoaded(true);
    }
  }, []);

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
              Our <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              We offer comprehensive digital marketing solutions tailored to your unique business needs and goals.
            </motion.p>
          </div>
        </div>
      </AnimatedGradient>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Core Services
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 bg-card p-8 rounded-xl border"
              >
                <div className="h-14 w-14 rounded-full bg-gradient flex items-center justify-center flex-shrink-0">
                  <div className="text-white">{service.icon}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.content}</p>
                  
                  <Button asChild variant="outline">
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Additional Services
          </motion.h2>

          <AnimatedCards items={additionalServices} />
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-gradient">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              We follow a systematic approach to ensure success for your digital marketing campaigns.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Discovery", "Strategy", "Implementation", "Optimization"].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border rounded-xl p-8 text-center"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-va-purple text-white text-lg font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step}</h3>
                <p className="text-muted-foreground">
                  {index === 0 && "We learn about your business, goals, and target audience."}
                  {index === 1 && "We develop a tailored strategy based on research and analysis."}
                  {index === 2 && "We execute the strategy with precision and attention to detail."}
                  {index === 3 && "We continuously monitor and improve to maximize results."}
                </p>
              </motion.div>
            ))}
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
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            Let's create a customized digital marketing strategy that drives results for your business.
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

export default Services;
