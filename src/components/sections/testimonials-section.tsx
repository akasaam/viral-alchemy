
import { useRef } from "react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image?: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechStart Inc.",
      testimonial: "Viral Alchemy transformed our digital presence. Their strategic approach to social media marketing doubled our engagement and increased conversion rates by 35%.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder & CEO",
      company: "GrowFast Solutions",
      testimonial: "The SEO strategy implemented by Viral Alchemy helped us rank on the first page for our key terms within just 3 months. Our organic traffic has increased by over 200%.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "E-Commerce Manager",
      company: "StyleHouse",
      testimonial: "The team at Viral Alchemy understands our brand voice perfectly. Their content marketing strategy has positioned us as thought leaders in our industry.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Sales Director",
      company: "SaaS Pro",
      testimonial: "Since working with Viral Alchemy, our lead generation has increased by 89%. Their holistic approach to digital marketing has been a game-changer for our business.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      position: "Digital Strategist",
      company: "Innovative Designs",
      testimonial: "Viral Alchemy helped us create a stunning website that not only looks great but converts visitors into customers. Our conversion rate has improved by 45%.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Viral Alchemy.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Marquee speed="slow" className="py-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-80 md:w-96 p-6 mx-4 bg-card rounded-xl shadow-sm border"
            >
              <div className="flex items-start mb-4">
                {testimonial.image && (
                  <div className="mr-4 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
