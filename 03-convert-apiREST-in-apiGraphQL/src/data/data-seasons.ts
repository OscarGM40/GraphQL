import { F1 } from "./data-source";

export class SeasonsData extends F1 {

  /* fijate que SeasonsData hereda de F1 que heredó de RestDataSource */
  constructor() {
    super(); // <- IMPORTANTE
  }

  /**
   * Debo crear funciones asincronas para cada dato que quiera consultar
   * Y tengo que cachearlas cierto tiempo(60 minutos esta OK)
   * 
   */
  async getSeasons(){
    return await this.get(`seasons.json?limit=100`,{
      cacheOptions: { ttl: 60 }
    })
  }

}