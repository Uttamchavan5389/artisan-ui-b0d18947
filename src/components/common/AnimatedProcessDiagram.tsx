import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Research',
    description: 'Understanding business goals, user needs, and technical constraints through stakeholder interviews and user research.',
    deliverables: ['User interviews', 'Competitive analysis', 'Requirements document'],
  },
  {
    number: '02',
    title: 'Define & Strategy',
    description: 'Synthesizing research into actionable insights and defining the product strategy and success metrics.',
    deliverables: ['User personas', 'Journey maps', 'Feature prioritization'],
  },
  {
    number: '03',
    title: 'Design & Prototype',
    description: 'Creating wireframes, visual designs, and interactive prototypes through iterative design sprints.',
    deliverables: ['Wireframes', 'UI designs', 'Interactive prototype'],
  },
  {
    number: '04',
    title: 'Test & Validate',
    description: 'Validating designs through usability testing and iterating based on user feedback.',
    deliverables: ['Usability tests', 'Design iterations', 'Validation report'],
  },
  {
    number: '05',
    title: 'Deliver & Support',
    description: 'Handing off designs to development with comprehensive documentation and ongoing support.',
    deliverables: ['Design specs', 'Asset library', 'Dev handoff'],
  },
];

export function AnimatedProcessDiagram() {
  return (
    <div className="relative">
      {/* Connection line */}
      <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden lg:block" />
      
      <div className="space-y-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="relative"
          >
            <div className="flex items-start gap-6 lg:gap-8">
              {/* Number indicator */}
              <motion.div
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-soft">
                  <span className="text-2xl font-bold gradient-text">{step.number}</span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 gradient-border p-6 group hover:shadow-card-hover transition-shadow duration-300">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" />
                </div>
                
                <p className="text-muted-foreground mb-4">{step.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {step.deliverables.map((deliverable, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-xs font-medium text-foreground"
                    >
                      <Check className="w-3 h-3 text-primary" />
                      {deliverable}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}