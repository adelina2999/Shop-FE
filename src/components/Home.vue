<template>
  <div>
    <div v-for="laptop in laptops" 
      :key="laptop.id">
      <span> {{ laptop.name }} </span>
      <span> {{ laptop.price }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      laptops: []
    }
  },
  methods: {
    getLaptops () {
      axios.get('http://localhost:5050/laptops')
        .then(response => {
          this.laptops = response.data
        })
    }
  },
  created () {
    this.getLaptops()
  }
}
</script>
