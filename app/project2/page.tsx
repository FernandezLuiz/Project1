"use client"

import { useState } from "react"
import PDFModal from "../../components/PDFModalTemp"

export default function Project2Page() {
  const [open, setOpen] = useState(false)
  const [activePdf, setActivePdf] = useState<{ src: string; title: string } | null>(null)

  const openPdf = (src: string, title: string) => {
    setActivePdf({ src, title })
    setOpen(true)
  }

  const closePdf = () => {
    setOpen(false)
    setActivePdf(null)
  }

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.08),transparent_55%)]" />
        <div className="relative p-8 md:p-12 space-y-4">
          <div className="flex flex-wrap gap-2">
            {["Branding", "Copywriting", "Concept"].map((t) => (
              <span key={t} className="rounded-full border bg-white px-3 py-1 text-xs">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Brand Project
          </h1>

          <p className="text-gray-600 max-w-3xl text-base md:text-lg leading-relaxed">
            Dit project ging over een blik ontwerpen, ik heb ervoor gekozen om een IPA 0.0% te ontwerpen, hieronder zie mijn keyvisual en mijn ontwerp. 
          </p>
        </div>
      </section>

      {/* Files */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Bestanden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => openPdf("/fotos/brand/a2key-copy.pdf", "A2Key – Copy")}
            className="group text-left rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">KeyVisual</h3>
                <p className="text-gray-600 mt-2">Klik om te openen in modal</p>
              </div>
              <span className="rounded-xl border px-3 py-1 text-xs text-gray-700 group-hover:bg-gray-50">
                PDF
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => openPdf("/fotos/brand/yesyoucan-copy.pdf", "YesYouCan – Copy")}
            className="group text-left rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">YesYouCan </h3>
                <p className="text-gray-600 mt-2">Klik om te openen in modal</p>
              </div>
              <span className="rounded-xl border px-3 py-1 text-xs text-gray-700 group-hover:bg-gray-50">
                PDF
              </span>
            </div>
          </button>
        </div>
      </section>

      {activePdf && (
        <PDFModal open={open} onClose={closePdf} src={activePdf.src} title={activePdf.title} />
      )}
    </div>
  )
}