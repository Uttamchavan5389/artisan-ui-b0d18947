import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experience = [
  {
    title: 'Principal Product Designer',
    company: 'Enterprise Solutions Inc.',
    period: '2020 — Present',
    description: 'Leading design strategy for a suite of enterprise products. Established design system used across 12 products. Reduced design-to-development handoff time by 40%.',
  },
  {
    title: 'Senior Product Designer',
    company: 'AgriTech Ventures',
    period: '2017 — 2020',
    description: 'Designed Promode Agro Farms platform from ground up. Created mobile and web experiences serving 50,000+ farmers. Led team of 4 designers.',
  },
  {
    title: 'Lead UX Designer',
    company: 'RetailTech Solutions',
    period: '2014 — 2017',
    description: 'Redesigned POS system for 2,000+ retail locations. Improved checkout speed by 35%. Introduced user research practice to organization.',
  },
  {
    title: 'UX Designer',
    company: 'Digital Agency Co.',
    period: '2010 — 2014',
    description: 'Worked on 50+ client projects spanning fintech, healthcare, and e-commerce. Developed expertise in enterprise software design.',
  },
];

const education = [
  {
    degree: 'Master of Design',
    school: 'National Institute of Design',
    year: '2010',
  },
  {
    degree: 'Bachelor of Fine Arts',
    school: 'University of Hyderabad',
    year: '2008',
  },
];

const certifications = [
  'Google UX Design Professional Certificate',
  'Interaction Design Foundation — Design Systems',
  'Nielsen Norman Group — UX Certification',
  'Figma — Design Systems Specialist',
];

const Resume = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-medium mb-4">
              Professional Background
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
              15+ years of experience designing enterprise products that scale.
            </p>
            <Button variant="hero" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Full Resume
            </Button>
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Experience</h2>
            </div>
            
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="gradient-border p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <p className="text-primary">{job.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm mt-1 md:mt-0">{job.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="gradient-border p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-primary text-sm">{edu.school}</p>
                  <p className="text-muted-foreground text-sm mt-2">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-secondary border border-border rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
