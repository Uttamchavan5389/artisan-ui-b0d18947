import { Layout } from '@/components/layout/Layout';
import { ProjectCard } from '@/components/common/ProjectCard';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';

const allProjects = [
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
    title: 'Promode Agro Farms — ERP',
    category: 'Agriculture Tech',
    description: 'End-to-end digital transformation for agricultural operations including farm management and supply chain.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    slug: 'promode-agro',
  },
  {
    title: 'Promode Mobile & E-commerce',
    category: 'Mobile & Web',
    description: 'Consumer-facing mobile app and e-commerce platform for fresh produce delivery and farm subscriptions.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    slug: 'promode-mobile',
  },
  {
    title: 'AI Workflow Automation',
    category: 'AI/ML Systems',
    description: 'Intelligent workflow automation platform leveraging machine learning for document processing and decision support.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    slug: 'ai-workflow',
  },
  {
    title: 'Hyderabad Bike Mechanic',
    category: 'On-Demand Services',
    description: 'Location-based platform connecting bike owners with certified mechanics for doorstep repair services.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    slug: 'bike-mechanic',
  },
];

const Work = () => {
  return (
    <Layout>
      <section className="py-24 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <AnimatedSection className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary text-sm font-medium mb-4"
            >
              Selected Projects
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My <span className="gradient-text">Work</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A curated collection of enterprise design projects spanning ERP systems, 
              mobile applications, and AI-powered platforms.
            </p>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
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
    </Layout>
  );
};

export default Work;
