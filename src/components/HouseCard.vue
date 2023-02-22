<template>
  <div class="card">
          <router-link  :to="{ name: 'House', params: { houseId: h.id } }">
            <img class="img-fluid w-100 h-100" :src="h.imgUrl" alt="">
          </router-link>
            <div class="card-body">
              <h3>Bedrooms: {{ h.bedrooms }}</h3>
              <h3>Bathrooms: {{ h.bathrooms }}</h3>
              <h4>Price: {{ h.price }}$</h4>
            </div>
          </div>
</template>


<script>
export default {
  props: {
    h: {type: Object, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>