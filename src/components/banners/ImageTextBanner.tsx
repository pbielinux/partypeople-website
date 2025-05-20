import Image from 'next/image';

interface ImageTextBannerProps {
  title?: string;
  subtitle?: string;
  text: string[];
  images: string[];
  invert?: boolean;
}

export default function ImageTextBanner({
  title,
  subtitle,
  text,
  images,
  invert = false,
}: ImageTextBannerProps) {
  const hasTitle = !!title;
  const hasSubtitle = !!subtitle;

  return (
    <div className="bg-black text-white">
      <div className={`container flex flex-col md:flex-row max-w-4xl justify-center py-10 ${invert ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex flex-col justify-center w-full">
          {hasTitle && (
            <div>
              <h1 className="text-6xl font-bold">{title}</h1>
              {hasSubtitle && (
                <h2 className="text-4xl sm:text-5xl text-yellow-400 font-[Saitama]">{subtitle}</h2>
              )}
            </div>
          )}

          <div className="p-10 max-w-2xl space-y-6">
            {text.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {!hasTitle && hasSubtitle && (
            <div className="text-right pr-10 pb-4">
              <h2 className="text-4xl sm:text-5xl text-yellow-400 font-[Saitama]">{subtitle}</h2>
            </div>
          )}
        </div>

        <div className="flex flex-row md:flex-col md:w-30vw justify-center flex-wrap">
          {images.map((src, idx) => {
            const isSingle = images.length === 1;
            const aspectClass = isSingle
              ? 'aspect-[16/9] md:aspect-[9/16] min-h-[40vh]'
              : 'aspect-square';

            return (
              <div
                key={idx}
                className={`relative w-[40vw] md:w-[30vw] lg:w-[20vh] ${aspectClass}`}
              >
                <Image src={src} alt={`Image ${idx + 1}`} fill className="object-cover p-2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}