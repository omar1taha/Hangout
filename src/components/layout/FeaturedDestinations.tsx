import React from "react";
import { motion } from "framer-motion";
import { Destination } from "../../types";
import DestinationCard from "../common/DestinationCard";
import styles from "./FeaturedDestinations.module.css";
import { cairoDestinations } from "../../data/cairoDestinations";

// Convert Cairo destinations to match Destination interface
const destinations: Destination[] = cairoDestinations.slice(0, 4).map((dest) => ({
  id: dest.id,
  name: dest.name,
  country: "Egypt",
  image: dest.image,
  price: dest.price,
  rating: dest.rating,
  reviewCount: dest.reviewCount,
  description: dest.description,
  highlights: [
    dest.arabicName,
    `Open: ${dest.hours}`,
    dest.price === 0 ? "Free Entry" : `EGP ${dest.price}`,
    `${dest.rating} ⭐ (${dest.reviewCount} reviews)`,
  ],
}));

const FeaturedDestinations: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Logo at top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.logo}
        >
          <div className={styles.logoWrapper}>
            <div className={styles.logoTop}>
              <span className={styles.logoLine}></span>
              <span className={styles.logoYear}>EST. 2024</span>
              <span className={styles.logoLine}></span>
            </div>
            <h1 className={styles.logoText}>HANGOUT</h1>
            <div className={styles.logoUnderline}></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Explore Cairo's Must-See Attractions</h2>
          <p className={styles.subtitle}>
            Discover the wonders of Egypt's capital city - from ancient pyramids to bustling bazaars and modern landmarks
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {destinations.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* <Button variant="outline" size="large">
            View All Destinations
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
