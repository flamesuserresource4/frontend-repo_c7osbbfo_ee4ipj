import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, SlidersHorizontal, ShoppingCart, Share2, Star } from 'lucide-react'

const MOCK_PRODUCTS = [
  {
    id: 'ux-master',
    title: 'Masterclass UX para Infoprodutos',
    description: 'Domine design e conversão com técnicas práticas e aplicáveis.',
    price: 399,
    discountPrice: 249,
    stock: 32,
    media: [
      'https://images.unsplash.com/photo-1553484771-898ed465e931?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529336953121-a0cecf3d1f50?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.9,
    checkout: 'https://pay.seu-checkout.com/ux-master'
  },
  {
    id: 'notion-pack',
    title: 'Pack de Templates Notion Pro',
    description: 'Organize projetos, conteúdo e funis de venda.',
    price: 199,
    discountPrice: 99,
    stock: 15,
    media: [
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.8,
    checkout: 'https://pay.seu-checkout.com/notion-pack'
  },
  {
    id: 'copybook',
    title: 'E-book Copywriting de Alta Conversão',
    description: 'Textos que vendem sem parecer que estão vendendo.',
    price: 149,
    discountPrice: 79,
    stock: 50,
    media: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.7,
    checkout: 'https://pay.seu-checkout.com/copybook'
  }
]

const ProductCard = ({ p }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 16 }}
    transition={{ duration: 0.25 }}
    className="group rounded-2xl border border-neutral-200/60 bg-white p-4 shadow-lg shadow-neutral-900/5 ring-1 ring-black/5 dark:border-white/10 dark:bg-neutral-900 dark:ring-white/10"
  >
    <a href={`/produtos/${p.id}`} className="block overflow-hidden rounded-xl">
      <img src={p.media[0]} alt={p.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
    </a>
    <div className="mt-4 space-y-2">
      <div className="flex items-start justify-between gap-3">
        <a href={`/produtos/${p.id}`} className="text-lg font-semibold text-neutral-900 hover:underline dark:text-white">{p.title}</a>
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">{p.rating}</span>
        </div>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{p.description}</p>
      <div className="mt-2 flex items-center gap-3">
        <span className="text-xs line-through text-neutral-400">R$ {p.price}</span>
        <span className="text-base font-semibold text-emerald-600">R$ {p.discountPrice}</span>
        <span className="ml-auto text-xs text-neutral-500">{p.stock} em estoque</span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <a href={p.checkout} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:brightness-110 dark:bg-white dark:text-neutral-900">
          <ShoppingCart className="h-4 w-4" /> Comprar
        </a>
        <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/5">
          <Share2 className="h-4 w-4" /> Compartilhar
        </button>
      </div>
    </div>
  </motion.div>
)

const ProductsPage = () => {
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const term = q.toLowerCase()
    return MOCK_PRODUCTS.filter(p => p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term))
  }, [q])

  return (
    <main className="bg-gradient-to-b from-white to-neutral-50 py-14 dark:from-neutral-950 dark:to-neutral-950/90">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Produtos</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Encontre o infoproduto ideal para você.</p>
          </div>
          <div className="flex w-full max-w-md items-center rounded-xl border border-neutral-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur md:w-auto dark:border-white/10 dark:bg-neutral-900/60">
            <Search className="h-4 w-4 text-neutral-400" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar produtos..." className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-neutral-400" />
            <SlidersHorizontal className="h-4 w-4 text-neutral-400" />
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(p => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </main>
  )
}

export default ProductsPage
