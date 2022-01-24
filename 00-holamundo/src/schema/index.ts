import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import 'graphql-import-node';
import typesDefinition from './schema.graphql';
import { resolvers } from '../resolvers/resolversMap';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typesDefinition],
  resolvers,
});

export default schema;
