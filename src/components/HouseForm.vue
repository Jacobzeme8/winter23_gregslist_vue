<template>
  <form @submit.prevent="handleFormSubmit">
    <div class="mb-3">
      <label for="bedrooms" class="form-label">bedrooms</label>
      <input required type="text" v-model="editable.bedrooms" class="form-control" id="bedrooms" placeholder="bedrooms"
        name="bedrooms">
    </div>
    <div class="mb-3">
      <label for="bathrooms" class="form-label">bathrooms</label>
      <input required type="text" v-model="editable.bathrooms" class="form-control" id="bathrooms" placeholder="bathrooms..."
        name="bathrooms">
    </div>
    <div class="mb-3">
      <label for="levels" class="form-label">levels</label>
      <input required type="text" v-model="editable.levels" class="form-control" id="levels" placeholder="levels..."
        name="levels">
    </div>
    <div class="mb-3">
      <label for="imgUrl" class="form-label">imgUrl</label>
      <input required type="text" v-model="editable.imgUrl" class="form-control" id="imgUrl" placeholder="imgUrl..."
        name="imgUrl">
    </div>
    <div class="mb-3">
      <label for="year" class="form-label">year</label>
      <input required type="text" v-model="editable.year" class="form-control" id="year" placeholder="year..."
        name="year">
    </div>
    <div class="mb-3">
      <label for="price" class="form-label">price</label>
      <input required type="text" v-model="editable.price" class="form-control" id="price" placeholder="price..."
        name="price">
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">description</label>
      <input required type="text" v-model="editable.description" class="form-control" id="description" placeholder="description..."
        name="description">
    </div>
    <div>
      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
        {{ editable.id ? 'Save Changes' : 'Create House' }}
      </button>
    </div>
  </form>
</template>


<script>
import { ref } from "vue";
import { housesService } from "../services/HousesService";
import Pop from "../utils/Pop";

export default {
  setup(){
    
    const editable = ref({})

    return {
      editable,
      async handleFormSubmit(){
      try {
        const house = editable.value.id
        ? await housesService.updateHouse(editable.value)
        : await housesService.createHouse(editable.value)
      } catch (error) {
        Pop.error(error, 'formsubmit')
      }
    }

    }
  }
}
</script>


<style lang="scss" scoped>

</style>