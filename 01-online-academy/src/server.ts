import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { GraphQLSchema } from 'graphql';
import { ApolloServer, } from 'apollo-server-express';
 import expressPlayGround from 'graphql-playground-middleware-express';
  import { createServer, Server as HTTPServer } from 'http';


class Server {
  private app!: express.Application;
  private server!: ApolloServer;
  private httpServer!: HTTPServer;
  private schema!: GraphQLSchema;
  private readonly DEFAULT_PORT_SERVER: number= +process.env.PORT! || 3003;

  constructor(schema: GraphQLSchema) {
    if(schema === undefined) {
      throw new Error('El schema no puede ser undefined');
    }
    this.schema = schema;
    this.initialize();
  }

  /* inicializar todas las configuraciones */
  private initialize(): void {
    this.configExpress();
    this.configApolloServer();
    this.configRoutes();
    this.createServer();
  }

  private configExpress() {
    this.app = express();
    this.app.use(cors())
    this.app.use(compression())

  }

  private configApolloServer() {
 

    /* CUATRO CONFIGURAR EL SERVIDOR APOLLO SERVER */
    this.server = new ApolloServer({
      schema: this.schema,
      introspection: true, //necesario para producción
      playground: true //necesario para acceder al playground
    })
    /* QUINTO aplicar el middleware a este nuevo servidor*/
    this.server.applyMiddleware({ app: this.app })
  }


  private configRoutes() {
    this.app.use('/hello', (_, res) => {
      res.send('Bienvenidos/as al curso de GraphQL by Anartz por la tarde');
    });

    this.app.use('/', expressPlayGround({
      endpoint: '/graphql'
    }));
  }

  private createServer() {
    this.httpServer = createServer(this.app);
  }

  listen(): void {
    this.httpServer.listen(this.DEFAULT_PORT_SERVER, () => {
      console.clear();
      console.log('Apollo Server on http://localhost:3003/graphql')
    })
  }

}

export default Server;