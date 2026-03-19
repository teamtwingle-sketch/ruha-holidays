import { motion } from 'framer-motion';
import { Award, FileText, Calendar, Building2, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Credentials.module.css';

export default function Credentials() {
  return (
    <section className={`section ${styles.credSection}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className="heading-md">Trust & Transparency</h2>
          <p className={styles.subtitle}>Our Professional Credentials</p>
        </motion.div>

        <div className={styles.grid}>
          {/* Credentials Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass ${styles.card}`}
          >
            <h3 className={styles.cardTitle}>Registration Details</h3>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <Building2 size={20} className={styles.icon} />
                <div>
                  <span className={styles.label}>LLP Name</span>
                  <p className={styles.value}>RUHA HOLIDAYS LLP</p>
                </div>
              </div>
              
              <div className={styles.listItem}>
                <FileText size={20} className={styles.icon} />
                <div>
                  <span className={styles.label}>LLPIN</span>
                  <p className={styles.value}>ACV-0986</p>
                </div>
              </div>

              <div className={styles.listItem}>
                <Calendar size={20} className={styles.icon} />
                <div>
                  <span className={styles.label}>Date of Incorporation</span>
                  <p className={styles.value}>6 Feb 2026</p>
                </div>
              </div>

              <div className={styles.listItem}>
                <Award size={20} className={styles.icon} />
                <div>
                  <span className={styles.label}>Authority</span>
                  <p className={styles.value}>Government of India</p>
                </div>
              </div>
              
              <div className={styles.listItem}>
                <FileText size={20} className={styles.icon} />
                <div>
                  <span className={styles.label}>PAN</span>
                  <p className={styles.value}>ABNFR1626F</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`glass ${styles.card}`}
          >
            <h3 className={styles.cardTitle}>Contact Info</h3>
            <div className={styles.list}>
              <div className={styles.listItem}>
                <MapPin size={20} className={styles.icon} />
                <div>
                  <span className={styles.label}>Registered Address</span>
                  <p className={styles.value}>Kovoor, Kozhikode, Kerala – 673008</p>
                </div>
              </div>

              <div className={styles.listItem}>
                <Phone size={20} className={styles.icon} />
                <div>
                  <span className={styles.label}>Phone</span>
                  <p className={styles.value}>+91 89219 18362 <br /> +91 82814 08837</p>
                </div>
              </div>

              <div className={styles.listItem}>
                <Mail size={20} className={styles.icon} />
                <div>
                  <span className={styles.label}>Email Address</span>
                  <p className={styles.value}>Jerry.ruhaholidays@gmail.com</p>
                </div>
              </div>
            </div>

            <div className={styles.quoteBox}>
              "We operate with full transparency, honesty, and ethical responsibility."
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
