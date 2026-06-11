import { FadeIn } from './FadeIn'
import { site } from '../data/site'

export function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] overflow-hidden pt-20">
      <img
        src={site.heroImage}
        alt="Relaxing spa massage treatment at Koala Wellness & Spa"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/75 to-white/40" />

      <div className="relative mx-auto flex min-h-[calc(85vh-5rem)] max-w-6xl items-center px-5 py-16 md:px-8 md:py-24">
        <FadeIn className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-dark">
            Kirkstall · Great Ocean Road
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-grey-dark md:text-6xl lg:text-7xl">
            Relax. Restore. Renew.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-grey md:text-xl">
            Premium massage &amp; skin therapy in Kirkstall — just 12 km from Port Fairy on the
            Great Ocean Road.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-sky-dark px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-sky"
            >
              Call {site.phone}
            </a>
            <a
              href="#services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-grey-dark/20 bg-white/80 px-8 py-3.5 text-sm font-semibold text-grey-dark backdrop-blur-sm transition-colors hover:border-sky-dark hover:text-sky-dark"
            >
              View Services
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
