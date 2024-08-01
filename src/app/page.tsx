"use client";
import React, { useState } from 'react';
import Banner from '@components/Banner';
import EditBanner from '@components/EditBanner';
import bannersData from '@data/banners.json';
import styles from './styles/Banner.module.css'; 
import styles2 from './styles/EditBanner.module.css'; 

const HomePage =() => {
  const [banners, setBanners] = useState(bannersData);
  const [editingBanner, setEditingBanner] = useState<any>(null);

  
  const imageOptions = Array.from(new Set(banners.map(banner => banner.image)));

  const handleEdit = (id: number) => {
    const banner = banners.find(b => b.id === id);
    setEditingBanner(banner);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map(b => (b.id === updatedBanner.id ? updatedBanner : b)));
    setEditingBanner(null);
  };

  const handleClosePopup = () => {
    setEditingBanner(null);
  };

  return (
    <>
      <div className={styles.box}>
        {banners.map(banner => (
          <Banner key={banner.id} {...banner} onEdit={handleEdit} />
        ))}
      </div>
      {editingBanner && (
        <div className={styles2['popup-overlay']} onClick={handleClosePopup}>
          <div className={styles2['popup-content']} onClick={e => e.stopPropagation()}>
            <EditBanner
              banner={editingBanner}
              onSave={handleSave}
              onClose={handleClosePopup}
              imageOptions={imageOptions}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
