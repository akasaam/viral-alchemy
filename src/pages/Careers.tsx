
import { Layout } from "@/components/layout/layout";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior SEO Specialist",
      location: "Remote",
      type: "Full-time",
      department: "Marketing",
      description: "We're looking for an experienced SEO specialist to develop and implement comprehensive SEO strategies for our clients.",
    },
    {
      id: 2,
      title: "Social Media Manager",
      location: "Remote",
      type: "Full-time",
      department: "Marketing",
      description: "Join our team to create and execute engaging social media strategies across multiple platforms for various clients.",
    },
    {
      id: 3,
      title: "Front-End Developer",
      location: "Remote",
      type: "Full-time",
      department: "Development",
      description: "Help us build stunning, high-performance websites for our clients using modern technologies like React and Tailwind CSS.",
    },
    {
      id: 4,
      title: "Content Marketing Specialist",
      location: "Remote",
      type: "Full-time",
      department: "Marketing",
      description: "Create compelling content that drives engagement and converts visitors into customers for our clients.",
    },
    {
      id: 5,
      title: "PPC Specialist",
      location: "Remote",
      type: "Full-time",
      department: "Marketing",
      description: "Manage and optimize paid advertising campaigns across Google, Facebook, LinkedIn, and other platforms.",
    },
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer industry-competitive compensation packages.",
    },
    {
      title: "Remote Work",
      description: "Work from anywhere with flexible hours.",
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance.",
    },
    {
      title: "Career Growth",
      description: "Continuous learning and advancement opportunities.",
    },
    {
      title: "Team Events",
      description: "Regular virtual and in-person team building activities.",
    },
    {
      title: "Modern Tools",
      description: "Access to the latest tools and technologies.",
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
              Join Our <span className="text-gradient">Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8"
            >
              We're looking for talented individuals who are passionate about digital marketing and want to join a dynamic, forward-thinking team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-gradient hover:opacity-90">
                <a href="#openings">
                  View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedGradient>

      {/* Why Join Us Section */}
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
                Why Join <span className="text-gradient">Viral Alchemy</span>?
              </h2>
              <p className="text-muted-foreground mb-6">
                At Viral Alchemy, we're more than just a digital marketing agency. We're a team of passionate individuals dedicated to helping businesses succeed in the digital landscape.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe in creating a supportive, collaborative environment where everyone can grow professionally and personally. Our team members are encouraged to bring their unique perspectives and ideas to the table.
              </p>
              <div className="space-y-4">
                {[
                  "Collaborative and supportive work environment",
                  "Opportunities to work on diverse and exciting projects",
                  "Continuous learning and professional development",
                  "Work-life balance with flexible scheduling",
                  "Remote-first culture with global team members",
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Team Collaboration"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Employee <span className="text-gradient">Benefits</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              We believe in taking care of our team members with a comprehensive benefits package.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Open <span className="text-gradient">Positions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Explore our current job openings and find the perfect role for your skills and experience.
            </motion.p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <Button asChild>
                      <a href={`mailto:saambarlin@gmail.com?subject=Application for ${job.title} Position`} className="flex items-center">
                        Apply Now <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
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
              Our Application <span className="text-gradient">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Here's what you can expect when applying for a position at Viral Alchemy.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Application Review", description: "We review your resume and application materials" },
              { step: 2, title: "Initial Interview", description: "A video call to discuss your experience and goals" },
              { step: 3, title: "Skills Assessment", description: "A practical task related to the position" },
              { step: 4, title: "Final Interview", description: "Meet the team and discuss next steps" },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className="bg-card border rounded-xl p-6 text-center h-full flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-va-purple text-white flex items-center justify-center text-lg font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-1/2 h-0.5 bg-va-purple transform translate-x-1/2 -translate-y-1/2">
                    <div className="absolute right-0 top-1/2 h-2 w-2 bg-va-purple rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}
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
            Don't See a Position That Fits Your Skills?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="bg-white text-va-purple hover:bg-white/90">
              <a href="mailto:saambarlin@gmail.com?subject=General Application to Viral Alchemy">
                Send Your Resume <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
