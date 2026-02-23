<div align="center">

# 🐓 Galo Leilão Top

**Plataforma de leilões online — rápida, responsiva e moderna.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

</div>

---

## 📋 Sobre o Projeto

O **Galo Leilão Top** é uma plataforma web de leilões desenvolvida com as tecnologias mais modernas do ecossistema React. A aplicação oferece uma experiência fluida e acessível tanto para compradores quanto para vendedores, com interface 100% responsiva e componentes acessíveis via Radix UI.

---

## 🚀 Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework UI | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Estilização | TailwindCSS 3 + shadcn/ui |
| Componentes | Radix UI |
| Roteamento | React Router DOM v6 |
| Gerenciamento de Estado | TanStack Query v5 |
| Formulários | React Hook Form + Zod |
| Gráficos | Recharts |
| Datas | date-fns |
| Notificações | Sonner |

---

## 📁 Estrutura do Projeto

```
galo-leilao-top/
├── public/                 # Assets estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis (shadcn/ui)
│   ├── pages/              # Páginas da aplicação
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilitários e configurações
│   └── main.tsx            # Entry point
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚙️ Pré-requisitos

- Node.js `>= 18.x`
- npm ou bun

---

## 🏃 Rodando Localmente

```bash
# Clone o repositório
git clone https://github.com/Brunofcrosa/galo-leilao-top.git
cd galo-leilao-top

# Instale as dependências
npm install
# ou com bun
bun install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173)

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run build:dev` | Build em modo desenvolvimento |
| `npm run preview` | Preview do build |
| `npm run lint` | Análise estática com ESLint |

---

## ✨ Funcionalidades

- 🔨 Criação e gerenciamento de leilões
- 💰 Sistema de lances em tempo real
- 📊 Dashboard com gráficos e métricas (Recharts)
- 🔔 Notificações de lances e encerramento
- 📅 Controle de tempo por leilão (date-fns)
- 📱 Interface 100% responsiva
- ♿ Acessibilidade via Radix UI
- 🌗 Suporte a tema claro/escuro (next-themes)

---

## 🤝 Contribuindo

```bash
# Crie uma branch para sua feature
git checkout -b feature/minha-feature

# Commit seguindo Conventional Commits
git commit -m "feat: descrição da feature"

# Abra um Pull Request
```

---

## 👤 Autor

**Bruno Fetzer** — Desenvolvedor Full Stack

[![GitHub](https://img.shields.io/badge/GitHub-Brunofcrosa-181717?logo=github)](https://github.com/Brunofcrosa)
