import React, { useEffect } from 'react';

/**
 * AdBanner Component - For manual ad placements
 * Note: With Auto Ads enabled, this is optional
 * Use this only if you want specific manual ad placements
 */
const AdBanner = ({ slot, format = 'auto', style = {}, className = '' }) => {
  useEffect(() => {
    try {
      // Only initialize if we're using manual ads
      if (slot && slot !== 'auto') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('[MULAA SIGIL] AdSense error:', error);
    }
  }, [slot]);

  // If slot is 'auto', don't render manual ad (let Auto Ads handle it)
  if (slot === 'auto') {
    return null;
  }

  // For manual ad placements
  return (
    <div className={`ad-container my-6 ${className}`}>
      {/* Optional ad label */}
      <div className="ad-label text-center text-xs text-gray-400 mb-1">Advertisement</div>
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
