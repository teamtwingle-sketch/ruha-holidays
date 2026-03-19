import Link from 'next/link';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="Ruha Holidays" style={{ height: '90px', width: 'auto', objectFit: 'contain', marginLeft: '-20px', marginRight: '-30px' }} />
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.65rem', fontWeight: 700, color: 'var(--color-white)', letterSpacing: '0.5px' }}>
                RUHA HOLIDAYS<span style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginLeft: '0.25rem', fontWeight: 600 }}>LLP</span>
              </span>
            </Link>
            <p className={styles.tagline}>"Your All Time Travel Partner"</p>
            <p className={styles.desc}>
              Travel That Touches the Soul. We operate with full transparency, honesty, and ethical responsibility in everything we do.
            </p>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#packages">Holidays packages</Link></li>
              <li><Link href="#services">Our Services</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.icon} />
                <span>Kovoor, Kozhikode, Kerala – 673008</span>
              </li>
              <li>
                <Phone size={18} className={styles.icon} />
                <span>+91 89219 18362</span>
              </li>
              <li>
                <Mail size={18} className={styles.icon} />
                <span>Jerry.ruhaholidays@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Ruha Holidays LLP. All Rights Reserved.
          </p>
          
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
