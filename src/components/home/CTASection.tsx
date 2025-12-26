import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="relative overflow-hidden rounded-3xl cta-gradient p-12 md:p-16 text-center"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 particle-bg opacity-20" />
          
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Start Exploring
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white/80 text-lg mb-10"
            >
              Case Studies, Process, Portfolio — One Click Away
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                variant="outline"
                size="xl"
                className="bg-white text-primary border-white hover:bg-white/90 hover:border-white/90"
                asChild
              >
                <Link to="/work" className="flex items-center gap-2">
                  Browse Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="xl"
                className="text-white hover:bg-white/10 border border-white/20"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
