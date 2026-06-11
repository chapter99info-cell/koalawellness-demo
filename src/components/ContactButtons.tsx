import { externalLinkProps, site } from '../data/site'

const buttonClass =
  'inline-flex min-h-[48px] w-full items-center justify-center rounded-full border-2 border-sky-dark bg-white px-6 py-3 text-sm font-semibold text-sky-dark shadow-sm transition-colors hover:bg-sky-dark hover:text-white sm:w-auto'

export function ContactButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      <a href={site.phoneHref} className={buttonClass}>
        📞 Call Now
      </a>
      <a href={site.facebookUrl} {...externalLinkProps} className={buttonClass}>
        💬 Message on Facebook
      </a>
      <a href={site.reviewUrl} {...externalLinkProps} className={buttonClass}>
        ⭐ Leave us a Review
      </a>
    </div>
  )
}
