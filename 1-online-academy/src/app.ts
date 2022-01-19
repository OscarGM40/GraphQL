import express from 'express';
import cors from 'cors';
import compression from 'compression';
import { createServer } from 'http';

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());
// Comprimo el proyecto con compression
app.use(compression());

app.use('/', (_, res) => {
  res.send('Bienvenidos/as al curso de GraphQL by Anartz por la tarde');
});

const httpServer = createServer(app);

httpServer.listen({
  port: process.env.PORT || 3003,
}, () => {
  console.clear();
  console.log('Servidor corriendo en el puerto 3003');
});