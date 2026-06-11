import { bookingLinkProps, expressTreatments } from '../data/site'
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
            <FadeIn key={treatment.name} delay={index * 80}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-sky-light bg-sky-light/20 p-7 shadow-sm md:p-8">
                <div>
                  <h3 className="text-xl font-semibold text-grey-dark">{treatment.name}</h3>
                  <p className="mt-2 text-lg text-grey-muted">{treatment.duration}</p>
                  <span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-sky-dark shadow-sm">
                    + Aromatherapy Oil +$5
                  </span>
                </div>
                <p className="mt-6 font-heading text-3xl font-semibold text-sky-dark">
                  {treatment.price}
                </p>
              </article>
            </FadeIn>
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
