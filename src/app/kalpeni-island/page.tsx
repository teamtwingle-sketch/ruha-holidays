'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';
import styles from './page.module.css';
import Link from 'next/link';

export default function KalpeniIsland() {
  const itinerary = [
    { day: "Day 1", title: "Arrival at Kalpeni", activities: ["Arrival at Kalpeni by ship", "Meet & greet at jetty and transfer to AC accommodation", "Welcome drink & check-in", "Evening free at Koomel Beach / lagoon side", "Dinner & overnight stay at Kalpeni"] },
    { day: "Day 2", title: "Kalpeni Local Sightseeing", activities: ["Breakfast", "Island tour: village area, main jetty side, mosque surroundings, local life", "Lighthouse view point visit", "Lunch", "Evening lagoon time / beach walk", "Dinner & overnight stay at Kalpeni"] },
    { day: "Day 3", title: "Small Islands & Sandbanks Excursion", activities: ["Breakfast", "Full-day boat trip to nearby small islets / sandbanks around Kalpeni", "Swimming, lagoon experience and photo points", "Packed / island lunch", "Return to Kalpeni by evening", "Dinner & overnight stay at Kalpeni"] },
    { day: "Day 4", title: "Cheriyam Island (Full Day + Night Stay)", activities: ["Breakfast", "Transfer by boat to Cheriyam Island", "Full-day stay at Cheriyam: beach relaxation, lagoon swimming, shore walk", "Lunch at Cheriyam", "Overnight camp stay at Cheriyam (camp cot / tent as arranged)", "Dinner & night stay under the stars at Cheriyam"] },
    { day: "Day 5", title: "Cheriyam Sunrise & Return to Kalpeni", activities: ["Sunrise view at Cheriyam", "Breakfast at Cheriyam", "Free time for photography / lagoon dip", "Return boat transfer to Kalpeni around late morning / noon", "Lunch at Kalpeni", "Evening cultural interaction / free time at beach", "Dinner & final night stay at Kalpeni"] },
    { day: "Day 6", title: "Departure", activities: ["Breakfast", "Check-out", "Transfer to ship for return journey"] }
  ];

  const malayalamInclusions = [
    "ലക്ഷദ്വീപ് വിസിറ്റിംഗ് പെർമിറ്റ്",
    "Up and Down കപ്പൽ ടിക്കറ്റ്",
    "Ac റൂം ബീച്ച് സൈഡ് stay",
    "മൂന്നു നേരത്തെ ഭക്ഷണം, രാവിലത്തെ ചായ, വൈകുംനേരത്തെ ചായ",
    "കയാക്കിങ്",
    "സ്നോർക്കിലിങ്",
    "സ്ക്യൂബ diving",
    "ചെറിയം ദ്വീപ് ബോട്ട് ട്രാവലിങ്ങ്",
    "ലൈറ്റ് ഹൗസ് വിസിറ്റിംഗ്",
    "ട്രാവൽ ഗൈഡ്",
    "സൈറ്റ് സീയിങ്"
  ];

  const mainInclusions = [
    "Lakshadweep entry / visiting permit",
    "Up & down ship tickets",
    "AC room accommodation at Kalpeni",
    "Camp-style overnight stay at Cheriyam",
    "All meals (breakfast, lunch, dinner)",
    "Kayaking & snorkeling (one time, subject to weather)",
    "Glass-bottom boat ride (one time)",
    "Local sightseeing + lighthouse visit",
    "Cheriyam trip (full day + overnight)"
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599059047248-cb755e14f0cb?q=80&w=2000&auto=format&fit=crop')` }}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.heroContent}`}>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="heading-lg"
                    style={{ color: 'white' }}
                >
                    Kalpeni Island
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.2 }}
                    className={styles.subtitle}
                >
                    5 Nights / 6 Days Itinerary
                </motion.p>
            </div>
        </section>

        <section className="section container">
            <div className={styles.contentGrid}>
                <div className={styles.itinerarySection}>
                    <h2 className="heading-md">Tour Itinerary</h2>
                    <p className={styles.note}>(Sequence can be adjusted as per ship schedule & weather)</p>
                    
                    <div className={styles.timeline}>
                        {itinerary.map((day, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={styles.dayCard}
                            >
                                <div className={styles.dayHeader}>
                                    <div className={styles.dayBadge}><Calendar size={18}/> {day.day}</div>
                                    <h3>{day.title}</h3>
                                </div>
                                <ul className={styles.activityList}>
                                    {day.activities.map((activity, actIdx) => (
                                        <li key={actIdx}><span className={styles.bullet}>•</span>{activity}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className={styles.sidebar}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={styles.inclusionCard}
                    >
                        <h3>Main Inclusions</h3>
                        <ul className={styles.checkList}>
                            {mainInclusions.map((inc, i) => (
                                <li key={i}><Check size={18} className={styles.checkIcon}/> <span>{inc}</span></li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`${styles.inclusionCard} ${styles.malayalamCard}`}
                    >
                        <h3>പാക്കേജിൽ ഉൾപ്പെടുന്ന കാര്യങ്ങൾ</h3>
                        <ul className={styles.checkList}>
                            {malayalamInclusions.map((inc, i) => (
                                <li key={i}><Check size={18} className={styles.checkIcon}/> <span>{inc}</span></li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className={styles.bookCard}>
                        <h3>Ready to explore Kalpeni?</h3>
                        <Link href="/#contact" className="btn btn-primary" style={{ display: 'block', width: '100%', marginTop: '1rem', textAlign: 'center' }}>
                            Book This Package
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
