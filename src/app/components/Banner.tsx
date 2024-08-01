"use client";
import React from 'react';
import styles from '../styles/Banner.module.css';
import { FaEdit } from 'react-icons/fa'; 

interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  textColor: string; 
  image: string;
  background: string;
  onEdit: (id: number) => void;
}

const Banner: React.FC<BannerProps> = ({ id, title, description, cta, textColor, image, onEdit }) => {
  return (
   
     <div className={styles.banner} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content}>
        <h2 style={{ color: textColor }}>{title}</h2>
        <h4 style={{ color: textColor }}>{description}</h4>
        <button className={styles.ctaButton}>{cta}</button>
      </div>
      <button className={styles.editButton} onClick={() => onEdit(id)}>
        <FaEdit />
      </button>
    </div>
   
  );
};

export default Banner;
