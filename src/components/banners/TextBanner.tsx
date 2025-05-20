import Image from 'next/image';

export default function TextBanner() {
  return (
    <div className='w-full bg-yellow-400 p-10'>
      <div className='flex flex-col container max-w-3xl justify-center items-center space-y-10 px-4'>
        <p>
          At Party People, we deliver <strong>immersive experiences</strong> with cutting-edge international sound curation and meticulous attention to detail, focusing on comfort, aesthetics, and quality. Our commitment is to create events that become lasting <strong>memories</strong> for our community.
        </p>
        <p>
          Our debut took plac e in Lisbon on April 12, 2025, bringing together 350 people at the iconic <strong>Those Who Dance</strong> warehouse, located in the creative heart of Marvila, with sound provided by the Italian brand <strong>Loud Professional</strong>.
        </p>
        <div className="relative w-[40vw] md:w-[30vw] lg:w-[20vh] aspect-video">
          <Image
            src="/images/main-logo.svg"
            alt="Signed Party People Logo"
            fill
          />
        </div>
      </div>
    </div>
  );
}