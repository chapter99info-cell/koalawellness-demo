import { FadeIn } from './FadeIn'
import { bookingLinkProps, site } from '../data/site'

const heroVideoUrl =
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/koalawellness-demo/VDO/koala_cover.mp4'

const heroTextShadow = '[text-shadow:0_2px_12px_rgba(0,0,0,0.4)]'

export function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] overflow-hidden pt-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src={heroVideoUrl} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(85vh-5rem)] max-w-6xl items-center px-5 py-16 md:px-8 md:py-24">
        <FadeIn className="max-w-xl">
          <p
            className={`mb-4 text-lg font-semibold uppercase tracking-widest text-white ${heroTextShadow}`}
          >
            Kirkstall · Great Ocean Road
          </p>
          <h1
            className={`text-5xl font-semibold leading-tight text-[#F8F6F2] md:text-7xl ${heroTextShadow}`}
          >
            Relax. Restore. Renew.
          </h1>
          <p className={`mt-4 text-[22px] italic text-white/90 ${heroTextShadow}`}>{site.tagline}</p>
          <p className="mt-4 inline-flex items-center rounded-full bg-sky-light/90 px-4 py-2 text-sm font-medium text-grey-dark shadow-md">
            ★ {site.googleRating.toFixed(1)} rating · {site.googleReviewCount} Google reviews
          </p>
          <p className={`mt-6 text-xl leading-relaxed text-white/90 ${heroTextShadow}`}>
            Premium massage &amp; skin therapy in Kirkstall — 12 km from Port Fairy on the Great
            Ocean Road.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              {...bookingLinkProps}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-sky-dark px-9 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-sky"
            >
              Book Online
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-grey-dark/20 bg-white/80 px-9 py-4 text-lg font-semibold text-grey-dark backdrop-blur-sm transition-colors hover:border-sky-dark hover:text-sky-dark"
            >
              Call {site.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
