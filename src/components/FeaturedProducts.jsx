import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Share2, Star } from 'lucide-react'

const products = [
  {
    id: 'p1',
    title: 'Masterclass UX para Infoprodutos',
    description: 'Domine design e conversão com técnicas práticas.',
    price: 399,
    discountPrice: 249,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1553484771-898ed465e931?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'p2',
    title: 'Pack de Templates Notion Pro',
    description: 'Organize projetos, conteúdo e funis de venda.',
    price: 199,
    discountPrice: 99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1536250280793-064d9fb83b0c?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI1MjE1MTZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p3',
    title: 'E-book Copywriting de Alta Conversão',
    description: 'Textos que vendem sem parecer que estão vendendo.',
    price: 149,
    discountPrice: 79,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'
  },
]

const ProductCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl border border-neutral-200/50 bg-white p-4 shadow-lg shadow-neutral-900/5 ring-1 ring-black/5 dark:border-white/10 dark:bg-neutral-900 dark:ring-white/10"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img src={item.image} alt={item.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{item.title}</h3>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">{item.rating}</span>
          </div>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.description}</p>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-xs line-through text-neutral-400">R$ {item.price}</span>
          <span className="text-base font-semibold text-emerald-600">R$ {item.discountPrice}</span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:brightness-110 dark:bg-white dark:text-neutral-900">
            <ShoppingCart className="h-4 w-4" /> Comprar
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/5">
            <Share2 className="h-4 w-4" /> Compartilhar
          </button>
        </div>
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-emerald-500/30">
        -{Math.round(((item.price - item.discountPrice) / item.price) * 100)}%
      </div>
    </motion.div>
  )
}

const FeaturedProducts = () => {
  return (
    <section id="produtos" className="relative z-10 bg-gradient-to-b from-white to-neutral-50 py-16 dark:from-neutral-950 dark:to-neutral-950/90">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">Produtos em destaque</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Seleção curada dos mais vendidos e bem avaliados.</p>
          </div>
          <a href="#" className="text-sm font-medium text-emerald-700 underline-offset-4 hover:underline dark:text-emerald-400">Ver todos</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
