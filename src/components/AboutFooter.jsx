import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react'

const About = () => {
  return (
    <section id="sobre" className="bg-gradient-to-b from-neutral-50 to-white py-16 dark:from-neutral-950 dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Sobre nós</h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              Somos uma loja especializada em infoprodutos premium: cursos, e-books e templates. Nosso foco é combinar conteúdo de alto nível com uma experiência de compra moderna, segura e agradável.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              Transparência, design e performance são nossos pilares. Trabalhamos com produtores e especialistas para entregar resultados reais para o seu negócio.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-lg shadow-neutral-900/5 dark:border-white/10 dark:bg-neutral-900"
          >
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">Por que escolher a gente?</h4>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700 dark:text-neutral-300">
              <li>Checkout integrado com links personalizados</li>
              <li>Painel administrativo para gerenciar produtos e mídia</li>
              <li>Área do cliente para acompanhar compras e entregas</li>
              <li>Base de dados segura e escalável</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10 dark:border-white/10 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} InfiniStore. Todos os direitos reservados.</div>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-300">
            <a href="#" aria-label="Instagram" className="transition hover:text-neutral-900 dark:hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="transition hover:text-neutral-900 dark:hover:text-white"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="transition hover:text-neutral-900 dark:hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="mailto:contato@infinistore.com" className="transition hover:text-neutral-900 dark:hover:text-white"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { About, Footer }
