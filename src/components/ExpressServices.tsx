import { bookingLinkProps, expressTreatments } from '../data/site'
import { ExpressServiceCard } from './ExpressServiceCard'
import { FadeIn } from './FadeIn'

export function ExpressServices() {
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

        <div className="grid gap-6 md:grid-cols-2">
          {expressTreatments.map((treatment, index) => (
            <div
              key={treatment.name}
              style={{
                opacity: 0,
                transform: 'translateY(28px)',
                animation: 'expressReveal 0.6s ease forwards',
                animationDelay: `${index * 0.12}s`,
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLDivElement
                target.style.transform =
                  'perspective(900px) rotateX(3deg) rotateY(-3deg) translateY(-4px)'
                target.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)'
                target.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLDivElement
                target.style.transform = 'translateY(0)'
                target.style.boxShadow = ''
              }}
            >
              <ExpressServiceCard treatment={treatment} />
            </div>
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
