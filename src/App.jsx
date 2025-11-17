import React from 'react'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur px-4 py-3">
            <a href="#" className="font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300 text-2xl">DRIPHALL</a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#products" className="hover:text-white transition-colors">Products</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15">Sign in</button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-semibold shadow-lg shadow-fuchsia-500/30">Cart (0)</button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <Hero />
        <Products />
        <About />

        <section id="contact" className="relative py-24">
          <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_90%_10%,rgba(99,102,241,0.15),transparent)]" />
          <div className="relative container mx-auto px-6 md:px-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-fuchsia-200 to-cyan-200">Join the Drop</h3>
              <p className="mt-3 text-cyan-100/90">Get the next surreal release straight to your inbox.</p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input type="email" placeholder="Email address" className="flex-1 rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-fuchsia-400/60" />
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-semibold shadow-lg shadow-fuchsia-500/30">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} DRIPHALL — Wearable Street Art
      </footer>
    </div>
  )
}

export default App
