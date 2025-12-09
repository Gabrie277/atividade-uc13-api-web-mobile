# Web (Next.js)

Parte web do projeto utilizando Next.js, React e Tailwind CSS.

## Setup

### Instalar dependências

```powershell
cd web
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env.local` na raiz da pasta `web/` se necessário:

```
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```powershell
npm run dev
```

Acesse em `http://localhost:3000`

## Build e Produção

Criar build:

```powershell
npm run build
```

Executar build em produção:

```powershell
npm start
```

## Tecnologias

- **Next.js** — Framework React
- **React** — UI library
- **Tailwind CSS** — Estilização
- **Axios** — HTTP client
- **Zustand** — State management
- **React Hook Form** — Gerenciamento de formulários
- **Zod** — Schema validation
- **Lucide React** — Ícones

## Paleta de Cores (Clínica)

Disponível em `tailwind.config.cjs`:

```js
clinic: {
  primary: '#0f766e',        // Cor primária
  'primary-600': '#0ea5a4',
  accent: '#06b6d4',         // Cor de destaque
  success: '#10b981',        // Sucesso
  danger: '#ef4444',         // Erro/Perigo
  bg: '#f8fafc',             // Fundo
  surface: '#ffffff',        // Superfícies
  muted: '#6b7280',          // Texto secundário
  text: '#0f172a'            // Texto principal
}
```

Use com classes Tailwind:
- `bg-clinic-primary`
- `text-clinic-text`
- `border-clinic-accent`
- etc.

## Estrutura

```
web/
├── pages/               # Rotas da aplicação
│   ├── _app.jsx        # App wrapper
│   └── index.jsx       # Página inicial
├── components/         # Componentes reutilizáveis
├── styles/            # Estilos CSS
├── tailwind.config.cjs # Configuração Tailwind
└── package.json       # Dependências
```

## Notas

- A API e autenticação serão implementadas por outra equipe.
- O `middleware.ts` está desativado (no-op) para evitar conflitos; será habilitado quando a autenticação estiver pronta.
