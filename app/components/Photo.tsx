import Image from "next/image";

// Pixel portrait; the zoom keeps the circle on head and shoulders.
export default function Photo({ className = "", sizes = "460px" }: { className?: string; sizes?: string }) {
  return (
    <div className={`photo ${className}`}>
      <span className="photo__ring" aria-hidden="true" data-orbit />
      <div className="photo__img">
        <Image src="/bujang.png" alt="Pixel-art portrait of Bintang Hutabarat" fill sizes={sizes} priority className="scale-[1.9] object-cover" style={{ objectPosition: "55% 40%" }} />
      </div>
      <span className="photo__dot" aria-hidden="true" />
    </div>
  );
}
