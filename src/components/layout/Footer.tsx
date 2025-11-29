import React from "react";
import { motion } from "framer-motion";
import { Phone, Facebook } from "lucide-react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bottomContent}>
            <div className={styles.leftSection}>
              <p className={styles.copyright}>© 2024 Hangout. All rights reserved.</p>
              <div className={styles.contactInfo}>
                <Phone size={16} />
                <span>+20 12 76846064</span>
              </div>
            </div>
            <div className={styles.rightSection}>
              <div className={styles.bottomLinks}>
                <a href="/privacy" className={styles.bottomLink}>
                  Privacy
                </a>
                <a href="/terms" className={styles.bottomLink}>
                  Terms
                </a>
                <a href="/cookies" className={styles.bottomLink}>
                  Cookies
                </a>
                <a href="/sitemap" className={styles.bottomLink}>
                  Sitemap
                </a>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/people/Hangouts/61564967621281/" className={styles.socialLink} aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://wa.me/201276846064" className={styles.socialLink} aria-label="WhatsApp">
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
