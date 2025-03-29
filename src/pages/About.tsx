import { Layout } from "@/components/layout/layout";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Heart, Lightbulb, LineChart, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      bio: "With over 15 years of digital marketing experience, Alex founded Viral Alchemy with a vision to help businesses achieve exceptional growth through innovative marketing strategies.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "Sarah brings her 10+ years of creative expertise to lead our design team, ensuring all client projects have a unique and impactful visual identity.",
    },
    {
      id: 3,
      name: "David Chen",
      position: "Head of SEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      bio: "With a data-driven approach and deep understanding of search algorithms, David has helped countless businesses achieve top rankings in search results.",
    },
    {
      id: 4,
      name: "Michelle Rodriguez",
      position: "Social Media Strategist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      bio: "Michelle's innovative social media campaigns have helped our clients build engaged communities and achieve viral growth across platforms.",
    },
    {
      id: 5,
      name: "James Wilson",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "James leads our development team, creating high-performance websites and applications that provide exceptional user experiences.",
    },
    {
      id: 6,
      name: "Emily Lee",
      position: "Content Marketing Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      bio: "Emily's compelling storytelling and content strategies have established many of our clients as thought leaders in their industries.",
    },
  ];

  const values = [
    {
      id: 1,
      title: "Data-Driven Approach",
      description: "We make decisions based on data, not assumptions, to deliver measurable results for our clients.",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Client-Centered",
      description: "We put our clients' needs first, building long-term partnerships through transparency and trust.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Innovation",
      description: "We constantly explore new strategies and technologies to keep our clients ahead of the competition.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Results-Focused",
      description: "We're committed to delivering tangible business outcomes that drive growth and success.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      id: 5,
      title: "Passion",
      description: "We're passionate about digital marketing and dedicated to excellence in everything we do.",
      icon: <Heart className="h-6 w-6" />,
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
              About <span className="text-gradient">Viral Alchemy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              We're a team of digital marketing experts passionate about helping businesses grow through innovative and data-driven strategies.
            </motion.p>
          </div>
        </div>
      </AnimatedGradient>

      {/* Our Story Section */}
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
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, Viral Alchemy was born from a vision to transform how businesses approach digital marketing. We saw too many companies struggling with outdated strategies and fragmented approaches that didn't deliver results.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founder, Alex Johnson, assembled a team of digital marketing experts with a shared passion for data-driven strategies and innovative approaches. From our humble beginnings with just three team members, we've grown into a full-service digital marketing agency with a proven track record of success.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to have helped hundreds of businesses across diverse industries achieve exceptional growth through our tailored digital marketing solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 right-6 bottom-6 bg-va-purple/10 rounded-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="rounded-xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our <span className="text-gradient">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              These core principles guide everything we do and shape how we work with our clients.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-gradient flex items-center justify-center mb-6">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
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
              Meet Our <span className="text-gradient">Team</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Our team of experts is passionate about digital marketing and dedicated to helping our clients succeed.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                className="bg-card border rounded-xl overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-va-purple font-medium mb-4">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">
                Why Choose <span className="text-gradient">Viral Alchemy</span>?
              </h2>
              <div className="space-y-4">
                {[
                  "Experienced team of digital marketing experts",
                  "Proven track record of delivering results",
                  "Tailored strategies aligned with your business goals",
                  "Data-driven approach to maximize ROI",
                  "Transparent reporting and communication",
                  "Long-term partnerships based on trust and results",
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
              className="order-1 lg:order-2"
            >
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
                alt="Team Meeting"
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
            Ready to Grow Your Business With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl opacity-90 max-w-3xl mx-auto mb-8"
          >
            Let's create a customized digital marketing strategy that drives real results for your business.
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

export default About;
