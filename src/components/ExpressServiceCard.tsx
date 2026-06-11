import type { expressTreatments } from '../data/site'

type ExpressTreatment = (typeof expressTreatments)[number]

type ExpressServiceCardProps = {
  treatment: ExpressTreatment
}

const mediaClassName = 'h-40 w-full object-cover rounded-t-2xl md:h-[180px]'

export function ExpressServiceCard({ treatment }: ExpressServiceCardProps) {
  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-sky-light bg-sky-light/20 shadow-sm">
      {treatment.media.type === 'image' ? (
        <img
          src={treatment.media.src}
          alt={`${treatment.name} at Koala Wellness & Spa`}
          loading="lazy"
          className={mediaClassName}
        />
      ) : (
        <video
          src={treatment.media.src}
          autoPlay
          muted
          loop
          playsInline
          className={mediaClassName}
        />
      )}

      <div className="flex flex-1 flex-col justify-between p-7 md:p-8">
        <div>
          <h3 className="text-xl font-semibold text-grey-dark">{treatment.name}</h3>
          <p className="mt-2 text-lg text-grey-muted">{treatment.duration}</p>
          <span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-sky-dark shadow-sm">
            + Aromatherapy Oil +$5
          </span>
        </div>
        <p className="mt-6 font-heading text-3xl font-semibold text-sky-dark">{treatment.price}</p>
      </div>
    </article>
  )
}
