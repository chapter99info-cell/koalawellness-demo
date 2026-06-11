import { ContactButtons } from './ContactButtons'
import { PaymentBadges } from './PaymentBadges'
import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#5BA4CF] py-10 text-white">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <ContactButtons variant="footer" className="mb-8 justify-center" />
        <PaymentBadges variant="footer" className="mb-8" centered />
        <p className="text-base text-white/80">
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="mt-2 text-base">
          <a
            href={site.chapter99Url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Website by Chapter99
          </a>
        </p>
      </div>
    </footer>
  )
}
