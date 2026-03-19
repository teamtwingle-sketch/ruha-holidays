import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div style={{ y, opacity }} className={styles.heroBackground}>
        <div className={styles.overlay} />
        <div
          className={styles.bgImageDiv}
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1602216056096-3b40cc0f576e?q=80&w=2071&auto=format&fit=crop')` }}
        />
      </motion.div>

      <div className={`container ${styles.contentContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={styles.badge}
          >
            <MapPin size={16} className={styles.badgeIcon} />
            <span>Kerala – God's Own Country</span>
          </motion.div>

          <h1 className={`heading-lg ${styles.title}`}>
            Travel That <br />
            <span className="text-gradient">Touches the Soul</span>
          </h1>

          <p className={styles.subtitle}>
            Your Trusted Travel Partner from Kerala. Experience premium backwaters, hills, and authentic tours.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={styles.actions}
          >
            <Link href="#contact" className="btn btn-primary">
              Book Now
            </Link>
            <Link href="#packages" className="btn btn-outline glass" style={{ borderColor: 'var(--glass-border)' }}>
              Explore Packages
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
