import { FadeIn } from './FadeIn'
import { bookingLinkProps, signatureTreatments } from '../data/site'

export function Services() {
  return (
    <section id="services" className="bg-grey-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mb-14 text-center">
          <h2 className="text-[2.475rem] font-semibold text-grey-dark md:text-[3.3rem]">
            Signature Treatments
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-grey">
            Our most popular treatments — each tailored to help you relax, recover, and feel your
            best.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {signatureTreatments.map((service, index) => (
            <FadeIn key={service.name} delay={index * 80}>
              <article className="flex h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="flex flex-1 flex-col justify-between p-7 md:p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-grey-dark">{service.name}</h3>
                    <p className="mt-2 text-lg text-grey-muted">{service.duration}</p>
                  </div>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <p className="font-heading text-3xl font-semibold text-sky-dark">
                      {service.price}
                    </p>
                    <a
                      {...bookingLinkProps}
                      className="inline-flex min-h-[44px] items-center text-sm font-semibold text-sky-dark transition-colors hover:text-sky"
                    >
                      Book →
                    </a>
                  </div>
                </div>
                <img
                  src={service.image}
                  alt={service.name}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="hidden h-[160px] w-40 shrink-0 object-cover rounded-r-2xl md:block"
                />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
