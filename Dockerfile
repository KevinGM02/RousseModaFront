# Usa la versión exacta de Node.js
FROM node:22.8.0-alpine

# Instala Angular CLI 18.2.3 globalmente
RUN npm install -g @angular/cli@18.2.3

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo archivos necesarios primero
COPY package.json package-lock.json* ./

# Instala dependencias
RUN npm install

# Copia todo el código restante
COPY . .

# Expone el puerto 4200 para Angular
EXPOSE 4200

# Comando por defecto para desarrollo
CMD ["ng", "serve", "--host", "0.0.0.0"]
