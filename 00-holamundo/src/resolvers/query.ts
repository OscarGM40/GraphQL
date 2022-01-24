const queries = {
  Query: {
    hello: () => 'Hello world!',
    helloWithName: (_: any, { name }: any) => `Hello ${name}!`,
  },
} 

export default queries;