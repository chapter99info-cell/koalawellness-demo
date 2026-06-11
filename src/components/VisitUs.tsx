import { FadeIn } from './FadeIn'
import { MapDistanceBadge } from './MapDistanceBadge'
import { bookingLinkProps, externalLinkProps, site } from '../data/site'

const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=479+Toolong+North+Road+Kirkstall+VIC+3283'

export function VisitUs() {
  return (
    <section id="visit" className="bg-grey-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mb-14 text-center">
          <h2 className="text-4xl font-semibold text-grey-dark md:text-5xl">Visit Us</h2>
          <p className="mx-auto mt-4 max-w-lg text-grey">
            Find us in the peaceful countryside of Kirkstall, a short drive from Port Fairy and
            Warrnambool.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="overflow-hidden rounded-3xl shadow-lg lg:flex">
            <div className="flex flex-col justify-center bg-[#1a3a4a] p-8 md:p-10 lg:w-[45%] lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky/80">
                FIND US
              </p>
              <h3 className="mt-3 font-heading text-[2rem] font-semibold leading-tight text-white">
                Visit Our Sanctuary
              </h3>
              <div className="mt-5 h-px w-10 bg-sky" aria-hidden />

              <div className="mt-8 space-y-6 text-white">
                <div>
                  <p className="text-base leading-relaxed">
                    <span className="mr-2" aria-hidden>
                      📍
                    </span>
                    479 Toolong North Road
                  </p>
                  <p className="ml-7 text-base leading-relaxed text-white/90">Kirkstall VIC 3283</p>
                </div>

                <div>
                  <p className="text-base leading-relaxed">
                    <span className="mr-2" aria-hidden>
                      🕐
                    </span>
                    Open Every Day
                  </p>
                  <p className="ml-7 text-base leading-relaxed text-white/90">9:00 AM – 8:00 PM</p>
                </div>

                <p className="text-sm text-white/60">
                  12 km from Port Fairy · 35 km from Warrnambool
                </p>

                <div className="open-now-indicator flex items-center gap-1.5">
                  <span className="live-pulse-dot" aria-hidden="true" />
                  <span className="open-now-text">Open Now</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  {...bookingLinkProps}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-sky-dark px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-sky"
                >
                  Book Now
                </a>
                <a
                  href={directionsUrl}
                  {...externalLinkProps}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] lg:w-[55%]">
              <iframe
                title="Koala Wellness & Spa location map"
                src={site.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
              <MapDistanceBadge />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
