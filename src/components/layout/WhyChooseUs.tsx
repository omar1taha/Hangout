import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Headphones, Globe, Clock, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Benefit } from '../../types';
import styles from './WhyChooseUs.module.css';

// Import all slider images
import prev1 from '/images/prev1.jpeg';
import prev2 from '/images/prev2.jpeg';
import prev3 from '/images/prev3.jpeg';
import prev4 from '/images/prev4.jpeg';
import prev5 from '/images/prev5.jpeg';
import prev6 from '/images/prev6.jpeg';
import prev7 from '/images/prev7.jpeg';
import prev8 from '/images/prev8.jpeg';
import prev9 from '/images/prev9.jpeg';
import prev10 from '/images/prev10.jpeg';
import prev11 from '/images/prev11.jpeg';

// Filter to show only the three required benefits
const benefits: Benefit[] = [
  {
    id: '1',
    title: 'Trusted & Secure',
    description: 'Your safety and security are our top priority with secure booking and trusted local partners.',
    icon: 'Shield',
  },
  {
    id: '5',
    title: 'Instant Booking',
    description: 'Book your dream vacation instantly with real-time availability and instant confirmation.',
    icon: 'Clock',
  },
  {
    id: '6',
    title: 'Personalized Experiences',
    description: 'Tailored itineraries and personalized recommendations based on your preferences.',
    icon: 'Heart',
  },
];

// Available images with prev prefix
const sliderImages = [
  prev1,
  prev2,
  prev3,
  prev4,
  prev5,
  prev6,
  prev7,
  prev8,
  prev9,
  prev10,
  prev11,
];

const iconComponents = {
  Shield,
  Award,
  Headphones,
  Globe,
  Clock,
  Heart,
};

// Image Slider Component
const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;
      case 'Home':
        event.preventDefault();
        setCurrentIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setCurrentIndex(sliderImages.length - 1);
        break;
    }
  };

  return (
    <div 
      className={styles.slider}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image slideshow"
    >
      <div className={styles.sliderContainer}>
        <motion.img
          key={currentIndex}
          src={sliderImages[currentIndex]}
          alt={`Travel destination ${currentIndex + 1}`}
          className={styles.sliderImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={goToNext}
          className={`${styles.navButton} ${styles.navButtonNext}`}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Dot indicators */}
        <div className={styles.indicators}>
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  const IconComponent = iconComponents[benefit.icon as keyof typeof iconComponents];

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ x: 5, scale: 1.02 }}
    >
      <div className={styles.iconContainer}>
        <IconComponent size={24} className={styles.icon} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{benefit.title}</h3>
        <p className={styles.cardDescription}>{benefit.description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
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
          <h2 className={styles.title}>Why Choose TourismPlatform?</h2>
          <p className={styles.subtitle}>
            We're committed to making your travel dreams come true with exceptional service and unforgettable experiences
          </p>
        </motion.div>

        {/* New layout with slider and cards */}
        <div className={styles.mainContent}>
          {/* Image slider - 1/3 width */}
          <motion.div
            className={styles.sliderSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ImageSlider />
          </motion.div>

          {/* Benefits cards - 2/3 width in vertical layout */}
          <motion.div
            className={styles.benefitsSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.verticalGrid}>
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={benefit.id}
                  benefit={benefit}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Start Your Adventure?</h3>
            <p className={styles.ctaDescription}>
              Join thousands of satisfied travelers who trust us to create their perfect getaway
            </p>
          </div>
          <div className={styles.ctaStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Happy Travelers</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statLabel}>Destinations</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>4.9/5</div>
              <div className={styles.statLabel}>Average Rating</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;