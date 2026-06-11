import { site } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-grey-light bg-white py-10">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <p className="text-sm text-grey">
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-grey-muted">Website by Chapter99</p>
      </div>
    </footer>
  )
}
