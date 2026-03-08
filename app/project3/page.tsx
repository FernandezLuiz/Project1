"use client"

import { useState } from "react"
import ImageModal from "../../components/ImageModal"
import PDFModal from "../../components/PDFModalTemp"

export default function Project3Page() {
  const [pdfOpen, setPdfOpen] = useState(false)
  const [activePdf, setActivePdf] = useState<{ src: string; title: string } | null>(null)

  const openPdf = (src: string, title: string) => {
    setActivePdf({ src, title })
    setPdfOpen(true)
  }

  const closePdf = () => {
    setPdfOpen(false)
    setActivePdf(null)
  }

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-black to-zinc-900 text-white">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="relative p-8 md:p-12 space-y-5">
          <div className="flex flex-wrap gap-2">
            {["Visual Design", "Poster", "Typografie", "Antwerpen"].map((t) => (
              <span key={t} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Visual Design – CineCity
          </h1>

          <p className="text-white/80 max-w-3xl text-base md:text-lg leading-relaxed">
            Poster + visuals voor een filmfestival dat ’s nachts plaatsvindt in Antwerpen.
            Focus op sfeer, contrast en typografie.
          </p>

          <a
            href="https://luizfernandez-code.github.io/CineCity/index.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition"
          >
            Bekijk de website →
          </a>
        </div>
      </section>

      {/* Preview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Website preview</h2>
        <p className="text-gray-600">Klik op de afbeelding om ze groot te bekijken.</p>

        <div className="rounded-2xl border bg-black p-4 shadow-sm">
          <ImageModal src="/fotos/visual/preview.png" alt="CineCity website preview" />
        </div>
      </section>

      {/* Assets */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Deliverables</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Poster</h3>
            <p className="text-gray-600 mt-2 mb-4">Klik op de poster om te openen.</p>
            <ImageModal src="/fotos/visual/poster.png" alt="CineCity poster" />
          </div>

          <button
            type="button"
            onClick={() => openPdf("/fotos/visual/visuals.pdf", "Extra visuals")}
            className="text-left rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">Extra visuals (PDF)</h3>
            <p className="text-gray-600 mt-2">Klik om te openen in modal.</p>
          </button>
        </div>
      </section>

      {activePdf && (
        <PDFModal open={pdfOpen} onClose={closePdf} src={activePdf.src} title={activePdf.title} />
      )}
    </div>
  )
}