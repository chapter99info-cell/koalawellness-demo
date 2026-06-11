import { site } from '../data/site'

export function PrivacyPolicyContent() {
  return (
    <div className="space-y-5 text-base leading-relaxed">
      <p>
        {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy.
        This Privacy Policy explains how we collect, use, and protect personal information when you
        visit our website or book a treatment at our spa in Kirkstall, Victoria.
      </p>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Information we collect</h3>
        <p>When you book an appointment or contact us, we may collect:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Your name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Appointment details (service, date, and time)</li>
          <li>Any health or treatment notes you voluntarily provide before your session</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">How we use your information</h3>
        <p>We use your information solely to:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Manage and confirm your bookings</li>
          <li>Send appointment reminders and follow-up communications</li>
          <li>Respond to enquiries and provide customer support</li>
          <li>Maintain accurate treatment records where required for your care</li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Sharing your information</h3>
        <p>
          We do not sell, rent, or share your personal information with third parties for marketing
          purposes. Your details are used only by {site.name} for the purposes described above.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Google Maps</h3>
        <p>
          Our website includes an embedded Google Maps feature to help you find our studio at{' '}
          {site.address}. Google may collect certain technical data when you interact with the map,
          in accordance with Google&apos;s own privacy policy.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Data retention and deletion</h3>
        <p>
          We retain booking and contact information only for as long as necessary to provide our
          services and meet legal obligations. You may request access to, correction of, or deletion
          of your personal information at any time by contacting us at{' '}
          <a href={`mailto:${site.email}`} className="text-sky-dark hover:underline">
            {site.email}
          </a>{' '}
          or calling {site.phone}.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Your rights under Australian law</h3>
        <p>
          This policy is governed by the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy
          Principles. If you have a concern about how we handle your personal information, you may
          contact us directly or lodge a complaint with the Office of the Australian Information
          Commissioner (OAIC).
        </p>
      </section>

      <p className="text-sm text-grey-muted">Last updated: June 2026</p>
    </div>
  )
}
