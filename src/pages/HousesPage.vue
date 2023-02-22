<template>
  <div class="housesPage">
    <button class="fs-5 btn btn-dark my-3 ms-3" data-bs-toggle="modal" data-bs-target="#test-modal">
      Houses
    </button>
    <div class="container-fluid">
      <div class="row">
        <div v-for="h in houses" class="col-3">
          <HouseCard :h = "h"/>
        </div>
      </div>
    </div>
  </div>



  <Modal id="test-modal" modal-title="Add a House">
      <HouseForm/>
  </Modal>

</template>


<script>
import { onMounted, computed } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import {housesService} from "../services/HousesService"
import { AppState } from "../AppState.js";

export default {
  
  setup(){

    async function getHouses(){
      try {
        await housesService.getHouses()
      } catch (error) {
        Pop.error(error, 'getting houses')
      }
    }

    onMounted(() =>
      getHouses()
      )

    return {
      houses: computed(() => AppState.houses)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
