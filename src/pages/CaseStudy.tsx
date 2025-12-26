import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Case study data
const caseStudies: Record<string, {
  title: string;
  category: string;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string[];
  duration: string;
  team: string;
  role: string;
  images: string[];
}> = {
  'enterprise-erp': {
    title: 'Enterprise ERP Platform',
    category: 'Enterprise Software',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    overview: 'A complete redesign of a multi-module enterprise resource planning system serving over 10,000 daily active users across manufacturing, logistics, and inventory management.',
    problem: 'The existing ERP system suffered from poor usability, resulting in high training costs and frequent support tickets. Users spent an average of 4 hours learning each module, and error rates in data entry were unacceptably high.',
    solution: 'I led a user-centered redesign focusing on workflow optimization, consistent interaction patterns, and progressive disclosure. We created a modular design system that reduced cognitive load while maintaining access to advanced features.',
    impact: [
      '60% reduction in training time for new users',
      '45% decrease in data entry errors',
      '35% improvement in task completion speed',
      '$2M annual savings in support costs',
    ],
    duration: '18 months',
    team: '12 people',
    role: 'Principal Product Designer',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    ],
  },
  'pos-system': {
    title: 'POS Terminal Experience',
    category: 'Retail Technology',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    overview: 'Next-generation point-of-sale system designed for speed, reliability, and seamless integration with inventory management.',
    problem: 'Retail staff struggled with slow checkout processes, leading to customer frustration and lost sales. The existing system required extensive training and had no offline capabilities.',
    solution: 'Designed an intuitive touch-first interface with minimal tap-to-complete workflows. Implemented offline-first architecture and predictive inventory alerts.',
    impact: [
      '35% faster checkout times',
      '90% reduction in transaction errors',
      'Deployed to 2,000+ retail locations',
      '99.9% uptime with offline capability',
    ],
    duration: '12 months',
    team: '8 people',
    role: 'Lead UX Designer',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&q=80',
      'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&q=80',
    ],
  },
  'promode-agro': {
    title: 'Promode Agro Farms — ERP',
    category: 'Agriculture Tech',
    heroImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
    overview: 'End-to-end digital transformation for agricultural operations including farm management, supply chain, and distribution.',
    problem: 'Farmers lacked visibility into operations, relying on paper records and manual processes. Supply chain inefficiencies led to 30% post-harvest losses.',
    solution: 'Built a comprehensive platform for farm planning, resource management, and real-time supply chain tracking. Mobile-first design for field workers with offline sync.',
    impact: [
      '50,000+ farmers onboarded',
      '25% reduction in post-harvest losses',
      '3x improvement in supply chain visibility',
      'Featured in AgriTech Innovation Awards',
    ],
    duration: '24 months',
    team: '15 people',
    role: 'Senior Product Designer',
    images: [
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80',
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
    ],
  },
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug] : null;

  if (!study) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Case study not found</h1>
            <Button variant="outline" asChild>
              <Link to="/work">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Work
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
            <span className="block text-primary text-sm font-medium mb-3">{study.category}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">{study.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Meta Info */}
          <AnimatedSection className="grid grid-cols-3 gap-6 mb-16">
            <div className="gradient-border p-4 text-center">
              <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground text-xs mb-1">Duration</p>
              <p className="text-foreground font-medium text-sm">{study.duration}</p>
            </div>
            <div className="gradient-border p-4 text-center">
              <Users className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground text-xs mb-1">Team Size</p>
              <p className="text-foreground font-medium text-sm">{study.team}</p>
            </div>
            <div className="gradient-border p-4 text-center">
              <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground text-xs mb-1">My Role</p>
              <p className="text-foreground font-medium text-sm">{study.role}</p>
            </div>
          </AnimatedSection>

          {/* Overview */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{study.overview}</p>
          </AnimatedSection>

          {/* Problem */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
            <div className="gradient-border p-6">
              <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
            </div>
          </AnimatedSection>

          {/* Solution Images */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Design Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.images.map((img, index) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}
                >
                  <img
                    src={img}
                    alt={`${study.title} design ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">{study.solution}</p>
          </AnimatedSection>

          {/* Impact */}
          <AnimatedSection className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.impact.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 gradient-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Navigation */}
          <AnimatedSection className="flex justify-between items-center pt-8 border-t border-border">
            <Button variant="outline" asChild>
              <Link to="/work">
                <ArrowLeft className="w-4 h-4 mr-2" />
                All Projects
              </Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Start a Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
