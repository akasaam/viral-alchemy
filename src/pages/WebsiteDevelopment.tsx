
import { Layout } from "@/components/layout/layout";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Database, Globe, Layers, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WebsiteDevelopment = () => {
  const services = [
    {
      id: 1,
      title: "Custom Website Design",
      description: "Unique, branded websites tailored to your business needs and goals.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "E-Commerce Development",
      description: "Powerful online stores that drive sales and provide excellent user experiences.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Responsive Web Design",
      description: "Websites that look and function perfectly on all devices and screen sizes.",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Web Application Development",
      description: "Custom web applications that solve complex business problems.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      id: 5,
      title: "Content Management Systems",
      description: "Easy-to-use CMS solutions that put you in control of your content.",
      icon: <Database className="h-6 w-6" />,
    },
    {
      id: 6,
      title: "Performance Optimization",
      description: "Lightning-fast websites that provide exceptional user experiences and better SEO.",
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  const technologies = [
    "React.js", "Next.js", "Vue.js", "Node.js", "WordPress", 
    "WooCommerce", "Shopify", "PHP", "Laravel", "Tailwind CSS",
    "TypeScript", "Sanity.io", "MongoDB", "MySQL", "Firebase",
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Corporate SaaS Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Real Estate Listing Platform",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <AnimatedGradient className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Custom <span className="text-gradient">Website Development</span> Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We create stunning, high-performance websites that convert visitors into customers and elevate your brand to new heights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient hover:opacity-90">
                  <Link to="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#portfolio">View Our Work</a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-va-purple to-va-pink opacity-20 blur-xl animate-spinSlow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-va-purple to-va-pink opacity-30 blur-lg animate-spinSlow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Website Development"
                className="rounded-2xl object-cover w-full h-full relative z-10 mask-radial-faded"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedGradient>

      {/* Services Section */}
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
              Our Website <span className="text-gradient">Development Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              We offer comprehensive website development services to help your business establish a strong online presence.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                className="bg-card border rounded-xl p-6 hover:shadow-lg hover:border-va-purple transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient flex items-center justify-center mb-6">
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Our Development <span className="text-gradient">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              We follow a systematic approach to ensure your website meets your business needs and exceeds your expectations.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: 1, title: "Discovery", description: "Understanding your business needs and goals" },
              { step: 2, title: "Planning", description: "Defining the scope and creating the sitemap" },
              { step: 3, title: "Design", description: "Creating wireframes and visual designs" },
              { step: 4, title: "Development", description: "Coding and building the website" },
              { step: 5, title: "Launch", description: "Testing, optimization, and going live" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className="bg-card border rounded-xl p-6 text-center h-full flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-va-purple text-white flex items-center justify-center text-lg font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-va-purple transform translate-x-1/2 -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 h-2 w-2 bg-va-purple rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We <span className="text-gradient">Work With</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              We use the latest technologies to create fast, secure, and scalable websites.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="bg-card border rounded-full px-4 py-2 text-sm font-medium"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Our <span className="text-gradient">Portfolio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Check out some of our recent website development projects.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-white/80 text-sm">{item.category}</span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline">
              <Link to="/case-studies">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Why Choose <span className="text-gradient">Viral Alchemy</span> for Website Development?
              </h2>
              <div className="space-y-4">
                {[
                  "Custom designs tailored to your brand",
                  "Mobile-first responsive development",
                  "SEO-optimized code and structure",
                  "Performance-focused development",
                  "Ongoing support and maintenance",
                  "Integration with marketing tools",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-va-purple flex-shrink-0 mt-1 mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80"
                alt="Website Development"
                className="rounded-xl shadow-lg"
              />
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
            Ready to Build Your Dream Website?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            Let's create a website that not only looks great but also drives real business results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="bg-white text-va-purple hover:bg-white/90">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WebsiteDevelopment;
