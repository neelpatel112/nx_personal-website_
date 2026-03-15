'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../types/index';
import styles from './ProjectCard.module.scss';

interface Props {
  project: Project;
}

const accentMap: Record<string, string> = {
  cyan:   '#00f5d4',
  violet: '#7c3aed',
  amber:  '#f59e0b',
  rose:   '#f43f5e',
};

export default function ProjectCard({ project }: Props) {
  const [hovered, setHovered] = useState(false);
  const accent = accentMap[project.accentColor];

  return (
    <motion.div
      className={styles.card}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{ '--accent': accent } as React.CSSProperties}
    >
      <div className={styles.topBar}>
        <div className={styles.windowDots}>
          <span className={styles.dot} style={{ background: '#f43f5e' }} />
          <span className={styles.dot} style={{ background: '#f59e0b' }} />
          <span className={styles.dot} style={{ background: '#22c55e' }} />
        </div>
        <span className={styles.dateRange}>{project.dateRange}</span>
        <span className={styles.statusBadge} data-status={project.status}>
          {project.status === 'in-progress' ? '● Live' : '✓ Done'}
        </span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <AnimatePresence mode="wait">
          {hovered ? (
            <motion.p
              key="long"
              className={styles.desc}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {project.longDescription}
            </motion.p>
          ) : (
            <motion.p
              key="short"
              className={styles.desc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className={styles.stack}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, delay: 0.05 }}
          >
            {project.techStack.map((tech) => (
              <span key={tech} className={styles.pill}>
                {tech}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.footer}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Live Demo ↗
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub ↗
          </a>
        )}
        {!project.liveUrl && !project.githubUrl && (
          <span className={styles.linkMuted}>github.com/neelpatel112 ↗</span>
        )}
      </div>

      <motion.div
        className={styles.glowBorder}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
} 
