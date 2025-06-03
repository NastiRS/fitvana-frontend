import React from 'react'

export default function FontDemo() {
  return (
    <div className="p-6 space-y-6 bg-card rounded-lg">
      <h1 className="text-3xl font-bold">Tipografía Charter</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-xl mb-2">Regular</h2>
          <p className="font-normal">
            Este es un texto de ejemplo usando Charter Regular. La tipografía Bitstream Charter es una fuente serif diseñada por Matthew Carter en 1987.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl mb-2">Italic</h2>
          <p className="italic">
            Este es un texto de ejemplo usando Charter Italic. La tipografía Bitstream Charter es una fuente serif diseñada por Matthew Carter en 1987.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl mb-2">Bold</h2>
          <p className="font-bold">
            Este es un texto de ejemplo usando Charter Bold. La tipografía Bitstream Charter es una fuente serif diseñada por Matthew Carter en 1987.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl mb-2">Bold Italic</h2>
          <p className="font-bold italic">
            Este es un texto de ejemplo usando Charter Bold Italic. La tipografía Bitstream Charter es una fuente serif diseñada por Matthew Carter en 1987.
          </p>
        </div>
      </div>
    </div>
  )
} 