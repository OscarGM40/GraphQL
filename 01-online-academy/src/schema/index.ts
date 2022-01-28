import 'graphql-import-node';
import { GraphQLSchema } from "graphql";

import typeDefinitions from "./schema.graphql";
import { resolvers } from "../resolvers";

/* en la v2 viene de apollo-server-express,desde la 3 usa graphql-tools,pero ojo graphql-tools debe estar en v8+ */
// import { makeExecutableSchema } from "apollo-server-express";
import { makeExecutableSchema } from 'graphql-tools';

/* TRES Construir el schema */
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typeDefinitions],
  resolvers: resolvers,
});