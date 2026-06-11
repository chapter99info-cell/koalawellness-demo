import { ContactButtons } from './ContactButtons'
import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-grey-light bg-white py-10">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <ContactButtons className="mb-8 justify-center" />
        <p className="text-sm text-grey">
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-grey-muted">
          <a
            href={site.chapter99Url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sky-dark"
          >
            Website by Chapter99
          </a>
        </p>
      </div>
    </footer>
  )
}
