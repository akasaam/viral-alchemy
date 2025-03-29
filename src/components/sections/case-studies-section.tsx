
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Revenue Growth",
      category: "Social Media Marketing",
      result: "+143% Revenue",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80",
      path: "/case-studies/ecommerce-growth",
    },
    {
      id: 2,
      title: "SaaS Lead Generation",
      category: "Content Marketing",
      result: "+89% Leads",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80",
      path: "/case-studies/saas-lead-generation",
    },
    {
      id: 3,
      title: "Local Business SEO Strategy",
      category: "Search Engine Optimization",
      result: "+312% Organic Traffic",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80",
      path: "/case-studies/local-seo",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Our <span className="text-gradient">Case Studies</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Discover how we've helped our clients achieve exceptional results through strategic digital marketing solutions.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Button asChild variant="outline">
              <Link to="/case-studies">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <Link to={study.path} className="block">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                  <div className="absolute inset-0 bg-va-purple/20 group-hover:bg-va-purple/40 transition-all duration-300 z-10" />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white z-20">
                    <div className="text-sm font-medium mb-2">{study.category}</div>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-va-purple">{study.result}</span>
                  <span className="text-muted-foreground group-hover:text-va-purple transition-colors flex items-center">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
