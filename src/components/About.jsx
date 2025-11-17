import React from 'react'
import Parallax from './Parallax'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_10%_10%,rgba(236,72,153,0.15),transparent),radial-gradient(900px_600px_at_90%_90%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Parallax speed={0.15}>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-fuchsia-200 to-cyan-200">About the Vibe</h2>
            </Parallax>
            <p className="mt-6 text-cyan-100/90 max-w-xl">
              We remix street culture into wearable art: neon drips, chrome doodles, dreamlike silhouettes. Built with a cartoon-surreal aesthetic and engineered for movement. Each drop is limited, bold and unapologetically colorful.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-white/90">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-3xl font-black">∞</div>
                <div className="text-xs uppercase tracking-wider text-cyan-200/80">Creativity</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-3xl font-black">3D</div>
                <div className="text-xs uppercase tracking-wider text-cyan-200/80">Playground</div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <div className="text-3xl font-black">24/7</div>
                <div className="text-xs uppercase tracking-wider text-cyan-200/80">Hype</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Parallax speed={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop" alt="style 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1400&auto=format&fit=crop" alt="style 2" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop" alt="style 3" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1400&auto=format&fit=crop" alt="style 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  )
}
