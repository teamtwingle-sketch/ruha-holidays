import { FaWhatsapp } from 'react-icons/fa';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918921918362"
      target="_blank"
      rel="noreferrer"
      className={styles.floatingBtn}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className={styles.tooltip}>Chat with us!</span>
    </a>
  );
}
