import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './MobileBottomBar.module.css';

export default function MobileBottomBar() {
  return (
    <div className={styles.bottomBar}>
      <a href="tel:+918921918362" className={`${styles.actionBtn} ${styles.callBtn}`}>
        <Phone size={20} className={styles.icon} />
        <span>Call Now</span>
      </a>
      <a href="https://wa.me/918921918362" target="_blank" rel="noreferrer" className={`${styles.actionBtn} ${styles.waBtn}`}>
        <FaWhatsapp size={20} className={styles.icon} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
