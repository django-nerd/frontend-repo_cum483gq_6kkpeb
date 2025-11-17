import React, { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/products`)
        const data = await res.json()
        setItems(Array.isArray(data) ? data : [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="products" className="relative py-24 bg-gradient-to-b from-slate-950 via-[#0a0614] to-slate-950">
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(800px_400px_at_20%_20%,rgba(124,58,237,0.25),transparent),radial-gradient(1000px_600px_at_80%_80%,rgba(34,211,238,0.25),transparent)]" />
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-fuchsia-200 to-cyan-200">Fresh Drip</h2>
          <div className="text-cyan-200/80 text-sm md:text-base">Vibrant, surreal and ready to wear</div>
        </div>

        {loading ? (
          <div className="mt-16 grid place-items-center text-cyan-100/80">Loading products…</div>
        ) : (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((p, i) => (
              <article key={p.id || i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/[0.08] transition-colors">
                <div className="aspect-square overflow-hidden">
                  <img src={p.image || `https://picsum.photos/seed/${i}/800/800`} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white/95">{p.title}</h3>
                  <p className="mt-1 text-sm text-cyan-100/80 line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-purple-300 to-cyan-300">${p.price?.toFixed ? p.price.toFixed(2) : p.price}</div>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:scale-[1.03] active:scale-[0.98] transition-transform">Add to cart</button>
                  </div>
                </div>
                {p.colors && p.colors.length > 0 && (
                  <div className="absolute top-3 left-3 flex -space-x-1">
                    {p.colors.slice(0, 3).map((c, idx) => (
                      <span key={idx} className="inline-block w-4 h-4 rounded-full border border-white/40" style={{ background: c }} />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
