<template>
  <div class="component">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <img :src="house.imgUrl" alt="">
          <button @click="deleteHouse" class="btn btn-danger">delete house</button>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { useRoute } from "vue-router";
import { housesService } from "../services/HousesService";
import { logger } from "../utils/Logger";
import { computed, onMounted } from 'vue';
import { AppState } from "../AppState";

export default {
  setup(){
    const route = useRoute()
    const houseId = route.params.houseId

    async function getHouseById(){
      try {
        await housesService.getHouseById(houseId)
      } catch (error) {
        logger.error(error, "getting house by id")
      }
    }

    onMounted(() =>
      getHouseById()
      )

    return {
      houseId,
      account: computed(() => AppState.account),
      house: computed(() => AppState.house),
      async deleteHouse(){
        try {
          
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>