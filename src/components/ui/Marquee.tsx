'use client';

import Image from 'next/image';

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-black py-3 select-none">
      <div className="whitespace-nowrap flex items-center gap-10 animate-marquee">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4 invert">
            <Image src="/images/icon-head.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-medium">MEMBERSHIP</span>
          </div>
        ))}
      </div>
    </div>
  );
}