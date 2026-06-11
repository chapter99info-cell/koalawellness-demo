import { FadeIn } from './FadeIn'
import { MoreServicesSlideshow } from './MoreServicesSlideshow'
import { bookingLinkProps, moreServices } from '../data/site'

export function MoreServices() {
  const midpoint = Math.ceil(moreServices.length / 2)
  const leftColumn = moreServices.slice(0, midpoint)
  const rightColumn = moreServices.slice(midpoint)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mb-14 text-center">
          <h2 className="text-4xl font-semibold text-grey-dark md:text-5xl">More Services</h2>
          <p className="mx-auto mt-4 max-w-lg text-grey">
            Additional treatments and add-ons to complement your wellness journey.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-center">
            <MoreServicesSlideshow />

            <div className="rounded-2xl border border-sky-light bg-sky-light/20 p-8 shadow-sm md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <ul className="space-y-3">
                {leftColumn.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-grey-dark">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-dark" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {rightColumn.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-grey-dark">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-dark" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <a
                {...bookingLinkProps}
                className="inline-flex min-h-[48px] items-center text-sm font-semibold text-sky-dark transition-colors hover:text-sky"
              >
                See full menu &amp; prices →
              </a>
            </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
