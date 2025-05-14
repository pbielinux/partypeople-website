import Image from 'next/image';

export default function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-black py-3 select-none">
      <div className="whitespace-nowrap flex items-center gap-10 animate-marquee">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4 invert">
            <Image src="https://storage.googleapis.com/partypeople.world/images/icon-head.png" alt="Logo" width={30} height={30} />
            <span className="text-sm sm:text-xl font-medium">MEMBERSHIP</span>
          </div>
        ))}
      </div>
    </div>
  );
}