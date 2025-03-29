
import { Layout } from "@/components/layout/layout";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, PenTool, Tv2, Megaphone } from "lucide-react";

const ContentMarketing = () => {
  const contentServices = [
    "Content Strategy Development",
    "Blog Writing & Management",
    "Whitepaper & eBook Creation",
    "Case Study Development",
    "Email Marketing Content",
    "Video Content Creation",
    "Infographic Design",
    "Content Distribution Strategy"
  ];

  const contentTypes = [
    { name: "Blog Posts", icon: FileText, description: "Engaging articles that establish authority and drive organic traffic." },
    { name: "Video Content", icon: Tv2, description: "Dynamic video content that increases engagement and brand awareness." },
    { name: "Lead Magnets", icon: Megaphone, description: "Valuable resources that convert visitors into qualified leads." },
    { name: "Copywriting", icon: PenTool, description: "Compelling copy that drives action and increases conversions." },
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
              Content <span className="text-gradient">Marketing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Tell your brand story and establish authority with compelling content strategies.
            </motion.p>
          </div>
        </div>
      </AnimatedGradient>

      {/* Content Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Content That Converts</h2>
            <p className="text-muted-foreground">
              We create strategic content that attracts, engages, and converts your target audience at every stage of the buyer's journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient text-white mb-4">
                  <type.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                <p className="text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Strategic Content Marketing Solutions</h2>
              <p className="text-muted-foreground mb-6">
                Our content marketing services are designed to help your brand tell its story effectively, establish authority in your industry, and drive meaningful engagement with your target audience.
              </p>
              <p className="text-muted-foreground mb-8">
                We develop comprehensive content strategies that align with your business goals and deliver measurable results, from increased organic traffic to higher conversion rates.
              </p>
              <Button asChild>
                <Link to="/case-studies">
                  View Our Content Success Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-xl border"
            >
              <h3 className="text-2xl font-bold mb-6">Our Content Marketing Services</h3>
              <ul className="space-y-4">
                {contentServices.map((service, index) => (
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
            Ready to Tell Your Brand Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            Let's create a content marketing strategy that resonates with your audience and drives results.
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

export default ContentMarketing;
