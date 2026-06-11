import { site } from '../data/site'

export function TermsOfServiceContent() {
  return (
    <div className="space-y-5 text-base leading-relaxed">
      <p>
        These Terms of Service apply when you book or receive treatments at {site.name}, located at{' '}
        {site.address}. By making a booking, you agree to the following terms.
      </p>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Bookings &amp; cancellations</h3>
        <p>
          Appointments can be made online via our booking system or by phone. We require at least{' '}
          <strong>24 hours&apos; notice</strong> to cancel or reschedule an appointment. Cancellations
          made with less than 24 hours&apos; notice may be charged in full at our discretion,
          particularly for extended or specialty treatments.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Late arrivals</h3>
        <p>
          Please arrive on time for your appointment. Late arrivals may result in a shortened
          treatment to avoid delaying the next client, with the full service fee still payable. If
          you are running late, please call us on {site.phone} as soon as possible.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Health disclosure</h3>
        <p>
          For your safety, you must inform us of any medical conditions, injuries, allergies,
          pregnancy, or medications that may affect your treatment before your session begins. We
          reserve the right to modify or decline a treatment if we believe it may pose a health risk.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Right to refuse service</h3>
        <p>
          {site.name} reserves the right to refuse or discontinue service to any client whose
          behaviour is inappropriate, unsafe, or disruptive, or where a treatment is deemed
          unsuitable for health or professional reasons. Any fees for services already rendered
          remain payable.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Gift vouchers</h3>
        <p>
          Gift vouchers are non-refundable and cannot be exchanged for cash. Vouchers are valid for
          the period stated at the time of purchase and must be presented at the time of booking or
          payment. Lost or stolen vouchers cannot be replaced.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Pricing</h3>
        <p>
          All prices displayed on our website and booking system are in Australian dollars (AUD) and
          are subject to change without notice. The price confirmed at the time of booking will
          apply to that appointment.
        </p>
      </section>

      <section>
        <h3 className="mb-2 text-lg font-semibold text-grey-dark">Governing law</h3>
        <p>
          These terms are governed by the laws of the State of Victoria, Australia. Any disputes
          arising from services provided by {site.name} shall be subject to the exclusive
          jurisdiction of the courts of Victoria.
        </p>
      </section>

      <p>
        For questions about these terms, contact us at{' '}
        <a href={`mailto:${site.email}`} className="text-sky-dark hover:underline">
          {site.email}
        </a>{' '}
        or {site.phone}.
      </p>

      <p className="text-sm text-grey-muted">Last updated: June 2026</p>
    </div>
  )
}
