import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(124,58,237,0.25),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(34,211,238,0.25),transparent)]" />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-white/90">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Live Drop
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white via-fuchsia-200 to-cyan-200 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">
              Street Art Fashion
              <span className="block text-2xl md:text-3xl font-black tracking-tight text-fuchsia-300/90">Cartoon. Surreal. Futuristic.</span>
            </h1>
            <p className="mt-6 text-cyan-100/90 md:text-lg max-w-xl">
              A colorful online store for bold souls. Iridescent gradients, neon sprays and dreamy silhouettes — built for movement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#products" className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:scale-[1.02] active:scale-[0.98] transition-transform">Shop the Drop</a>
              <a href="#about" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold backdrop-blur hover:bg-white/15 transition-colors">About the Vibe</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.08),transparent_45%)]" />
    </section>
  )
}
