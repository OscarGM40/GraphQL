import express from 'express';
import cors from 'cors';
import compression from 'compression';

import schema from './schema/index';

/* Forma con GraphiQL y express-graphql */
// import { graphqlHTTP } from 'express-graphql';

/* Forma con ApolloServer */
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

const app = express();
app.use(cors());
app.use(compression());

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app });
const httpServer = createServer(app);

/* Forma con express-graphql */
/* app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true,
}) ); */

httpServer.listen(3000, () => {
  console.clear();
  console.log('Servidor corriendo en http://localhost:3000/graphql');
});