import Image from "next/image";

export default function Project1Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      
      {/* Titel */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Blender – Atlantis</h1>
        <p className="text-gray-600 text-lg">
          Voor dit project ontwierp ik een gebouw in Blender voor een
          onderwaterstad gebaseerd op het concept van Atlantis.
          De focus lag op vorm, licht en sfeer binnen een futuristische
          onderwateromgeving.
        </p>
      </div>

      {/* Afbeeldingen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src="/fotos/blender/3D_img1_luiz.png"
          alt="Atlantis Blender project beeld 1"
          width={800}
          height={600}
          className="rounded-lg"
        />
        <Image
          src="/fotos/blender/3D_img2_luiz.png"
          alt="Atlantis Blender project beeld 2"
          width={800}
          height={600}
          className="rounded-lg"
        />
        <Image
          src="/fotos/blender/3D_img3_luiz.png"
          alt="Atlantis Blender project beeld 3"
          width={800}
          height={600}
          className="rounded-lg"
        />
        <Image
          src="/fotos/blender/3D_img4_luiz.png"
          alt="Atlantis Blender project beeld 4"
          width={800}
          height={600}
          className="rounded-lg"
        />
      </div>

    </div>
  );
}
