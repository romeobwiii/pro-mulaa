import React, { useEffect } from 'react';

const AdBanner = ({ slot, format = 'auto', style = {} }) => {
  useEffect(() => {
    try {
      // Push ad when component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className="ad-container my-4">
      <ins className="adsbygoogle"
           style={{ display: 'block', ...style }}
           data-ad-client="ca-pub-2682088610696938"
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdBanner;
