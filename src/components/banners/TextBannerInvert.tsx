import Image from 'next/image';

export default function TextBannerInvert() {
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-[30%_70%]">
    
      <div className="grid bg-black text-white h-fulll">
        
        <div className="container space-y-10 py-10 px-6 md:pr-32 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          <p>
            Our experience in event production in Brazil spans 10 years. Ourjourney began in Paraná and expanded to one of the largest andmost dynamic event markets in the country - São Paulo.
          </p>

          <p>
            With a decade of experience in other production companies, we havebuilt a diverse portfolio that includes our own parties, major events,as well as the curation of local clubs.
          </p>

          <p>
            In 2024, we left Brazil to establish Party People in Lisbon, aiming to combine the expertise we gained in Brazil with the rich European cultural scene, expanding thepotential of each event.
          </p>
        </div>
        <span className="block text-4xl sm:text-5xl text-yellow-400 font-[Saitama]">
          I guess you Are
        </span>
      </div>

    </div>
  );
};