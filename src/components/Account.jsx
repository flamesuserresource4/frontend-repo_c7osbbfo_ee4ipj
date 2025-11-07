import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, LogIn, LogOut, Package, Settings } from 'lucide-react'

const Account = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [tab, setTab] = useState('login')

  const handleLogin = (e) => {
    e.preventDefault()
    setIsAuth(true)
    setTab('historico')
  }

  const handleLogout = () => {
    setIsAuth(false)
    setTab('login')
  }

  return (
    <main className="bg-gradient-to-b from-white to-neutral-50 py-14 dark:from-neutral-950 dark:to-neutral-950/90">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Área do Cliente</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Faça login para acompanhar compras e editar seus dados.</p>
          </div>
          {isAuth ? (
            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 dark:border-white/10 dark:text-neutral-200 dark:hover:bg-white/5">
              <LogOut className="h-4 w-4" /> Sair
            </button>
          ) : null}
        </div>

        {!isAuth ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.form onSubmit={handleLogin} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow dark:border-white/10 dark:bg-neutral-900">
              <h2 className="mb-4 text-lg font-semibold">Entrar</h2>
              <div className="space-y-3">
                <input required placeholder="E-mail" type="email" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <input required placeholder="Senha" type="password" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <button type="submit" className="mt-2 inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
                  <LogIn className="h-4 w-4" /> Entrar
                </button>
              </div>
            </motion.form>

            <motion.form initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow dark:border-white/10 dark:bg-neutral-900">
              <h2 className="mb-4 text-lg font-semibold">Criar conta</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input placeholder="Nome" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <input placeholder="Telefone" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <input placeholder="CPF (opcional)" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <input placeholder="E-mail" type="email" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <input placeholder="Senha" type="password" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <input placeholder="Confirmar senha" type="password" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
              </div>
              <button type="button" onClick={() => { setIsAuth(true); setTab('historico') }} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25">
                Criar conta
              </button>
            </motion.form>
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200/60 bg-white p-6 shadow dark:border-white/10 dark:bg-neutral-900">
            <div className="flex gap-3 overflow-x-auto rounded-xl bg-neutral-100 p-1 text-sm dark:bg-neutral-800">
              {[
                { id: 'historico', label: 'Histórico', icon: Package },
                { id: 'dados', label: 'Dados do perfil', icon: User },
                { id: 'config', label: 'Configurações', icon: Settings },
              ].map(({ id, label, icon: Icon }) => (
                <button key={id} onClick={() => setTab(id)} className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 ${tab === id ? 'bg-white text-neutral-900 shadow dark:bg-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-300'}`}>
                  <Icon className="h-4 w-4" /> {label}
                </button>
              ))}
            </div>

            {tab === 'historico' && (
              <div className="mt-6">
                <h3 className="mb-2 font-semibold">Compras recentes</h3>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">Você ainda não possui compras. Assim que adquirir um produto, ele aparecerá aqui.</div>
              </div>
            )}
            {tab === 'dados' && (
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input defaultValue="Nome do Cliente" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <input defaultValue="cliente@email.com" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <input defaultValue="(11) 99999-9999" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <input placeholder="CPF (opcional)" className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 dark:border-white/10" />
                <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">Salvar alterações</button>
              </div>
            )}
            {tab === 'config' && (
              <div className="mt-6 text-sm text-neutral-600 dark:text-neutral-300">Configurações de notificações e segurança estarão disponíveis em breve.</div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

export default Account
