import { FadeIn } from './FadeIn'
import { services } from '../data/site'

export function Services() {
  return (
    <section id="services" className="bg-grey-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mb-14 text-center">
          <h2 className="text-4xl font-semibold text-grey-dark md:text-5xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-lg text-grey">
            Tailored treatments for relaxation, recovery, and radiant skin — all in a calm
            countryside setting.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.name} delay={index * 80}>
              <article className="flex h-full flex-col justify-between rounded-2xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md md:p-8">
                <div>
                  <h3 className="text-2xl font-semibold text-grey-dark">{service.name}</h3>
                  <p className="mt-2 text-sm text-grey-muted">{service.duration}</p>
                </div>
                <p className="mt-6 font-heading text-3xl font-semibold text-sky-dark">
                  {service.price}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
