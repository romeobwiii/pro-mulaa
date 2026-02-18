import React from 'react';
import AdBanner from './AdBanner';

/**
 * AdDisplay Component - Various ad formats
 * With Auto Ads enabled, these are optional enhancements
 */

// Display ad - Manual placement
export const DisplayAd = ({ slot, className = '' }) => (
  <AdBanner 
    slot={slot} 
    format="rectangle" 
    style={{ width: '300px', height: '250px' }} 
    className={className}
  />
);

// Leaderboard ad - Manual placement
export const LeaderboardAd = ({ slot, className = '' }) => (
  <AdBanner 
    slot={slot} 
    format="horizontal" 
    style={{ width: '728px', height: '90px', maxWidth: '100%' }} 
    className={className}
  />
);

// Mobile banner - Manual placement
export const MobileAd = ({ slot, className = '' }) => (
  <AdBanner 
    slot={slot} 
    format="horizontal" 
    style={{ width: '320px', height: '50px', maxWidth: '100%' }} 
    className={className}
  />
);

// In-feed ad - For between content
export const InFeedAd = ({ slot, className = '' }) => (
  <AdBanner 
    slot={slot} 
    format="fluid" 
    style={{ width: '100%', minHeight: '100px' }} 
    className={className}
  />
);

// Anchor ad (sticky) - Only if you want manual sticky ad
export const AnchorAd = ({ slot, className = '' }) => (
  <div className={`fixed bottom-0 left-0 w-full z-50 bg-white shadow-lg border-t border-gray-200 ${className}`}>
    <div className="container-custom py-2">
      <AdBanner 
        slot={slot} 
        style={{ width: '100%', height: '90px', maxWidth: '728px', margin: '0 auto' }} 
      />
    </div>
    <button 
      onClick={(e) => e.currentTarget.parentElement.style.display = 'none'}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
    >
      ✕
    </button>
  </div>
);

// Sidebar ad - Sticky sidebar ad
export const SidebarAd = ({ slot, className = '' }) => (
  <div className={`sticky top-24 ${className}`}>
    <div className="ad-label text-center text-xs text-gray-400 mb-1">Advertisement</div>
    <AdBanner 
      slot={slot} 
      style={{ width: '300px', height: '600px', maxWidth: '100%' }} 
    />
  </div>
);

// Auto Ads placeholder (does nothing - lets Auto Ads work)
export const AutoAdsPlaceholder = () => null;
