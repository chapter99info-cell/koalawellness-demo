import { externalLinkProps, site } from '../data/site'

const visitReviewUrl = 'https://maps.app.goo.gl/zgSdv8PVE2E6LKgd7'
const visitFacebookUrl = 'https://www.facebook.com/profile.php?id=61573023630352'

const baseButtonClass =
  'inline-flex min-w-[200px] items-center justify-center gap-3 rounded-full px-6 py-[14px] text-lg font-semibold shadow-md transition-opacity hover:opacity-90'

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="visit-instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#833ab4" />
          <stop offset="50%" stopColor="#fd1d1d" />
          <stop offset="100%" stopColor="#fcb045" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#visit-instagram-gradient)" />
      <path
        fill="#fff"
        d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 12 9 3.1 3.1 0 0 1 12 15.1zM16.55 6.7a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0zM17.8 7.5h-11.6A1.7 1.7 0 0 0 4.5 9.2v7.1a1.7 1.7 0 0 0 1.7 1.7h11.6a1.7 1.7 0 0 0 1.7-1.7V9.2a1.7 1.7 0 0 0-1.7-1.7zm-1 8.1h-9.6a.7.7 0 0 1-.7-.7V9.9a.7.7 0 0 1 .7-.7h9.6a.7.7 0 0 1 .7.7v5a.7.7 0 0 1-.7.7z"
      />
    </svg>
  )
}

export function VisitContactButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${className}`}>
      <a href={site.phoneHref} className={`${baseButtonClass} bg-sky-dark text-white`}>
        <PhoneIcon />
        Call Now
      </a>

      <a
        href={visitReviewUrl}
        {...externalLinkProps}
        className={`${baseButtonClass} border border-grey-light bg-white text-grey-dark`}
      >
        <GoogleIcon />
        Leave a Review
      </a>

      <a
        href={visitFacebookUrl}
        {...externalLinkProps}
        className={`${baseButtonClass} bg-[#1877F2] text-white`}
      >
        <FacebookIcon />
        Message on Facebook
      </a>

      <a
        href={site.instagramUrl}
        {...externalLinkProps}
        className={`${baseButtonClass} bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white`}
      >
        <InstagramIcon />
        Follow on Instagram
      </a>
    </div>
  )
}
