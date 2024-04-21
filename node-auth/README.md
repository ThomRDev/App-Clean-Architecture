#

## Con NPM

- Instalar TypeScript y demás dependencias

  ```sh
  npm i -D typescript @types/node ts-node-dev rimraf
  ```

- Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)

  ```sh
  npx tsc --init --outDir dist/ --rootDir src
  ```

- Crear scripts para dev, build y start ([Más sobre TS-Node-dev aquí](https://www.npmjs.com/package/ts-node-dev))

  ```sh
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js"
  ```

## Con PNPM

````sh
  pnpm add -D typescript @types/node ts-node-dev rimraf
  pnpm exec tsc --init --outDir dist/ --rootDir src
````

[text](https://stackoverflow.com/questions/73427676/what-is-difference-between-pnpm-create-pnpx-dlx)
