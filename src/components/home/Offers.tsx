import { motion } from 'framer-motion';
import { Tag, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import styles from './Offers.module.css';

const OFFERS = [
  "Flat 20% OFF on Honeymoon Packages",
  "Free Pickup for Kerala Trips",
  "Group Discounts Available",
  "Early Bird Offer – Save ₹1000"
];

export default function Offers() {
  return (
    <section id="offers" className={`section ${styles.offersSection}`}>
      <div className={`container ${styles.container}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={styles.content}
        >
          <div className={styles.badgeWrapper}>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={styles.badge}
            >
              <Tag size={16} />
              Limited Offer
            </motion.div>
          </div>

          <h2 className={`heading-md ${styles.title}`}>Premium Deals Just For You</h2>
          
          <ul className={styles.list}>
            {OFFERS.map((offer, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className={styles.listItem}
              >
                <CheckCircle2 color="var(--color-gold)" size={24} />
                <span>{offer}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className={styles.ctaWrapper}
          >
            <Link href="#contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Grab Offer Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
