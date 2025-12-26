import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/common/ProjectCard';
import { AnimatedSection } from '@/components/common/AnimatedSection';

const featuredProjects = [
  {
    title: 'Enterprise ERP Platform',
    category: 'Enterprise Software',
    description: 'Complete redesign of a multi-module ERP system serving 10,000+ daily active users across manufacturing and logistics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    slug: 'enterprise-erp',
  },
  {
    title: 'POS Terminal Experience',
    category: 'Retail Technology',
    description: 'Next-generation point-of-sale system with seamless checkout flows and inventory management integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    slug: 'pos-system',
  },
  {
    title: 'Promode Agro Farms',
    category: 'Agriculture Tech',
    description: 'End-to-end digital transformation for agricultural operations including farm management and supply chain.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    slug: 'promode-agro',
  },
];

export function FeaturedWorkSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Selected projects showcasing end-to-end product design for complex enterprise systems.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/work" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              slug={project.slug}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
