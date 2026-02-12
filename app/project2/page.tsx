export default function Project2Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Brand Project</h1>
        <p className="text-gray-600 text-lg">
          Voor dit project werkte ik aan een brand/copy opdracht. Hieronder kan je
          de PDF’s bekijken of downloaden.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a
          href="/fotos/brand/a2key-copy.pdf"
          target="_blank"
          rel="noreferrer"
          className="border rounded-xl p-6 hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold">A2Key – Copy</h2>
          <p className="text-gray-600 mt-2">Open / download de PDF</p>
        </a>

        <a
          href="/fotos/brand/yesyoucan-copy.pdf"
          target="_blank"
          rel="noreferrer"
          className="border rounded-xl p-6 hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold">YesYouCan – Copy</h2>
          <p className="text-gray-600 mt-2">Open / download de PDF</p>
        </a>
      </div>
    </div>
  );
}
