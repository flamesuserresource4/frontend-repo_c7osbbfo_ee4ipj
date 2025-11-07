import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Share2, Star } from 'lucide-react'

const DB = {
  'ux-master': {
    id: 'ux-master',
    title: 'Masterclass UX para Infoprodutos',
    description:
      'Aprenda a planejar e desenhar experiências de alto impacto para infoprodutos. Estrutura de aula, padrões de UI, heurísticas e funil de conversão.',
    price: 399,
    discountPrice: 249,
    stock: 32,
    media: [
      'https://images.unsplash.com/photo-1553484771-898ed465e931?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1529336953121-a0cecf3d1f50?q=80&w=1600&auto=format&fit=crop'
    ],
    rating: 4.9,
    checkout: 'https://pay.seu-checkout.com/ux-master'
  },
  'notion-pack': {
    id: 'notion-pack',
    title: 'Pack de Templates Notion Pro',
    description:
      'Coleção completa de templates para produtividade, gestão de conteúdo e projetos. Inclui dashboards e automações.',
    price: 199,
    discountPrice: 99,
    stock: 15,
    media: [
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
    ],
    rating: 4.8,
    checkout: 'https://pay.seu-checkout.com/notion-pack'
  },
  copybook: {
    id: 'copybook',
    title: 'E-book Copywriting de Alta Conversão',
    description:
      'Estratégias e frameworks práticos para escrever textos que vendem, sem soar apelativo. Inclui casos reais e exercícios.',
    price: 149,
    discountPrice: 79,
    stock: 50,
    media: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop'
    ],
    rating: 4.7,
    checkout: 'https://pay.seu-checkout.com/copybook'
  }
}

const ProductDetail = () => {
  const { id } = useParams()
  const p = DB[id]

  if (!p) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Produto não encontrado</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">Verifique o link ou volte para a lista de produtos.</p>
        <a href="/produtos" className="mt-6 inline-block rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">Voltar para produtos</a>
      </main>
    )
  }

  return (
    <main className="bg-gradient-to-b from-white to-neutral-50 py-12 dark:from-neutral-950 dark:to-neutral-950/90">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-2 shadow dark:border-white/10 dark:bg-neutral-900">
            <img src={p.media[0]} alt={p.title} className="h-[420px] w-full rounded-xl object-cover" />
          </div>
          {p.media.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {p.media.slice(1).map((m, i) => (
                <img key={i} src={m} alt="media" className="h-24 w-full rounded-lg object-cover" />
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">{p.title}</h1>
          <div className="mt-2 flex items-center gap-2 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm text-neutral-600 dark:text-neutral-300">{p.rating} • {p.stock} em estoque</span>
          </div>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">{p.description}</p>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-sm line-through text-neutral-400">R$ {p.price}</span>
            <span className="text-3xl font-bold text-emerald-600">R$ {p.discountPrice}</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={p.checkout} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 dark:bg-white dark:text-neutral-900">
              <ShoppingCart className="h-4 w-4" /> Comprar agora
            </a>
            <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/5">
              <Share2 className="h-4 w-4" /> Compartilhar
            </button>
          </div>
          <div className="mt-8 rounded-2xl border border-neutral-200/60 bg-white p-5 text-sm text-neutral-700 shadow dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300">
            Checkout personalizado: você será redirecionado para a página segura de pagamento do produtor.
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail
