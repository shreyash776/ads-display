"use client";
import React, { useState } from 'react';
import styles from '../styles/EditBanner.module.css';

interface EditBannerProps {
  banner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
  imageOptions: string[]; 
}

const EditBanner: React.FC<EditBannerProps> = ({ banner, onSave, onClose, imageOptions }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [background, setBackground] = useState(banner.background);
  const [image, setImage] = useState(banner.image);

  const handleSave = () => {
    onSave({ ...banner, title, description, background, image });
  };

  const handleImageClick = (selectedImage: string) => {
    setImage(selectedImage);
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.heading}>Edit Banner</h2>
        <label className={styles.label}>
          Title
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.inputText} />
        </label>
        <label className={styles.label}>
          Description
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className={styles.inputText} />
        </label>
      
        <label className={styles.label}>
          Images
          <div className={styles.imageOptions}>
            {imageOptions.length > 0 ? (
              imageOptions.map((img, index) => (
                <div
                  key={index}
                  className={`${styles.imageOption} ${img === image ? styles.selected : ''}`}
                  onClick={() => handleImageClick(img)}
                >
                  <img src={img} alt={`Option ${index + 1}`} />
                </div>
              ))
            ) : (
              <div>No images available</div>
            )}
          </div>
        </label>
        <button className={styles.saveButton} onClick={handleSave}>Done</button>
        <button className={styles.saveButton} >Download</button>

      </div>
    </div>
  );
};

export default EditBanner;
