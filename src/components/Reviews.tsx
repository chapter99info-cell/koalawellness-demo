import { FadeIn } from './FadeIn'
import { reviews, site } from '../data/site'

export function Reviews() {
  return (
    <section id="reviews" className="bg-grey-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn className="mb-14 text-center">
          <h2 className="text-4xl font-semibold text-grey-dark md:text-5xl">
            Loved by our clients — {site.googleRating.toFixed(1)} on Google
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-grey">
            Real experiences from guests who have visited Koala Wellness &amp; Spa.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 80}>
              <blockquote className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm md:p-8">
                <p className="mb-1 text-sky-dark" aria-label="5 out of 5 stars">
                  ★★★★★
                </p>
                <p className="flex-1 leading-relaxed text-grey">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-6 text-sm font-semibold text-grey-dark">— {review.name}</footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
