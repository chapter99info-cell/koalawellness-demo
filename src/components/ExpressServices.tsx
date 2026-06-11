import { useEffect, useRef, useState } from 'react'
import { bookingLinkProps, expressTreatments } from '../data/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { ExpressServiceCard } from './ExpressServiceCard'
import { FadeIn } from './FadeIn'

function triggerReveal(setSectionVisible: (value: boolean) => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setSectionVisible(true)
    })
  })
}

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

    const startReveal = () => {
      triggerReveal(setSectionVisible)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startReveal()
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' },
    )

    observer.observe(grid)

    const rect = grid.getBoundingClientRect()
    const isAlreadyVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0
    if (isAlreadyVisible) {
      startReveal()
      observer.disconnect()
    }

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
