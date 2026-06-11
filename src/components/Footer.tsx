import { useState } from 'react'
import { ContactButtons } from './ContactButtons'
import { LegalModal } from './LegalModal'
import { PaymentBadges } from './PaymentBadges'
import { PrivacyPolicyContent } from './PrivacyPolicyContent'
import { TermsOfServiceContent } from './TermsOfServiceContent'
import { site } from '../data/site'

type LegalModalType = 'privacy' | 'terms' | null

const legalLinkClass =
  'text-sm text-white/70 transition-colors hover:text-white hover:underline'

export function Footer() {
  const year = new Date().getFullYear()
  const [openModal, setOpenModal] = useState<LegalModalType>(null)

  return (
    <>
      <footer className="bg-[#5BA4CF] py-10 text-white">
        <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
          <ContactButtons variant="footer" className="mb-8 justify-center" />
          <PaymentBadges variant="footer" className="mb-8" centered />
          <p className="text-base text-white/80">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-white/70">
            <button
              type="button"
              onClick={() => setOpenModal('privacy')}
              className={legalLinkClass}
            >
              Privacy Policy
            </button>
            <span className="mx-2">·</span>
            <button
              type="button"
              onClick={() => setOpenModal('terms')}
              className={legalLinkClass}
            >
              Terms of Service
            </button>
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

      <LegalModal
        open={openModal === 'privacy'}
        onClose={() => setOpenModal(null)}
        title="Privacy Policy"
      >
        <PrivacyPolicyContent />
      </LegalModal>

      <LegalModal
        open={openModal === 'terms'}
        onClose={() => setOpenModal(null)}
        title="Terms of Service"
      >
        <TermsOfServiceContent />
      </LegalModal>
    </>
  )
}
