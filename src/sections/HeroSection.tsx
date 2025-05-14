import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white py-28 relative">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="relative inline-block mx-auto w-full max-w-[500px]">
          {/* The logo image */}
          <Image
            src="https://storage.googleapis.com/partypeople.world/images/logo-h.svg" // Replace with your real logo path
            alt="Analogue Logo"
            width={500}
            height={200}
            className="w-full"
          />

          {/* Positioned image (e.g. main-logo.png) */}
          <Image
            src="https://storage.googleapis.com/partypeople.world/images/main-logo.png"
            alt="Signed Party People Logo"
            width={200}
            height={120}
            className="absolute top-4 right-0 w-[150px] md:w-[200px]"
          />
        </div>

        {/* Text Grid */}
        <div className="grid gap-4 pt-10 text-sm xs:text-xl md:text-3xl font-medium leading-snug">
          <div>
            <span className="inline-block align-middle">
              <Image
                src="https://storage.googleapis.com/partypeople.world/images/icon-head.png" // Replace with your logo
                alt="Party People Logo"
                width={600}
                height={120}
                className="mx-auto w-10" />
            </span>{' '}
            <span className="inline-block">
              A SERIOUSLY</span>{' '}
            <Button>
              <span className="text-black text-sm xs:text-xl">PLAYFUL</span>
            </Button>{' '}
            <sup>™</sup>
          </div>

          <div>
            <span className="inline-block border border-black px-2 py-0.5 rounded-full">
              BRAND
            </span>
            {' '}AND
            <span className="font-extrabold">
              {' '}PARTY
            </span> ▶▶{' '}
            <span className="underline">
              PROMOTER
            </span>
          </div>

          <div>
            CRAFTING  ✦ EXPERIENCES
          </div>

          <div>
            ☝️ TO PROVIDE{' '}
            <span className="border border-black px-2 py-0.5 rounded-full">YOU</span> SPACE
          </div>

          <div>
            TO DANCE {' '}
            <span className="inline-block underline decoration-2 underline-offset-4">
              AROUND THE WORLD
            </span>{' '}
            🌐
          </div>
        </div>
      </div>
    </section>
  );
}
