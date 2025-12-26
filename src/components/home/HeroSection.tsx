import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 particle-bg opacity-30" />
      <div className="hero-glow top-1/4 left-1/4 animate-pulse-glow" />
      <div className="hero-glow bottom-1/4 right-1/4 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-accent-purple/20 to-accent-violet/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-accent-violet/20 to-accent-cyan/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Available for new projects</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Product Designer
            <br />
            <span className="gradient-text">For Creative Teams</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Principal Product Designer with 15+ years of experience building 
            enterprise-grade systems that scale. Specializing in ERP, POS, 
            and complex workflow platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/work" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
