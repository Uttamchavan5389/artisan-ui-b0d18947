import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code2, Palette, Users } from 'lucide-react';

const skills = [
  { name: 'Product Strategy', icon: Briefcase },
  { name: 'Design Systems', icon: Palette },
  { name: 'User Research', icon: Users },
  { name: 'Prototyping', icon: Code2 },
  { name: 'Enterprise UX', icon: Award },
  { name: 'Team Leadership', icon: GraduationCap },
];

const tools = [
  'Figma', 'Sketch', 'Adobe XD', 'Framer', 
  'Principle', 'Miro', 'Notion', 'Jira',
  'React', 'TypeScript', 'Tailwind CSS', 'Storybook'
];

const About = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Principal <span className="gradient-text">Product Designer</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Uttam Kumar, a product designer with 15+ years of experience creating 
              enterprise-grade design systems and complex digital products. I specialize 
              in transforming intricate business processes into intuitive user experiences.
            </p>
          </AnimatedSection>

          {/* Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <AnimatedSection>
              <div className="gradient-border p-8 h-full">
                <h2 className="text-2xl font-bold text-foreground mb-6">My Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I started my design career in 2009, initially working on print and branding 
                    projects. The shift to digital product design came naturally as I became 
                    fascinated by the challenge of designing systems that thousands of people 
                    use daily.
                  </p>
                  <p>
                    Over the years, I've led design for enterprise platforms handling millions 
                    in transactions, agricultural management systems feeding communities, and 
                    retail technologies powering thousands of stores.
                  </p>
                  <p>
                    My approach combines deep empathy for end-users with a strategic understanding 
                    of business constraints. I believe the best designs are invisible—they just work.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="gradient-border p-8 h-full">
                <h2 className="text-2xl font-bold text-foreground mb-6">Philosophy</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Simplicity is the ultimate sophistication.</strong> 
                    {' '}Enterprise software doesn't have to be complex. I focus on reducing cognitive 
                    load while maintaining powerful functionality.
                  </p>
                  <p>
                    <strong className="text-foreground">Design systems scale businesses.</strong> 
                    {' '}A well-crafted design system reduces development time, ensures consistency, 
                    and empowers teams to move faster.
                  </p>
                  <p>
                    <strong className="text-foreground">Data informs, users inspire.</strong> 
                    {' '}I combine quantitative analytics with qualitative research to make decisions 
                    that truly serve user needs.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Skills Grid */}
          <AnimatedSection className="mb-24">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">
              Core <span className="gradient-text">Expertise</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="gradient-border p-6 text-center hover:shadow-card-hover transition-shadow"
                >
                  <skill.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Tools */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">
              Tools & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-secondary border border-border rounded-full text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
