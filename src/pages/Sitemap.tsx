
import { Layout } from "@/components/layout/layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Service Pages",
      links: [
        { name: "Social Media Marketing", path: "/services/social-media-marketing" },
        { name: "Search Engine Optimization", path: "/services/seo" },
        { name: "Content Marketing", path: "/services/content-marketing" },
        { name: "Website Development", path: "/website-development" },
      ]
    },
    {
      title: "Information",
      links: [
        { name: "Work With Us", path: "/careers" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
      ]
    }
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
            
            <div className="space-y-10">
              {sitemapSections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.path}
                          className="flex items-center p-3 rounded-lg border hover:bg-accent transition-colors"
                        >
                          <ArrowRight className="mr-2 h-4 w-4 text-va-purple" />
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
