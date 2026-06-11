import { FadeIn } from './FadeIn'
import { paymentMethods } from '../data/site'

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <FadeIn className="text-center">
          <h2 className="text-4xl font-semibold text-grey-dark md:text-5xl">About Us</h2>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-10 rounded-2xl border border-sky-light bg-sky-light/20 p-8 shadow-sm md:p-10">
            <p className="leading-relaxed text-grey">
              All treatments personally conducted by owner-therapist Thanwalun. Premium ESPA and
              Dermalogica products used in all facials and body treatments.
            </p>

            <div className="mt-8 border-t border-sky-light pt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-grey-muted">
                Payment options accepted
              </p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {paymentMethods.map((method) => (
                  <li
                    key={method}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-grey-dark shadow-sm"
                  >
                    {method}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
