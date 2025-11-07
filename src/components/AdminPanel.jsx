import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Pencil, Trash2, Link as LinkIcon, Image as ImageIcon, Video } from 'lucide-react'

const initialProducts = [
  { id: 'ux-master', title: 'Masterclass UX para Infoprodutos', price: 399, discountPrice: 249, stock: 32, media: [], checkout: 'https://pay.seu-checkout.com/ux-master' },
  { id: 'notion-pack', title: 'Pack de Templates Notion Pro', price: 199, discountPrice: 99, stock: 15, media: [], checkout: 'https://pay.seu-checkout.com/notion-pack' },
]

const AdminPanel = () => {
  const [products, setProducts] = useState(initialProducts)
  const [form, setForm] = useState({ id: '', title: '', price: '', discountPrice: '', stock: '', checkout: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.id) return
    setProducts(prev => {
      const exists = prev.some(p => p.id === form.id)
      if (exists) return prev.map(p => (p.id === form.id ? { ...p, ...form, price: Number(form.price), discountPrice: Number(form.discountPrice), stock: Number(form.stock) } : p))
      return [...prev, { ...form, price: Number(form.price), discountPrice: Number(form.discountPrice), stock: Number(form.stock), media: [] }]
    })
    setForm({ id: '', title: '', price: '', discountPrice: '', stock: '', checkout: '' })
  }

  const handleDelete = (id) => setProducts(prev => prev.filter(p => p.id !== id))

  return (
    <main className="bg-gradient-to-b from-white to-neutral-50 py-14 dark:from-neutral-950 dark:to-neutral-950/90">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Painel Administrativo</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Gerencie produtos, preços, estoque e checkout.</p>
          </div>

          <div className="space-y-4">
            {products.map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-2xl border border-neutral-200/60 bg-white p-4 shadow dark:border-white/10 dark:bg-neutral-900">
                <div>
                  <div className="text-sm text-neutral-500">{p.id}</div>
                  <div className="font-semibold text-neutral-900 dark:text-white">{p.title}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">
                    R$ {p.discountPrice} <span className="line-through">R$ {p.price}</span> • {p.stock} em estoque
                  </div>
                  <a href={p.checkout} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-emerald-600 underline-offset-4 hover:underline dark:text-emerald-400"><LinkIcon className="h-4 w-4" /> Link de checkout</a>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setForm({ ...p })} className="rounded-lg border border-neutral-200 px-3 py-2 text-sm hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/5"><Pencil className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(p.id)} className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:border-red-400/30 dark:hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="h-fit rounded-2xl border border-neutral-200/60 bg-white p-6 shadow dark:border-white/10 dark:bg-neutral-900">
          <h2 className="mb-4 text-lg font-semibold">Adicionar/Editar produto</h2>
          <div className="space-y-3">
            <input value={form.id} onChange={e => setForm({ ...form, id: e.target.value })} placeholder="Slug (ex: ux-master)" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
            <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Título" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
            <div className="grid grid-cols-3 gap-3">
              <input value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="Preço" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
              <input value={form.discountPrice} onChange={e => setForm({ ...form, discountPrice: e.target.value })} placeholder="Promoção" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
              <input value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} placeholder="Estoque" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
            </div>
            <input value={form.checkout} onChange={e => setForm({ ...form, checkout: e.target.value })} placeholder="Link do checkout" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <ImageIcon className="h-4 w-4" /> Fotos • <Video className="h-4 w-4" /> Vídeos
              <span className="ml-auto text-neutral-400">(gerenciar mídia em breve)</span>
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25">
              <Plus className="h-4 w-4" /> Salvar produto
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AdminPanel
