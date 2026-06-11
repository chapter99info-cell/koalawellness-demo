import { useEffect, useRef, useState, type MouseEvent } from 'react'
import type { expressTreatments } from '../data/site'

type ExpressTreatment = (typeof expressTreatments)[number]

type ExpressServiceCardProps = {
  treatment: ExpressTreatment
  index: number
  sectionVisible: boolean
  reducedMotion: boolean
}

const MAX_TILT_DEGREES = 6

export function ExpressServiceCard({
  treatment,
  index,
  sectionVisible,
  reducedMotion,
}: ExpressServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [canTilt, setCanTilt] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const isRevealed = reducedMotion || sectionVisible

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const noHoverQuery = window.matchMedia('(hover: none)')

    const update = () => {
      setCanTilt(hoverQuery.matches && !noHoverQuery.matches)
    }

    update()
    hoverQuery.addEventListener('change', update)
    noHoverQuery.addEventListener('change', update)

    return () => {
      hoverQuery.removeEventListener('change', update)
      noHoverQuery.removeEventListener('change', update)
    }
  }, [])

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!canTilt || reducedMotion || !isRevealed || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const offsetX = event.clientX - rect.left
    const offsetY = event.clientY - rect.top
    const rotateY = ((offsetX - rect.width / 2) / (rect.width / 2)) * MAX_TILT_DEGREES
    const rotateX = ((rect.height / 2 - offsetY) / (rect.height / 2)) * MAX_TILT_DEGREES

    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setTilt({ x: 0, y: 0 })
  }

  const revealTransform = isRevealed ? 'translateY(0px)' : 'translateY(30px)'
  const tiltTransform =
    canTilt && !reducedMotion && isRevealed
      ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      : ''
  const transform = `perspective(1000px) ${revealTransform} ${tiltTransform}`.trim()

  const transition = reducedMotion
    ? 'none'
    : isRevealed
      ? isHovering && canTilt
        ? 'opacity 0.6s ease-out, transform 0.15s ease-out, box-shadow 0.15s ease-out'
        : 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.2s ease-out'
      : 'none'

  return (
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`flex h-full flex-col justify-between rounded-2xl border border-sky-light bg-sky-light/20 p-7 shadow-sm md:p-8 ${
        isHovering && canTilt && !reducedMotion ? 'shadow-lg' : ''
      }`}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform,
        transformStyle: 'preserve-3d',
        transition,
        transitionDelay: isRevealed && !reducedMotion ? `${index * 120}ms` : '0ms',
        willChange: isHovering && canTilt ? 'transform' : 'auto',
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
