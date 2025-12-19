import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star } from 'lucide-react';
import { Activity } from '../../types';
import styles from './ActivityCard.module.css';

interface ActivityCardProps {
  activity: Activity;
  index?: number;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index = 0 }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.imageContainer}>
        <img 
          src={activity.image} 
          alt={activity.title} 
          className={styles.image}
        />
        <div className={styles.category}>
          {activity.category}
        </div>
        <div className={styles.price}>
          ${activity.price}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{activity.title}</h3>
        <p className={styles.description}>{activity.description}</p>
        
        <div className={styles.details}>
          <div className={styles.detail}>
            <Clock size={16} />
            <span>{activity.duration}</span>
          </div>
          <div className={styles.detail}>
            <Star size={16} fill="currentColor" />
            <span>{activity.rating}</span>
          </div>
        </div>
        
        <a 
          href={`https://wa.me/201276846064?text=I'm interested in booking the ${encodeURIComponent(activity.title)} activity.`}
          className={styles.bookButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </a>
      </div>
    </motion.div>
  );
};

export default ActivityCard;