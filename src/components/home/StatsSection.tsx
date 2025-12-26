import { StatCard } from '@/components/common/StatCard';
import { AnimatedSection } from '@/components/common/AnimatedSection';

const stats = [
  {
    value: '15+',
    label: 'Years Experience',
    description: 'Crafting enterprise-grade product designs',
  },
  {
    value: '50+',
    label: 'Projects Delivered',
    description: 'From startups to Fortune 500 companies',
  },
  {
    value: '100+',
    label: 'Design Systems',
    description: 'Custom component libraries built',
  },
  {
    value: '8+',
    label: 'Industries Served',
    description: 'Agriculture, Retail, Finance, Healthcare & more',
  },
];

export function StatsSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Impact in <span className="gradient-text">Numbers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering scalable design solutions that drive real business outcomes.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
