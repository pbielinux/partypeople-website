export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? '';

// Standard pageview tracking
export const pageview = () => {
  (window as any).fbq('track', 'PageView');
};

// Custom event tracking
export const event = (name: string, options = {}) => {
  (window as any).fbq('track', name, options);
};