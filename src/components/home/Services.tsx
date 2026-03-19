import { motion } from 'framer-motion';
import {
  Car, Hotel, Anchor, Map, Tent, Gem, Waves, Backpack, LibraryBig,
  GraduationCap, Users, UserCheck, Briefcase, Heart, BookOpen, Compass, 
  MapPin, Sliders
} from 'lucide-react';
import styles from './Services.module.css';

const CORE_SERVICES = [
  { name: 'Vehicle Arrangements', icon: Car },
  { name: 'Resort Booking', icon: Hotel },
  { name: 'Houseboat Booking', icon: Anchor },
  { name: 'Backpacking Trips', icon: Map },
  { name: 'Tent Stay', icon: Tent },
  { name: 'Wedding Trips', icon: Gem },
  { name: 'Cruise Journey', icon: Waves },
  { name: 'Tour Packages', icon: Backpack },
  { name: 'Pilgrim Tours', icon: LibraryBig },
];

const TOUR_SERVICES = [
  { name: 'School Tours', icon: BookOpen },
  { name: 'Small Group Tours', icon: Users },
  { name: 'Staff Tours', icon: UserCheck },
  { name: 'Corporate Tours', icon: Briefcase },
  { name: 'Honeymoon Tours', icon: Heart },
  { name: 'College Tours', icon: GraduationCap },
  { name: 'Adventure Trips', icon: Compass },
  { name: 'Group Joining Tours', icon: MapPin },
  { name: 'Customized Packages', icon: Sliders },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="container">
        {/* Core Services */}
        <div className={styles.sectionBlock}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <h2 className={`heading-md ${styles.title}`}>Our Core Services</h2>
            <p className={styles.subtitle}>Everything you need for a perfectly planned journey.</p>
          </motion.div>

          <div className={styles.grid}>
            {CORE_SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={styles.card}
              >
                <service.icon size={32} className={styles.icon} />
                <h3 className={styles.cardTitle}>{service.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tour Services */}
        <div className={styles.sectionBlock}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.header}
          >
            <h2 className={`heading-md ${styles.title}`}>Types of Tours</h2>
            <p className={styles.subtitle}>Curated tour types catering to every group and occasion.</p>
          </motion.div>

          <div className={`${styles.slider} hide-scrollbar`}>
            {TOUR_SERVICES.map((tour, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={styles.tourCard}
              >
                <div className={styles.tourIconWrapper}>
                  <tour.icon size={28} className={styles.tourIcon} />
                </div>
                <h4 className={styles.tourName}>{tour.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
