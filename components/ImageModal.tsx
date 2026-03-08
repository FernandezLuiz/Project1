"use client"

import { useState } from "react"

interface ImageModalProps {
  src: string
  alt: string
}

export default function ImageModal({ src, alt }: ImageModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Thumbnail */}
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl hover:opacity-80 transition"
      />

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-5xl max-h-[90vh] rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}