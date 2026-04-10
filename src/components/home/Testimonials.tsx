import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    id: 1,
    name: 'Anjali Menon',
    initial: 'A',
    color: '#ff5722',
    date: '2 months ago',
    text: 'Our family trip to Munnar was organized perfectly by Ruha Holidays. The resort booking and vehicle arrangement were top-notch. Truly travel that touches the soul!',
    rating: 5
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    initial: 'R',
    color: '#3f51b5',
    date: '4 months ago',
    text: 'The houseboat experience in Alleppey was magical. The staff was courteous, and the food was amazing. Highly recommend them for Kerala tours.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sneha & Arun',
    initial: 'S',
    color: '#e91e63',
    date: '1 week ago',
    text: 'We booked our honeymoon package with Ruha Holidays. The premium arrangements and romantic setups were exactly what we dreamed of. Thank you!',
    rating: 5
  },
  {
    id: 4,
    name: 'Dr. Ramesh Kumar',
    initial: 'D',
    color: '#009688',
    date: '5 months ago',
    text: 'Organized a staff tour for 40 people. Seamless travel, great stay in Wayanad, and excellent coordination. Fully transparent and reliable.',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className={`section ${styles.testiSection}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <div className={styles.googleBadge}>
            <FaGoogle size={32} color="#4285F4" className={styles.headerGoogleIcon} />
            <div className={styles.googleStats}>
              <span className={styles.googleRatingText}>Excellent</span>
              <div className={styles.googleStars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#FBBC05" color="#FBBC05" strokeWidth={0} />
                ))}
              </div>
              <span className={styles.ratingSubtext}>Based on exceptional reviews</span>
            </div>
          </div>
          <h2 className="heading-md" style={{ marginTop: '2rem' }}>What Our Guests Say</h2>
        </motion.div>

        <div className={styles.carouselWrapper}>
          <button onClick={prevReview} className={`${styles.navBtn} ${styles.prevBtn}`} aria-label="Previous review">
            <ChevronLeft size={24} />
          </button>

          <div className={styles.carouselInner}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={styles.reviewCard}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -10000) {
                    nextReview();
                  } else if (swipe > 10000) {
                    prevReview();
                  }
                }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.avatar} style={{ backgroundColor: REVIEWS[currentIndex].color }}>
                    {REVIEWS[currentIndex].initial}
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{REVIEWS[currentIndex].name}</h4>
                    <span className={styles.reviewDate}>{REVIEWS[currentIndex].date}</span>
                  </div>
                  <FaGoogle size={24} color="#4285F4" className={styles.googleIconCard} />
                </div>

                <div className={styles.starsRow}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < REVIEWS[currentIndex].rating ? '#FBBC05' : 'transparent'}
                      color="#FBBC05"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className={styles.reviewText}>"{REVIEWS[currentIndex].text}"</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={nextReview} className={`${styles.navBtn} ${styles.nextBtn}`} aria-label="Next review">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.dots}>
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={styles.reviewCta}
        >
          <a
            href="https://g.page/r/CY5tL8EqZ6WWEBM/review"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <FaGoogle size={18} style={{ marginRight: '0.6rem', color: '#4285F4' }} />
            Write a Review on Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
