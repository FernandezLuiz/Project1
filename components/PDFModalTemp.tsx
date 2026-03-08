"use client"

import { useEffect } from "react"

type Props = {
  open: boolean
  onClose: () => void
  src: string
  title?: string
}

export default function PDFModal({ open, onClose, src, title }: Props) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-5xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="font-semibold">{title ?? "PDF"}</div>

          <div className="flex items-center gap-3">
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              Open in nieuw tabblad
            </a>
            <button
              type="button"
              onClick={onClose}
              className="text-sm px-3 py-1 rounded-lg border hover:bg-gray-50"
            >
              Sluiten
            </button>
          </div>
        </div>

        <iframe
          src={src}
          title={title ?? "PDF"}
          className="w-full h-full"
        />
      </div>
    </div>

    
  )
}

