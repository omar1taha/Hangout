import React from "react";
import { motion } from "framer-motion";
import { Activity } from "../../types";
import ActivityCard from "../common/ActivityCard";
import styles from "./PopularActivities.module.css";
import { cairoActivities, cairoDestinations } from "../../data/cairoDestinations";

// Combine activities with additional destinations for more variety
const activities: Activity[] = [
  // First, include all Cairo activities
  ...cairoActivities.map((activity) => ({
    ...activity,
    price: activity.price,
  })),
  // Add some destinations as activities
  {
    id: "5",
    title: "Pyramids & Sphinx Tour",
    description: cairoDestinations[0].description,
    image: cairoDestinations[0].image,
    price: cairoDestinations[0].price,
    duration: "4-5 hours",
    rating: cairoDestinations[0].rating,
    category: "Historical Sites",
  },
  {
    id: "6",
    title: "Khan El Khalili Shopping Tour",
    description: cairoDestinations[2].description,
    image: cairoDestinations[2].image,
    price: 50,
    duration: "3-4 hours",
    rating: cairoDestinations[2].rating,
    category: "Cultural Experience",
  },
];

const PopularActivities: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Cairo Activities & Experiences</h2>
          <p className={styles.subtitle}>
            Experience the best of Cairo with our handpicked tours, from ancient wonders to modern adventures along the Nile
          </p>
        </motion.div>

        <div className={styles.grid}>
          {activities.map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularActivities;
