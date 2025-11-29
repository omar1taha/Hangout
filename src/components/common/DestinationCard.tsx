import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { Destination } from '../../types';
import styles from './DestinationCard.module.css';

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, index = 0 }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className={styles.imageContainer}>
        <img 
          src={destination.image} 
          alt={destination.name} 
          className={styles.image}
        />
        <div className={styles.priceTag}>
          ${destination.price}
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{destination.name}</h3>
          <div className={styles.location}>
            <MapPin size={14} />
            <span>{destination.country}</span>
          </div>
        </div>
        
        <p className={styles.description}>{destination.description}</p>
        
        <div className={styles.highlights}>
          {destination.highlights.slice(0, 2).map((highlight, idx) => (
            <span key={idx} className={styles.highlight}>
              {highlight}
            </span>
          ))}
        </div>
        
        <div className={styles.footer}>
          <div className={styles.rating}>
            <Star size={16} fill="currentColor" />
            <span>{destination.rating}</span>
            <span className={styles.reviewCount}>({destination.reviewCount})</span>
          </div>
          <a 
            href={`https://wa.me/201276846064?text=I'm interested in booking the ${encodeURIComponent(destination.name)} experience.`}
            className={styles.bookButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;