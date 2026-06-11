import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const SLIDESHOW_PHOTOS = [
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/koalawellness-demo/Photos/01.png',
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/koalawellness-demo/Photos/02.png',
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/koalawellness-demo/Photos/Koala00420.jpg',
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/koalawellness-demo/Photos/Koala022020.jpg',
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/koalawellness-demo/Photos/Koala023320.jpg',
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/koalawellness-demo/Photos/koala05.png',
] as const

const SLIDE_INTERVAL_MS = 4000

export function MoreServicesSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion || isPaused) return

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDESHOW_PHOTOS.length)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(interval)
  }, [reducedMotion, isPaused])

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Koala Wellness & Spa photo gallery"
    >
      {SLIDESHOW_PHOTOS.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Koala Wellness & Spa treatment photo"
          loading={index === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {SLIDESHOW_PHOTOS.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show photo ${index + 1} of ${SLIDESHOW_PHOTOS.length}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-sky-dark/90' : 'bg-sky-dark/35 hover:bg-sky-dark/55'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
