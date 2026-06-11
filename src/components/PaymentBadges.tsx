type PaymentBadgeProps = {
  className?: string
  centered?: boolean
  variant?: 'default' | 'footer'
}

function VisaIcon() {
  return (
    <svg viewBox="0 0 48 32" aria-hidden className="h-5 w-auto">
      <rect width="48" height="32" rx="4" fill="#1A1F71" />
      <text x="24" y="21" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
        VISA
      </text>
    </svg>
  )
}

function MastercardIcon() {
  return (
    <svg viewBox="0 0 48 32" aria-hidden className="h-5 w-auto">
      <rect width="48" height="32" rx="4" fill="#fff" stroke="#e5e7eb" />
      <circle cx="19" cy="16" r="8" fill="#EB001B" />
      <circle cx="29" cy="16" r="8" fill="#F79E1B" fillOpacity="0.9" />
    </svg>
  )
}

function ApplePayIcon() {
  return (
    <svg viewBox="0 0 48 32" aria-hidden className="h-5 w-auto">
      <rect width="48" height="32" rx="4" fill="#000" />
      <text x="24" y="20" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600" fontFamily="Arial, sans-serif">
        Pay
      </text>
    </svg>
  )
}

function GooglePayIcon() {
  return (
    <svg viewBox="0 0 48 32" aria-hidden className="h-5 w-auto">
      <rect width="48" height="32" rx="4" fill="#fff" stroke="#e5e7eb" />
      <text x="24" y="20" textAnchor="middle" fontSize="9" fontWeight="600" fontFamily="Arial, sans-serif">
        <tspan fill="#4285F4">G</tspan>
        <tspan fill="#374151"> Pay</tspan>
      </text>
    </svg>
  )
}

function SquareIcon() {
  return (
    <svg viewBox="0 0 48 32" aria-hidden className="h-5 w-auto">
      <rect width="48" height="32" rx="4" fill="#fff" stroke="#e5e7eb" />
      <rect x="10" y="10" width="12" height="12" rx="2" fill="#000" />
      <text x="30" y="20" textAnchor="middle" fill="#374151" fontSize="8" fontWeight="600" fontFamily="Arial, sans-serif">
        Sq
      </text>
    </svg>
  )
}

const paymentBadges = [
  { id: 'visa', label: 'Visa', icon: VisaIcon },
  { id: 'mastercard', label: 'Mastercard', icon: MastercardIcon },
  { id: 'apple-pay', label: 'Apple Pay', icon: ApplePayIcon },
  { id: 'google-pay', label: 'Google Pay', icon: GooglePayIcon },
  { id: 'square', label: 'Square', icon: SquareIcon },
] as const

export function PaymentBadges({
  className = '',
  centered = false,
  variant = 'default',
}: PaymentBadgeProps) {
  const isFooter = variant === 'footer'

  return (
    <div className={className}>
      <p
        className={`text-sm font-semibold uppercase tracking-wide ${
          isFooter ? 'text-white' : 'text-grey-muted'
        } ${centered ? 'text-center' : ''}`}
      >
        We accept
      </p>
      <ul
        className={`mt-3 flex flex-wrap gap-2 ${centered ? 'justify-center' : ''}`}
        aria-label="Accepted payment methods"
      >
        {paymentBadges.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <span
              className={
                isFooter
                  ? 'inline-flex items-center rounded-full bg-white px-3 py-2 shadow-sm'
                  : 'inline-flex items-center rounded-md border border-grey-light bg-white px-2 py-1.5 shadow-sm'
              }
              title={label}
              aria-label={label}
            >
              <Icon />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
