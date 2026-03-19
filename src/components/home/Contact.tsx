import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        
        {/* High Conversion CTA Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={styles.ctaBox}
        >
          <div className={styles.ctaBg} />
          <h2 className={`heading-md ${styles.ctaTitle}`}>Plan Your Dream Trip Today</h2>
          <p className={styles.ctaSubtitle}>Let us customize the perfect Kerala experience for you.</p>
          
          <div className={styles.ctaButtons}>
            <a href="tel:+918921918362" className={`btn ${styles.btnCall}`}>
              <Phone size={20} className={styles.btnIcon} />
              Call Now
            </a>
            <a href="https://wa.me/918921918362" target="_blank" rel="noreferrer" className={`btn ${styles.btnWa}`}>
              <FaWhatsapp size={20} className={styles.btnIcon} />
              WhatsApp
            </a>
            <a href="mailto:Jerry.ruhaholidays@gmail.com" className={`btn ${styles.btnQuote}`}>
              <Mail size={20} className={styles.btnIcon} />
              Get Free Quote
            </a>
          </div>
        </motion.div>

        {/* Contact Info & Map */}
        <div className={styles.infoGrid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.mapContainer}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.197025810452!2d75.81938361480502!3d11.24672695341258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bff00000001%3A0x80521e8e8e79e612!2sKovoor%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ruha Holidays Location"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`glass ${styles.infoBox}`}
          >
            <h3 className={styles.infoTitle}>Visit Our Office</h3>
            <p className={styles.infoText}>
              RUHA HOLIDAYS LLP <br />
              Kovoor, Kozhikode, <br />
              Kerala – 673008 <br />
              India
            </p>
            
            <hr className={styles.divider} />

            <h3 className={styles.infoTitle}>Contact Channels</h3>
            <p className={styles.infoText}>
              <strong>Phones:</strong><br />
              +91 8921918362 <br />
              +91 8281408837
            </p>
            <p className={styles.infoText}>
              <strong>Email:</strong><br />
              Jerry.ruhaholidays@gmail.com
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
