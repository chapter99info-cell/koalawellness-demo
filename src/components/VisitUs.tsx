import { FadeIn } from './FadeIn'
import { bookingLinkProps, site } from '../data/site'

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

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeIn delay={80}>
            <div className="rounded-2xl bg-white p-7 shadow-sm md:p-8">
              <h3 className="text-2xl font-semibold text-grey-dark">Location &amp; Contact</h3>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-grey-muted">
                    Address
                  </dt>
                  <dd className="mt-1 text-base text-grey-dark">{site.address}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-grey-muted">
                    Opening Hours
                  </dt>
                  <dd className="mt-1 text-base text-grey-dark">{site.hours}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-grey-muted">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="inline-flex min-h-[44px] items-center text-lg font-semibold text-sky-dark transition-colors hover:text-sky"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-grey-muted">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex min-h-[44px] items-center text-base font-medium text-sky-dark transition-colors hover:text-sky"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <a
                {...bookingLinkProps}
                className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-sky-dark px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky sm:w-auto"
              >
                Book Now
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <iframe
                title="Koala Wellness & Spa location map"
                src={site.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
