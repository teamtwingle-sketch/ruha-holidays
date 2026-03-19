import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={`container ${styles.grid}`}>
        
        {/* About Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h2 className="heading-md">
            About <span className="text-gradient">Ruha Holidays</span>
          </h2>
          
          <div className={styles.textStack}>
            <p>
              Welcome to Ruha Holidays, your trusted travel companion from Kerala – God’s Own Country. We create meaningful travel experiences that stay for a lifetime.
            </p>
            <p className={styles.timeline}>
              Started in <strong>2020 as Santa Holidays</strong> &rarr; Rebranded in <strong>2023</strong> &rarr; Became LLP in <strong>2026</strong>.
            </p>
            <p>
              We offer complete travel solutions including family trips, school tours, group tours, and pilgrimages. Our strong network of vehicles, resorts, and houseboats ensures seamless travel.
            </p>
            <p>
              With our local expertise, we showcase Kerala’s backwaters, hill stations, and rich culture like no one else.
            </p>
            <blockquote className={styles.quote}>
              "Ruha Holidays – Travel That Touches the Soul."
            </blockquote>
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.visionMission}
        >
          <div className={`glass ${styles.card}`}>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <ul className={styles.list}>
              <li>Create lasting memories</li>
              <li>Become India's trusted travel companion</li>
            </ul>
          </div>

          <div className={`glass ${styles.card}`}>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <ul className={styles.list}>
              <li>Comprehensive travel solutions</li>
              <li>Seamless and safe travel</li>
              <li>Showcase Kerala's authentic beauty</li>
              <li>Customer-focused growth and care</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
