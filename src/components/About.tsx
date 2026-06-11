import { FadeIn } from './FadeIn'
import { whyChooseUs } from '../data/site'

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mb-14 text-center">
          <h2 className="text-4xl font-semibold text-grey-dark md:text-5xl">Why Choose Us</h2>
          <p className="mx-auto mt-4 max-w-lg text-grey">
            A premium wellness experience rooted in expertise, quality products, and tranquil
            surroundings.
          </p>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <FadeIn key={item.title} delay={index * 80}>
              <div className="rounded-2xl border border-sky-light bg-sky-light/30 p-7 shadow-sm md:p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-dark/15">
                  <span className="font-heading text-lg font-semibold text-sky-dark">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-grey-dark">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-grey">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
