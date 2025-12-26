import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  index?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="group"
    >
      <article className="gradient-border p-6 h-full transition-all duration-300 hover:shadow-card-hover">
        <blockquote className="text-foreground text-sm leading-relaxed mb-6">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
            {avatar ? (
              <img src={avatar} alt={author} className="w-full h-full object-cover" />
            ) : (
              <span className="text-primary font-semibold text-sm">
                {author.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <p className="text-foreground font-medium text-sm">{author}</p>
            <p className="text-muted-foreground text-xs">
              {role} @ {company}
            </p>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
