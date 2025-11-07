import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute -inset-x-20 inset-y-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pt-6">
        {/* Top nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20" />
            <span className="text-lg font-semibold tracking-tight">InfiniStore</span>
          </div>
          <nav className="hidden gap-8 text-sm text-white/80 md:flex">
            <a href="#produtos" className="transition hover:text-white">Produtos</a>
            <a href="#depoimentos" className="transition hover:text-white">Depoimentos</a>
            <a href="#sobre" className="transition hover:text-white">Sobre</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#produtos"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-110"
            >
              Ver produtos
            </a>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 items-center gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Infoprodutos premium com design moderno e credibilidade.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Cursos, e-books e templates criados por especialistas. Visual impecável, experiência fluida e checkout fácil.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#produtos"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg shadow-white/20 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
              >
                Comprar agora
              </a>
              <a
                href="#sobre"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/10"
              >
                Conheça a loja
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-center justify-between">
                  <span>Checkout personalizado</span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">Pronto</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Área do cliente</span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">Pronto</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Painel administrativo</span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">Pronto</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Rastreamento (Correios)</span>
                  <span className="rounded-full bg-yellow-400/20 px-3 py-1 text-yellow-200">Em breve</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
