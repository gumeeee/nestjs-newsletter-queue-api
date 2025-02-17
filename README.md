# Newsletter Queue API

API para gestão de newsletters construída com NestJS

## 🛠 Tecnologias

- **Backend**
  - NestJS v11
  - Node.js v20
  - TypeScript
  - Docker
  - Sqlite3 (ou outro banco de sua escolha)
  - Redis
  - cache-manager
  - bull

- **Ferramentas**
  - Docker Compose
  - npm
  - ESLint/Prettier

## ⚙️ Pré-requisitos

- Node.js 18+
- Docker 24+
- Docker Compose 2.20+
- Git

## 🐳 Execução da API com Docker

### Passo 1: Construa os containers
```bash
# Construa as imagens e inicie os containers
docker-compose up --build

# Modo detached (executa em segundo plano)
docker-compose up --build -d

# Parar e remover tudo
docker-compose down -v --remove-orphans

# Parar containers mantendo volumes
docker-compose stop

# Acessar terminal dentro do container
docker-compose exec app sh
