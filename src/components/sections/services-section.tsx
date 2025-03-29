import { motion } from "framer-motion";
import { ArrowRight, Database, Globe, Layers, LineChart, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedCards } from "@/components/ui/animated-cards";

export function ServicesSection() {
  const services = [
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
    {
      id: 5,
      title: "Data Analytics",
      content: "Make informed decisions with comprehensive data analysis and reporting.",
      icon: <Database className="h-6 w-6" />,
      link: "/services"
    },
    {
      id: 6,
      title: "Performance Marketing",
      content: "Maximize ROI with targeted performance marketing campaigns that deliver results.",
      icon: <LineChart className="h-6 w-6" />,
      link: "/services"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We offer a comprehensive suite of digital marketing services to help your business grow and thrive in the digital landscape.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedCards items={services} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild className="bg-gradient">
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
