import React from "react";
import { motion } from "framer-motion";
// import { SearchFilters } from "../../types";
// import SearchBar from '../common/SearchBar';
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.background}>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful destination"
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Discover Your Next
            <span className={styles.highlight}> Amazing Adventure</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore breathtaking destinations, create unforgettable memories, and embark on journeys that will inspire you
            for a lifetime.
          </motion.p>

          <div className={styles.searchContainer}>{/* <SearchBar onSearch={onSearch} /> */}</div>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className={styles.stat}>
            <div className={styles.statNumber}>200+</div>
            <div className={styles.statLabel}>Destinations</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>50K+</div>
            <div className={styles.statLabel}>Happy Travelers</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>4.9</div>
            <div className={styles.statLabel}>Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
