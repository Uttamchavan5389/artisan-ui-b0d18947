import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 0-100
}

const skills: Skill[] = [
  { name: 'Product Strategy', level: 95 },
  { name: 'Design Systems', level: 92 },
  { name: 'User Research', level: 88 },
  { name: 'Prototyping', level: 90 },
  { name: 'Visual Design', level: 85 },
  { name: 'Leadership', level: 87 },
];

export function SkillsRadar() {
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;
  const levels = 5;

  const angleStep = (2 * Math.PI) / skills.length;

  const getPoint = (angle: number, radius: number) => ({
    x: centerX + radius * Math.sin(angle),
    y: centerY - radius * Math.cos(angle),
  });

  const skillPoints = skills.map((skill, i) => {
    const angle = i * angleStep;
    const radius = (skill.level / 100) * maxRadius;
    return getPoint(angle, radius);
  });

  const skillPath = skillPoints.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
  ).join(' ') + ' Z';

  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      <svg viewBox="0 0 300 300" className="w-full h-auto">
        {/* Background circles */}
        {Array.from({ length: levels }, (_, i) => {
          const radius = ((i + 1) / levels) * maxRadius;
          return (
            <circle
              key={i}
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              className="opacity-50"
            />
          );
        })}

        {/* Axis lines */}
        {skills.map((_, i) => {
          const angle = i * angleStep;
          const end = getPoint(angle, maxRadius);
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={end.x}
              y2={end.y}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              className="opacity-50"
            />
          );
        })}

        {/* Skill polygon */}
        <motion.path
          d={skillPath}
          fill="hsl(var(--primary) / 0.15)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Skill points */}
        {skillPoints.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="5"
            fill="hsl(var(--primary))"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
          />
        ))}
      </svg>

      {/* Labels */}
      {skills.map((skill, i) => {
        const angle = i * angleStep;
        const labelRadius = maxRadius + 30;
        const pos = getPoint(angle, labelRadius);
        
        return (
          <motion.div
            key={skill.name}
            className="absolute text-xs font-medium text-foreground whitespace-nowrap"
            style={{
              left: pos.x,
              top: pos.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            {skill.name}
          </motion.div>
        );
      })}
    </div>
  );
}