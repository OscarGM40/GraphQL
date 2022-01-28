import { mutationResolvers } from "./mutation";
import { queryResolvers } from "./query";
import typesResolver from "./types";



export const resolvers = {
  ...queryResolvers,
  ...mutationResolvers,
  ...typesResolver,
}