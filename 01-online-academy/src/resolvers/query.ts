/* DOS Dar solución a las definiciones anteriores */
export const queryResolvers = {
  Query: {
    hello: (): string => 'Hello World!',
    helloWithName: (
      _: object,
      args: { name: string },
      __: object,
      info: object): string => {
      return `Hello ${args.name}`
    },
    peopleNumber: () => 1
  }
};