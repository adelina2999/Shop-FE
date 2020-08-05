<template>
  <p>Laptops</p>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Laptops',
  data () {
    return { 
      value: 0
    }
  },
  methods: {
    getLaptops() {
      axios.get('localhost:5050/laptops')
      .then(response => {
        this.laptops = response.data
      })
    }
  }
}
</script>
