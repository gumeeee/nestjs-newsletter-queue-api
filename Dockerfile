FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Instala o Nest CLI como root primeiro
RUN npm install -g npm@11.1.0
RUN npm install -g @nestjs/cli@11.0.0 --unsafe-perm

# Copia os arquivos de definição de dependências
COPY --chown=node:node package*.json ./

# Instala dependências como usuário node
USER node
RUN npm install

# Copia o restante dos arquivos
COPY --chown=node:node . .