import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

const experiences: TimelineItem[] = [
  {
    year: '2020 - Present',
    title: 'Principal Product Designer',
    company: 'Enterprise Solutions Inc',
    location: 'Hyderabad, India',
    description: 'Leading design strategy for enterprise-grade platforms serving 50,000+ users.',
    highlights: [
      'Led redesign of ERP platform reducing training time by 60%',
      'Built and scaled design system across 8 product teams',
      'Mentored team of 6 designers',
    ],
  },
  {
    year: '2017 - 2020',
    title: 'Senior Product Designer',
    company: 'TechFlow Systems',
    location: 'Bangalore, India',
    description: 'Designed end-to-end POS and retail management solutions.',
    highlights: [
      'Shipped POS system to 2,000+ retail locations',
      'Reduced checkout time by 35% through UX optimization',
      'Established user research practice',
    ],
  },
  {
    year: '2014 - 2017',
    title: 'Product Designer',
    company: 'AgriTech Solutions',
    location: 'Hyderabad, India',
    description: 'Created digital platforms for agricultural supply chain management.',
    highlights: [
      'Onboarded 50,000+ farmers to digital platform',
      'Reduced post-harvest losses by 25%',
      'Won AgriTech Innovation Award 2016',
    ],
  },
  {
    year: '2010 - 2014',
    title: 'UX Designer',
    company: 'Digital Agency',
    location: 'Mumbai, India',
    description: 'Designed web and mobile experiences for various clients.',
    highlights: [
      'Delivered 40+ successful client projects',
      'Introduced design thinking workshops',
      'Grew UX practice from 2 to 8 designers',
    ],
  },
];

export function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.button
              key={exp.year}
              onClick={() => setActiveIndex(index)}
              className={`relative flex items-start gap-6 w-full text-left p-4 rounded-xl transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-card shadow-card-hover'
                  : 'hover:bg-card/50'
              }`}
              whileHover={{ x: 4 }}
            >
              {/* Dot */}
              <div className="relative z-10">
                <motion.div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    activeIndex === index
                      ? 'border-primary bg-primary'
                      : 'border-border bg-background'
                  }`}
                  animate={{
                    scale: activeIndex === index ? 1.1 : 1,
                  }}
                >
                  <Calendar className={`w-4 h-4 ${activeIndex === index ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                </motion.div>
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-primary">{exp.year}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{exp.title}</h3>
                <p className="text-muted-foreground text-sm">{exp.company}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Details panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="gradient-border p-8 h-fit sticky top-24"
        >
          <span className="inline-block text-primary text-sm font-medium mb-2">
            {experiences[activeIndex].year}
          </span>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {experiences[activeIndex].title}
          </h3>
          
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="w-4 h-4" />
              {experiences[activeIndex].company}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {experiences[activeIndex].location}
            </span>
          </div>

          <p className="text-muted-foreground mb-6">
            {experiences[activeIndex].description}
          </p>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Key Achievements</h4>
            {experiences[activeIndex].highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}