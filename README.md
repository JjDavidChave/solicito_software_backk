# Proyecto React y Node.js: Rick and Morty API

Este repositorio contiene dos proyectos interrelacionados: un frontend desarrollado en React con Tailwind CSS y un backend construido con Node.js y Express, que utiliza MongoDB como base de datos. El objetivo del proyecto es consumir la API de *Rick and Morty* y proporcionar una interfaz de usuario interactiva para explorar episodios, personajes y más.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Flujo del Proyecto](#flujo-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación

### Frontend (React)

1. Navega al directorio del frontend:
   ```bash
   cd frontend
   ```

2. Instala las dependencias utilizando npm o yarn:
   ```bash
   # Usando npm
   npm install

   # O usando yarn
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   # Usando npm
   npm start

   # O usando yarn
   yarn start
   ```

### Backend (Node.js)

1. Navega al directorio del backend:
   ```bash
   cd backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor:
   ```bash
   node server.js
   ```

## Descripción del Proyecto

### Frontend

El frontend está construido en React, utilizando Tailwind CSS para el diseño y Axios para realizar solicitudes HTTP a la API. Permite a los usuarios explorar episodios de la serie *Rick and Morty*, visualizar personajes y acceder a información detallada sobre cada episodio. La interfaz es responsiva y está diseñada para ser intuitiva y fácil de usar.

### Backend

El backend está implementado con Node.js y Express. Utiliza MongoDB para almacenar los datos de los usuarios y sus episodios favoritos. El backend proporciona una API RESTful que el frontend consume para obtener información sobre episodios y personajes. Además, permite gestionar la lista de favoritos de los usuarios de manera eficiente.

## Flujo del Proyecto

El proyecto consiste en los siguientes pasos:

1. **Consumo de API**: El frontend hace solicitudes a la API de *Rick and Morty* para obtener datos sobre episodios y personajes.
2. **Mostrar Información**: Los datos obtenidos se muestran en una interfaz de usuario interactiva, donde los usuarios pueden ver detalles de cada episodio y personaje.
3. **Agregar Favoritos**: Los usuarios pueden agregar episodios a sus favoritos haciendo clic en un ícono. Esta acción guarda el episodio en el `localStorage` del navegador y también se sincroniza con la base de datos del backend.
4. **Almacenamiento**: El backend maneja las solicitudes para guardar y recuperar la lista de episodios favoritos del usuario, asegurando que los datos se mantengan persistentes.

## Tecnologías Utilizadas

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB


