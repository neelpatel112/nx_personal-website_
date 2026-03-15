import styles from './SkeletonLoader.module.scss';

interface Props {
  lines?: number;
  showHeader?: boolean;
}

export default function SkeletonLoader({ lines = 3, showHeader = true }: Props) {
  return (
    <div className={styles.skeleton}>
      {showHeader && (
        <div className={styles.header}>
          <div className={`${styles.block} ${styles.dot}`} />
          <div className={`${styles.block} ${styles.dot}`} />
          <div className={`${styles.block} ${styles.dot}`} />
          <div className={`${styles.block} ${styles.date}`} />
        </div>
      )}
      <div className={`${styles.block} ${styles.title}`} />
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${styles.block} ${styles.line}`}
          style={{ width: i === lines - 1 ? '65%' : '100%' }}
        />
      ))}
      <div className={styles.footer}>
        <div className={`${styles.block} ${styles.pill}`} />
        <div className={`${styles.block} ${styles.pill}`} />
        <div className={`${styles.block} ${styles.pill}`} />
      </div>
    </div>
  );
}
