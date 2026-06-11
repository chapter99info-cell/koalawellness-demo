import { useEffect, useRef, useState, type MouseEvent } from 'react'
import type { expressTreatments } from '../data/site'

type ExpressTreatment = (typeof expressTreatments)[number]

type ExpressServiceCardProps = {
  treatment: ExpressTreatment
  index: number
  sectionVisible: boolean
  reducedMotion: boolean
}

export function ExpressServiceCard({
  treatment,
  index,
  sectionVisible,
  reducedMotion,
}: ExpressServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [canTilt, setCanTilt] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanTilt(mediaQuery.matches)

    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  const revealed = reducedMotion || sectionVisible

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!canTilt || reducedMotion || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const offsetX = event.clientX - rect.left
    const offsetY = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((offsetX - centerX) / centerX) * 6
    const rotateX = ((centerY - offsetY) / centerY) * 6

    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  const transform = revealed
    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(0)`
    : 'translateY(30px)'

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`flex h-full flex-col justify-between rounded-2xl border border-sky-light bg-sky-light/20 p-7 shadow-sm md:p-8 ${
        isHovered && canTilt && !reducedMotion ? 'shadow-lg' : ''
      }`}
      style={{
        opacity: revealed ? 1 : 0,
        transform,
        transition: reducedMotion
          ? 'none'
          : revealed
            ? 'opacity 0.6s ease-out, transform 0.2s ease-out, box-shadow 0.2s ease-out'
            : `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: reducedMotion ? '0ms' : `${index * 120}ms`,
      }}
    >
      <div>
        <h3 className="text-xl font-semibold text-grey-dark">{treatment.name}</h3>
        <p className="mt-2 text-lg text-grey-muted">{treatment.duration}</p>
        <span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-sky-dark shadow-sm">
          + Aromatherapy Oil +$5
        </span>
      </div>
      <p className="mt-6 font-heading text-3xl font-semibold text-sky-dark">{treatment.price}</p>
    </article>
  )
}
