import { useRef } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/common/TestimonialCard';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "Uttam transformed our complex ERP workflows into intuitive experiences. Our support tickets dropped by 60% after the redesign.",
    author: "Sarah Chen",
    role: "VP of Product",
    company: "TechFlow Inc",
  },
  {
    quote: "Working with Uttam was a game-changer. He understood our enterprise constraints and delivered a design system that our team actually uses.",
    author: "Marcus Johnson",
    role: "Engineering Director",
    company: "RetailPro",
  },
  {
    quote: "The attention to detail in the POS terminal design exceeded our expectations. It's not just beautiful—it's incredibly functional.",
    author: "Priya Sharma",
    role: "CEO",
    company: "QuickMart",
  },
  {
    quote: "Uttam's strategic approach to design helped us reduce development time by 40%. His documentation and handoff process is exemplary.",
    author: "David Williams",
    role: "CTO",
    company: "AgriTech Solutions",
  },
  {
    quote: "Best design partnership we've had. Uttam thinks like a product owner while executing like a world-class designer.",
    author: "Jennifer Lee",
    role: "Product Manager",
    company: "FinanceFlow",
  },
  {
    quote: "The enterprise design system Uttam built has become the foundation of all our products. Truly scalable thinking.",
    author: "Robert Martinez",
    role: "Design Lead",
    company: "CloudStack",
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-h2 font-bold text-foreground mb-4">
            Loved by <span className="gradient-text">Teams Worldwide</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients and collaborators say about working together
          </p>
        </AnimatedSection>

        {/* Scroll buttons */}
        <div className="flex justify-end gap-2 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            className="rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            className="rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[350px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-border"
            />
          ))}
        </div>
      </div>

      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}