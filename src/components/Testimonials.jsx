import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marina S.',
    role: 'Empreendedora',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    text: 'Plataforma linda e super confiável. Meu faturamento aumentou após implementar os materiais da loja!'
  },
  {
    id: 2,
    name: 'Carlos A.',
    role: 'Designer',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    rating: 5,
    text: 'Os templates são impecáveis e o checkout foi muito simples. Recomendo demais!'
  },
  {
    id: 3,
    name: 'Fernanda P.',
    role: 'Criadora de Conteúdo',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop',
    rating: 4,
    text: 'Atendimento excelente e produtos com um visual premium. Voltarei a comprar.'
  },
]

const Stars = ({ count }) => (
  <div className="flex items-center gap-1 text-amber-500">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-current" />
    ))}
  </div>
)

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-white py-16 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">O que nossos clientes dizem</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Feedback real de quem já comprou.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border border-neutral-200/60 bg-gradient-to-b from-white to-neutral-50 p-6 shadow-lg shadow-neutral-900/5 dark:border-white/10 dark:from-neutral-900 dark:to-neutral-900/60"
            >
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white">{t.name}</div>
                  <div className="text-sm text-neutral-500">{t.role}</div>
                </div>
              </div>
              <div className="mt-4">
                <Stars count={t.rating} />
                <p className="mt-3 text-neutral-700 dark:text-neutral-300">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
