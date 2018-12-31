# React Boilerplate

El siguiente proyecto es un boilerplate. Tiene como proposito servir como base para la iniciación de nuevos proyectos.

El boilerplate contiene las siguientes tecnologías:

- React Hooks (16.7.0-alpha.2)
- Plugins de Webpack necesarios para procesar CSS, JSX e imágenes.
- Plugins "classnames" y "proptypes" para React
- Plugins "dotenv" y "dotenv-webpack" para manejo de variables de entorno.

### Jerarquía del proyecto

```
├── src
│   └── index.js            
├── package.json
├── webpack.config.js
├── webpack.dev.config.js
└── README.md
```

- En el folder "src" se encuentra el archivo index.js, que contiene la lógica que inicia el render de React.

### Instalación y Uso

Para descargar el boilerplate, basta con clonar el proyecto e instalar las dependencias del package.json:
```
git clone https://github.com/EduardoHidalgo/Boilerplate-React-CSR.git

npm run install
```

Para hacer uso del boilerplate, basta con ejecutar los comandos incluidos en el package.json:
```
// proyecto entorno desarrollo local:- http://localhost:9000
npm run build:dev
```