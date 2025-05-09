'use client';

import React from 'react';

export default function VideoSection() {
  return (
    <section className="w-full overflow-hidden lg:[cursor:url('/images/icon-head.png'),_auto]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src="/videos/yokoo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}