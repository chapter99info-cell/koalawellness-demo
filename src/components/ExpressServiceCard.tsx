import type { expressTreatments } from '../data/site'

type ExpressTreatment = (typeof expressTreatments)[number]

type ExpressServiceCardProps = {
  treatment: ExpressTreatment
  index: number
}

export function ExpressServiceCard({ treatment, index }: ExpressServiceCardProps) {
  return (
    <article
      className="express-card flex h-full flex-col justify-between rounded-2xl border border-sky-light bg-sky-light/20 p-7 shadow-sm md:p-8"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div>
        <h3 className="text-xl font-semibold text-grey-dark">{treatment.name}</h3>
        <p className="mt-2 text-lg text-grey-muted">{treatment.duration}</p>
        <span className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium text-sky-dark shadow-sm">
          + Aromatherapy Oil +$5
        </span>
      </div>
      <p className="mt-6 font-heading text-3xl font-semibold text-sky-dark">{treatment.price}</p>
    </article>
  )
}
