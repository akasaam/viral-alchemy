
import { Layout } from "@/components/layout/layout";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudiesData = [
    {
      id: 1,
      title: "E-Commerce Revenue Growth",
      client: "StyleHaven",
      category: "Social Media Marketing",
      result: "+143% Revenue",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80",
      path: "/case-studies/ecommerce-growth",
      brief: "Helping a fashion e-commerce brand increase their revenue through strategic social media marketing.",
    },
    {
      id: 2,
      title: "SaaS Lead Generation",
      client: "CloudSolutions",
      category: "Content Marketing",
      result: "+89% Leads",
      image: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?auto=format&fit=crop&q=80",
      path: "/case-studies/saas-lead-generation",
      brief: "Generating quality leads for a B2B SaaS company through content marketing.",
    },
    {
      id: 3,
      title: "Local Business SEO Strategy",
      client: "CityBistro",
      category: "Search Engine Optimization",
      result: "+312% Organic Traffic",
      image: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&q=80",
      path: "/case-studies/local-seo",
      brief: "Helping a local restaurant increase their online visibility and foot traffic through SEO.",
    },
    {
      id: 4,
      title: "Website Redesign & Conversion",
      client: "TechGadgets",
      category: "Website Development",
      result: "+75% Conversion Rate",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80",
      path: "/case-studies/website-redesign",
      brief: "Redesigning an e-commerce website to improve user experience and increase conversions.",
    },
    {
      id: 5,
      title: "B2B PPC Campaign",
      client: "EnterpriseTools",
      category: "PPC Advertising",
      result: "-40% Cost Per Acquisition",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      path: "/case-studies/b2b-ppc",
      brief: "Optimizing PPC campaigns to reduce cost per acquisition for a B2B software company.",
    },
    {
      id: 6,
      title: "Email Marketing Automation",
      client: "WellnessHub",
      category: "Email Marketing",
      result: "+65% Customer Retention",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&q=80",
      path: "/case-studies/email-automation",
      brief: "Implementing email automation to improve customer retention for a wellness subscription service.",
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
              Our <span className="text-gradient">Case Studies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Discover how we've helped our clients achieve exceptional results through strategic digital marketing solutions.
            </motion.p>
          </div>
        </div>
      </AnimatedGradient>

      {/* Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="rounded-full">All</Button>
            <Button variant="outline" className="rounded-full">Social Media</Button>
            <Button variant="outline" className="rounded-full">SEO</Button>
            <Button variant="outline" className="rounded-full">Content Marketing</Button>
            <Button variant="outline" className="rounded-full">Website Development</Button>
            <Button variant="outline" className="rounded-full">PPC</Button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                className="group bg-card border rounded-xl overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-va-purple/20 group-hover:bg-va-purple/40 transition-all duration-300 z-10" />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/70 text-foreground px-3 py-1 rounded-full text-sm z-20">
                    {study.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-va-purple transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{study.brief}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-va-purple">{study.result}</span>
                    <Button asChild variant="ghost" size="sm" className="group-hover:text-va-purple">
                      <Link to={study.path}>
                        View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Be Our Next Success Story?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Let's create a customized digital marketing strategy that drives measurable results for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-gradient hover:opacity-90">
                <Link to="/contact">
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
