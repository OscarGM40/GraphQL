import { RESTDataSource } from "apollo-datasource-rest";

export class F1 extends RESTDataSource {
  /* debo heredar de la clase RESTDataSource sus propiedades y métodos con super() <- IMPORTANTE */
  constructor() {
    super(); // <- IMPORTANTE
    this.baseURL = "https://ergast.com/api/f1/";
  }

  
}