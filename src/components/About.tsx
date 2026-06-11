import { FadeIn } from './FadeIn'

const aboutImageUrl =
  'https://euiwkvozrhnbxttfuchh.supabase.co/storage/v1/object/public/koalawellness-demo/Photos/koala05.png'

export function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn delay={80}>
          <div className="rounded-2xl border border-sky-light bg-sky-light/20 p-8 shadow-sm md:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <img
                src={aboutImageUrl}
                alt="Than, massage therapist at Koala Wellness & Spa"
                width={600}
                height={480}
                loading="lazy"
                className="h-[300px] w-full rounded-2xl object-cover md:h-[480px]"
              />

              <div>
                <h2 className="text-4xl font-semibold text-grey-dark md:text-5xl">
                  Welcome to Your Ultra-Private Sanctuary
                </h2>

                <div className="mt-6 space-y-5 text-lg leading-relaxed text-grey">
                  <p>
                    Step away from the noise of the outside world and step into an exclusive wellness
                    retreat designed entirely around you. Koala Wellness &amp; Spa isn&apos;t just a
                    clinic—it is your ultimate private sanctuary, hidden away in the peaceful
                    Kirkstall countryside.
                  </p>
                  <p>
                    Here, your healing journey unfolds in complete, undisturbed serenity. We operate on
                    a strict, one-to-one appointment basis. That means no crowded waiting rooms, no
                    overlapping clients, and absolutely no interruptions. When you are here, this
                    tranquil space is yours, and yours alone.
                  </p>
                  <p>
                    Qualified therapist Than curates every single session to your exact needs. From
                    Manual Lymphatic Drainage and deep tissue massage to advanced facial treatments
                    using premium Dermalogica products, every detail is crafted to deliver a highly
                    personalized, luxury experience.
                  </p>
                  <p>
                    Whether you are seeking deep relaxation, targeted muscle relief, or advanced skin
                    rejuvenation, we invite you to unwind, restore, and experience wellness without
                    compromise.
                  </p>
                </div>

                <p className="mt-8 text-lg italic text-grey">
                  Your health is our priority — our mission.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
