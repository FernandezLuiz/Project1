import Image from "next/image";

export default function Project3Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Titel */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Visual Design – CineCity</h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Voor dit project ontwierp ik een poster en verschillende visuele
          uitwerkingen voor een filmfestival dat ’s nachts plaatsvindt in Antwerpen.
          De focus lag op sfeer, contrast en typografie.
        </p>

        {/* Website link */}
        <a
          href="https://luizfernandez-code.github.io/CineCity/index.html"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 underline text-sm"
        >
          Bekijk de website →
        </a>
      </div>

      {/* Preview afbeelding (NIET afgesneden) */}
      <div className="rounded-xl overflow-hidden border bg-black">
        <div className="relative w-full h-[520px] md:h-[650px]">
          <Image
            src="/fotos/visual/preview.png"
            alt="CineCity website preview"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* PDF links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="/fotos/visual/poster.pdf"
          target="_blank"
          rel="noreferrer"
          className="border rounded-xl p-6 hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold">Poster ontwerp</h2>
          <p className="text-gray-600 mt-2">Bekijk / download de poster (PDF)</p>
        </a>

        <a
          href="/fotos/visual/visuals.pdf"
          target="_blank"
          rel="noreferrer"
          className="border rounded-xl p-6 hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold">Extra visuals</h2>
          <p className="text-gray-600 mt-2">
            Overige ontwerpen voor het filmfestival
          </p>
        </a>
      </div>
    </div>
  );
}
