## Dependencias para un proyecto GraphQL con Apollo Server
___
#### Dependencias de producción:
npm install express graphql ncp apollo-server-express@^3 graphql-import-node compression cors
typescript graphql-tools graphql-playground-middleware-express graphql-depth-limit
___
#### Dependencias de desarrollo:
npm install @types/compression @types/express @types/cors @types/express-graphql
@types/node @types/graphql @types/graphql-depth-limit nodemon ts-node -D
___

#### Script para configurar el tsconfig.json rápidamente
```
npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6
```
#### Scripts finales para el package.json
```
  "scripts": {
    "start": "node build/server.js",
    "build": "npx tsc -p . && ncp src/schema build/schema",
    "dev": "nodemon src/server.ts --exec ts-node src/server.ts -e ts,graphql,json"
  },
```

