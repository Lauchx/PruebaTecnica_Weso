# PruebaTecnica_Weso
Pruebas tecnicas para pasantias de Weso Studio

# Problemas Logicos:
'Logic Problem\LogicProblems.js'

# Exchange Rate
## Descripción
**Exchange Rate** es una aplicación web que permite a los usuarios consultar las tasas de cambio históricas de diferentes monedas. La aplicación proporciona una interfaz intuitiva donde los usuarios pueden seleccionar una moneda, ver la tasa de cambio actual con respecto al dólar estadounidense y explorar datos históricos.

## Características
- **Interfaz de usuario interactiva**: Permite seleccionar diferentes monedas de un desplegable.
- **Consulta de tasas de cambio**: Muestra la tasa de cambio actual de 1 USD a la moneda seleccionada.
- **Datos históricos**: Proporciona la posibilidad de consultar tasas de cambio pasadas.
  
## Tecnologías utilizadas
- **Frontend**: 
  - React (con TypeScript)
  - CSS para estilos
- **Backend**: 
  - API REST (si se está utilizando una API externa para obtener tasas de cambio)
  
## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/exchange-rate.git
   cd exchange-rate
2. Navega al directorio del proyecto:
   ```bash
   cd exchange-rate-app
   ```

3. Instala las dependencias:
## Dependencies

Este proyecto requiere las siguientes dependencias para el frontend:

- `react`: ^18.3.1
- `react-dom`: ^18.3.1

## DevDependencies

Durante el desarrollo, se utilizan las siguientes herramientas:

- `@eslint/js`: ^9.11.1
- `@types/react`: ^18.3.10
- `@types/react-dom`: ^18.3.0
- `@vitejs/plugin-react-swc`: ^3.5.0
- `eslint`: ^9.11.1
- `eslint-plugin-react-hooks`: ^5.1.0-rc.0
- `eslint-plugin-react-refresh`: ^0.4.12
- `globals`: ^15.9.0
- `typescript`: ^5.5.3
- `typescript-eslint`: ^8.7.0
- `vite`: ^5.4.8

## Backend Dependencies

Este proyecto requiere las siguientes dependencias para el backend:

- `cors`: 2.8.5
- `express`: 4.21.1
- `fs`: ^0.0.1-security
- `mysql2`: ^3.11.3
- `node-cron`: ^3.0.3
- `zod`: 3.23.8



5. Inicia el servidor de desarrollo:
   **Frontend**
   ```bash
   cd '.\Fontend\Exchange Rate\'
   npm run dev
   ```
   **Backend**
   ```bash
   cd .\Backend\
   npm start
   ```

## Uso

1. Selecciona una moneda del menú desplegable.
2. Consulta las tasas de cambio actuales y los datos históricos, de la moneda seleccionada.
3. Consulta las tasas de cambio actuales y los datos históricos.

## Despliegue

La aplicación está desplegada en [(https://prueba-tecnica-weso.vercel.app/)]. Puedes acceder a ella en cualquier momento.

## API

Este proyecto utiliza los siguientes endpoints para la comunicación con el backend:

- **Obtener datos históricos de la moneda**  
  [(https://backend-weso-1.onrender.com/historical/:year-:month-:day)]  
  Reemplaza `:year`, `:month` y `:day` con los valores correspondientes para obtener datos históricos de la moneda.

- **Obtener todas las monedas**  
  [(https://backend-weso-1.onrender.com/currencies)]
  Este endpoint devuelve una lista de todas las monedas disponibles.

- **Obtener la tasa de cambio más reciente**  
  [(https://backend-weso-1.onrender.com/latest)]  
  Este endpoint devuelve las tasas de cambio más recientes.



