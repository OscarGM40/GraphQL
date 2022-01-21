import 'graphql-import-node';
import { makeExecutableSchema } from "apollo-server-express";
import { GraphQLSchema } from "graphql";

import typeDefinitions from "./schema.graphql";
import { resolvers } from "../resolvers";

/* TRES Construir el schema */
export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typeDefinitions],
  resolvers: resolvers,
});