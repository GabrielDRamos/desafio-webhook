#+ Fullstack com IA — Projeto (simplificado)

> Projeto fullstack exemplo com backend em Node/TypeScript e frontend em React + Vite.

## Resumo

Este repositório contém duas pastas principais:
- `api` — servidor Fastify em TypeScript (Drizzle ORM para migrations/DB).
- `web` — aplicação frontend em React + Vite.

O projeto usa `pnpm` como gerenciador de pacotes e adota uma estrutura monorepo simples.

## Pré-requisitos

- Node.js 18+ (ou LTS compatível)
- pnpm (v6+)
- PostgreSQL para rodar as migrations (pode ser local ou via Docker)
- (Opcional) Docker & Docker Compose, se quiser subir um container Postgres

## Instalação

1. Instale dependências no workspace (na raiz):

```powershell
pnpm install
```

2. Instale dependências também nas pastas específicas se preferir (opcional):

```powershell
cd api; pnpm install
cd ../web; pnpm install
```

## Rodando em desenvolvimento

Backend (API):

```powershell
cd api
pnpm run dev
```

Frontend (web):

```powershell
cd web
pnpm run dev
```

Abra o navegador no endereço que o Vite mostrar (normalmente `http://localhost:5173`).

## Migrations (Drizzle)

As migrations são executadas pela configuração do Drizzle na pasta `api`.

1. Configure a variável de ambiente `DATABASE_URL` (ex.: `postgres://usuario:senha@localhost:5432/nome_db`).
   - Copie/edite um `.env` na pasta `api` se houver um exemplo (`.env.example`) ou exporte a variável antes de rodar.

2. Rodar as migrations:

```powershell
cd api
pnpm run db:migrate
```

Se ocorrer erro de autenticação (ex.: `senha falhou para o usuário "docker"`), verifique as credenciais do `DATABASE_URL` e se o container/serviço Postgres está em execução.

## Build / Produção

Frontend build:

```powershell
cd web
pnpm run build
```

API: ajustar conforme sua infra (ex.: `node dist/server.js` após `tsc`/build).

## Tecnologias abordadas

- Node.js + TypeScript
- Fastify (API)
- Drizzle ORM (migrations/DB)
- React + Vite (frontend)
- pnpm (monorepo/workspace)
- Biome (format/lint) — configurado em `api/biome.json`

## Observações / Problemas comuns

- Editor pode não localizar o binário do Biome porque está instalado como dependência de `api` (local). Uma solução rápida é apontar a extensão do editor para `api/node_modules/.bin/biome` (adicionado nas configurações `.vscode/settings.json`).
- Erros de migration normalmente significam credenciais incorretas ou Postgres não rodando. Verifique `DATABASE_URL` e logs do container (se usar Docker).

## Próximos passos úteis

- Adicionar um `.env.example` em `api` com a variável `DATABASE_URL` para facilitar setup.
- Opcional: adicionar `@biomejs/biome` como dependência de workspace para tornar o binário disponível na raiz.

---

Se quiser, eu posso:
- adicionar um `.env.example` em `api` com um template de `DATABASE_URL`, ou
- rodar `pnpm -w add -D @biomejs/biome@2.3.1` para mover o Biome para o nível do workspace.
