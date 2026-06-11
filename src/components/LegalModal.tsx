import { useEffect, type ReactNode } from 'react'

type LegalModalProps = {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export function LegalModal({ open, onClose, title, children }: LegalModalProps) {
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
      <button
        type="button"
        className="modal-fade-in absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close dialog"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="modal-fade-in relative z-10 flex h-full w-full max-h-[100dvh] flex-col bg-white shadow-xl sm:h-auto sm:max-h-[80vh] sm:max-w-[720px] sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-grey-light px-5 py-4 sm:px-6">
          <h2 id="legal-modal-title" className="text-2xl font-semibold text-grey-dark">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-grey-muted transition-colors hover:bg-grey-light hover:text-grey-dark"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-6 text-grey sm:px-6">{children}</div>
      </div>
    </div>
  )
}
