import { motion } from 'framer-motion';
import { Target, Leaf, Lightbulb, ShieldCheck } from 'lucide-react';
import styles from './CoreValues.module.css';

const VALUES = [
  { name: 'Customer Focus', icon: Target },
  { name: 'Sustainability', icon: Leaf },
  { name: 'Innovation', icon: Lightbulb },
  { name: 'Integrity', icon: ShieldCheck },
];

export default function CoreValues() {
  return (
    <section className={`section ${styles.valuesSection}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className="heading-md">Our Core Values</h2>
          <p className={styles.subtitle}>The principles that guide our journey with you.</p>
        </motion.div>

        <div className={styles.grid}>
          {VALUES.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`glass ${styles.card}`}
            >
              <div className={styles.iconWrapper}>
                <val.icon size={32} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{val.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
