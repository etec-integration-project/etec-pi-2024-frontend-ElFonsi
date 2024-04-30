# Usar una imagen base que contenga Node.js
FROM node:latest

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del frontend al directorio de trabajo
COPY . .


EXPOSE 8081

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "start"]
