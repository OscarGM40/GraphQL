import { schema } from "./schema";
import Server from "./server";

const server = new Server(schema);
server.listen();