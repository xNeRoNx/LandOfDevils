
# Użyj obrazu node:21 jako podstawy
FROM node:21

# Utwórz użytkownika node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Ustaw katalog roboczy na /app
WORKDIR /home/node/app

# Skopiuj pliki package.json i package-lock.json do katalogu /app
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę plików projektu do katalogu /app
COPY . .

# Zmień właściciela katalogu /app na użytkownika node
COPY --chown=node:node . .

# Zmień użytkownika na node
USER node

# Zmień port na 3000
EXPOSE 3000

# Uruchom serwer deweloperski
CMD ["npm", "run", "dev"]