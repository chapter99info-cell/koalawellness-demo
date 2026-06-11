import { useEffect, useRef, useState } from 'react'
import { bookingLinkProps, expressTreatments } from '../data/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { ExpressServiceCard } from './ExpressServiceCard'
import { FadeIn } from './FadeIn'

export function ExpressServices() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [sectionVisible, setSectionVisible] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setSectionVisible(true)
      return
    }

    const grid = gridRef.current
    if (!grid) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true)
          observer.unobserve(grid)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(grid)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <section id="express" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mb-14 text-center">
          <h2 className="text-[2.475rem] font-semibold text-grey-dark md:text-[3.3rem]">
            Express 30-Min Massage — From $50
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-grey">
            Perfect for lunch breaks, travellers &amp; office workers
          </p>
        </FadeIn>

        <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
          {expressTreatments.map((treatment, index) => (
            <ExpressServiceCard
              key={treatment.name}
              treatment={treatment}
              index={index}
              sectionVisible={sectionVisible}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        <FadeIn delay={400} className="mt-12 text-center">
          <a
            {...bookingLinkProps}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-sky-dark px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-sky"
          >
            Book Express Session
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
