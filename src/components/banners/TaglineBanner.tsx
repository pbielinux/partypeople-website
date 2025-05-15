import Image from 'next/image';


export default function TaglineBanner() {
  return (
    <div className='w-full h-full relative overflow-hidden'>
      {/* Fullscreen Background */}
      <Image
        src="/images/about/Picture1.jpg"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Centered content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          {/* Bigger logo */}
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="w-[50vw] max-w-[500px]"
          />
          {/* Overlay text closer to logo */}
          <h1 className="w-full text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Saitama] absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-center">
            I guess you Are
          </h1>
        </div>
      </div>
    </div>
  );
};