import Image from 'next/image';

export default function TextBanner() {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-[70%_30%]">
      <div className="grid bg-black text-white h-fulll">
        <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl xxl:text-9xl font-black leading-none">THIS IS</h1>
        <span className="block text-4xl sm:text-5xl text-yellow-400 font-[Saitama]">
          Party People
        </span>
        <div className="container space-y-10 py-10 px-6 md:pr-32 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          <p>
            An entertainment company and <strong>electronic music brand</strong> dedicated to <strong>push the edge of club sound</strong>, <strong>celebrate culture as a tool for social liberation</strong> and <strong>create safe environments</strong> to embrace <strong>alternative lifestyles</strong>.
          </p>

          <p>
            The brand's purpose is to <strong>build a diverse community</strong> through <strong>immersive experiences, global events</strong> and an <strong>educational platform</strong> that explores the <strong>vast cultural universe</strong> we are part of.
          </p>
        </div>
      </div>
      {/* Image Column */}
      <div className="grid grid-cols-2 md:grid-cols-1 bg-white w-full h-auto gap-4 px-4 py-4">
        <div className="relative">
          <Image
            src="/images/about/about1.jpg"
            alt="Party People Logo"
            width={800}
            height={800}
            className="object-cover w-full h-auto"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/about/about2.jpg"
            alt="Party People Logo"
            width={800}
            height={800}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};