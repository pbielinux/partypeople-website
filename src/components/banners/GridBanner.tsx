import Image from 'next/image';

export default function GridBanner() {
  return (
    <div className="relative grid grid-cols-2 md:grid-cols-3 w-full overflow-hidden">
        <div className='relative aspect-square'>
          <Image
            src="/images/05.jpg"
            alt="Party People Logo"
            fill
            className='object-cover'
          />
        </div>
        <div className='relative aspect-square'>
          <Image
            src="/images/06.jpg"
            alt="Party People Logo"
            fill
            className='object-cover'
          />
        </div>
        <div className='relative aspect-square'>
          <Image
            src="/images/07.jpg"
            alt="Party People Logo"
            fill
            className='object-cover'
          />
        </div>
        <div className='relative aspect-square'>
          <Image
            src="/images/08.jpg"
            alt="Party People Logo"
            fill
            className='object-cover'
          />
        </div>
        <div className='relative aspect-square'>
          <Image
            src="/images/09.jpg"
            alt="Party People Logo"
            fill
            className='object-cover'
          />
        </div>
        <div className='relative aspect-square'>
          <Image
            src="/images/12.jpg"
            alt="Party People Logo"
            fill
            className='object-cover'
          />
        </div>

        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="text-white text-center space-y-4 max-w-md px-4">
            <ul className="text-left text-base font-medium leading-relaxed">
              <li><strong>AMNÉSIA</strong>, IMBITUVA <span className="text-yellow-400 font-[Saitama]">2018</span></li>
              <li><strong>D-EDGE TOUR</strong>, PONTA GROSSA <span className="text-yellow-400 font-[Saitama]">2018</span></li>
              <li><strong>CAVAN 77</strong>, PONTA GROSSA <span className="text-yellow-400 font-[Saitama]">2019</span></li>
              <li><strong>JARDIM ESPACIAL</strong>, PONTA GROSSA <span className="text-yellow-400 font-[Saitama]">2019</span></li>
              <li><strong>WARUNG TOUR</strong>, PONTA GROSSA <span className="text-yellow-400 font-[Saitama]">2019</span></li>
              <li><strong>ARA</strong>, SÃO PAULO <span className="text-yellow-400 font-[Saitama]">2021</span></li>
              <li><strong>ALL GOOD</strong>, SÃO PAULO <span className="text-yellow-400 font-[Saitama]">2021</span></li>
              <li className='text-yellow-400 font-[Saitama]'>& Many others!</li>
            </ul>
          </div>
        </div>

      </div>
  );
};