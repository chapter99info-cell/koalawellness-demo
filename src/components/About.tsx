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
                  Meet Than — Your Dedicated Therapist
                </h2>

                <div className="mt-6 space-y-5 text-lg leading-relaxed text-grey">
                  <p>
                    Finding a space to truly unwind can be difficult in a busy world. I&apos;m Than,
                    a fully qualified massage therapist, and my goal is to offer you an experience
                    that goes beyond a standard spa visit.
                  </p>
                  <p>
                    I have purposefully designed my Kirkstall studio to be an ultra-private haven. By
                    taking only dedicated, individual bookings, I ensure that you receive 100% of my
                    focus in a deeply calming, soundproofed environment. There is no waiting in line
                    and no background chatter — just you, premium treatments tailored to your needs,
                    and absolute tranquility.
                  </p>
                  <p>
                    From the moment you arrive, my focus is entirely on your well-being.
                  </p>
                </div>

                <p className="mt-8 text-lg italic text-grey">
                  &ldquo;Your health is our priority — our mission.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
