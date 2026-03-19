import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import styles from './Packages.module.css';

const PACKAGES = [
  {
    id: 1,
    title: 'Munnar Hill Station Package',
    duration: '3 Days / 2 Nights',
    highlights: 'Tea plantations & waterfalls',
    price: '₹4,999',
    image: '/munnar.jpg'
  },

  {
    id: 2,
    title: 'Alleppey Houseboat Experience',
    duration: '2 Days / 1 Night',
    highlights: 'Backwater cruise & local food',
    price: '₹6,999',
    image: '/Gemini_.png'
  },
  {
    id: 3,
    title: 'Wayanad Adventure Trip',
    duration: 'Flexible',
    highlights: 'Trekking & camping in wild',
    price: '₹5,999',
    image: '/Gemini_Generated_Image_hiiilbhiiilbhiii.png'
  },
  {
    id: 4,
    title: 'Kerala Honeymoon Package',
    duration: 'Customizable',
    highlights: 'Romantic luxury stay & dining',
    price: '₹9,999',
    image: '/Gemini_Generated_Image_1j4bl11j4bl11j4b.png'
  }
];

export default function Packages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PACKAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideLeft = () => setCurrentIndex((prev) => (prev - 1 + PACKAGES.length) % PACKAGES.length);
  const slideRight = () => setCurrentIndex((prev) => (prev + 1) % PACKAGES.length);

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="packages" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={`heading-md ${styles.title}`}>Featured Holiday Plans</h2>
          <p className={styles.subtitle}>Curated premium travel experiences for you.</p>
        </motion.div>

        {/* Carousel for Mobile / Central View */}
        <div className={styles.carouselWrapper}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={slideLeft} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className={styles.carouselContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={styles.card}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -10000) {
                    slideRight();
                  } else if (swipe > 10000) {
                    slideLeft();
                  }
                }}
              >
                <div className={styles.imageWrapper}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url('${PACKAGES[currentIndex].image}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
                  />
                  <div className={styles.hoverOverlay} />
                  <div className={styles.priceTag}>
                    From {PACKAGES[currentIndex].price}
                  </div>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{PACKAGES[currentIndex].title}</h3>
                  <div className={styles.metaRow}>
                    <div className={styles.meta}>
                      <Clock size={16} className={styles.icon} />
                      <span>{PACKAGES[currentIndex].duration}</span>
                    </div>
                  </div>
                  <div className={styles.metaRow}>
                    <div className={styles.meta}>
                      <MapPin size={16} className={styles.icon} />
                      <span>{PACKAGES[currentIndex].highlights}</span>
                    </div>
                  </div>
                  <Link href="#contact" className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }}>
                    Book Now
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={slideRight} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.dots}>
          {PACKAGES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Desktop Grid View (Hidden on Mobile) */}
        <div className={styles.desktopGrid}>
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.desktopCard}
            >
              <div className={styles.imageWrapper}>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url('${pkg.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}
                />
                <div className={styles.hoverOverlay} />
                <div className={styles.priceTag}>
                  From {pkg.price}
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <div className={styles.metaRow}>
                  <div className={styles.meta}>
                    <Clock size={16} className={styles.icon} />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.meta}>
                    <MapPin size={16} className={styles.icon} />
                    <span>{pkg.highlights}</span>
                  </div>
                </div>
                <Link href="#contact" className="btn btn-outline" style={{ marginTop: '1rem', width: '100%' }}>
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

