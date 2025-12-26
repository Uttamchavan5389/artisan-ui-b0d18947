import { TestimonialCard } from '@/components/common/TestimonialCard';
import { AnimatedSection } from '@/components/common/AnimatedSection';

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
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 particle-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients and collaborators say about working together
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
