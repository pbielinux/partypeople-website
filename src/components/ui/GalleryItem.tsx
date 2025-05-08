import React from 'react';
import Image from 'next/image';
import styles from '../../styles/GalleryItem.module.css';

const GalleryItem = ({ image, title }) => {
  return (
    <div className={styles.galleryItem}>
      <Image 
        src={image} 
        alt={title} 
        width={400} 
        height={400} 
        layout="responsive"
      />
      <div className={styles.galleryItemOverlay}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default GalleryItem;