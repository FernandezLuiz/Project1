"use client"

import ImageModal from "../../components/ImageModal"

export default function Project1Page() {
  const tags = ["Blender", "3D", "Lighting", "Worldbuilding"]

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-black to-zinc-900 text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
        <div className="relative p-8 md:p-12 space-y-5">
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Blender – Atlantis
          </h1>

          <p className="text-white/80 max-w-3xl text-base md:text-lg leading-relaxed">
            Voor dit project ontwierp ik een onderwaterclub genaamd AquaGroove in Blender voor de
            fictieve onderwaterstad Atlantis. De focus lag op vorm, licht en sfeer binnen de bekende onderwateromgeving.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Renders</h2>
        <p className="text-gray-600">Klik op een render om hem groot te bekijken.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white p-3 shadow-sm">
            <ImageModal src="/fotos/blender/3D_img1_luiz.png" alt="Atlantis render 1" />
          </div>
          <div className="rounded-2xl border bg-white p-3 shadow-sm">
            <ImageModal src="/fotos/blender/3D_img2_luiz.png" alt="Atlantis render 2" />
          </div>
          <div className="rounded-2xl border bg-white p-3 shadow-sm">
            <ImageModal src="/fotos/blender/3D_img3_luiz.png" alt="Atlantis render 3" />
          </div>
          <div className="rounded-2xl border bg-white p-3 shadow-sm">
            <ImageModal src="/fotos/blender/3D_img4_luiz.png" alt="Atlantis render 4" />
          </div>
        </div>
      </section>
    </div>
  )
}