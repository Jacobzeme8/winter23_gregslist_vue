import { logger } from "../utils/Logger"
import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";



class HousesService {

  async getHouses(){

    const res = await api.get('auth/api/houses')
    AppState.houses = res.data
  }

  async createHouse(houseForm){
    const res = await api.post('auth/api/houses', houseForm)
    AppState.cars.push(res.data)
    logger.log('craeting house', res.data)

  }

  async updateHouse(houseForm){
    logger.log('edditg house')
  }

  async getHouseById(houseId){
    const res = await AppState.houses.find(h => h.id == houseId)
    AppState.house = res.data
  }

}

export const housesService = new HousesService()