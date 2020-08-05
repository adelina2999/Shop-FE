<template>
  <ol>
    <li v-for="laptop in laptops" :key="laptop.id">
      {{ laptop }}
    </li>
  </ol>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Laptops',
  data () {
    return { 
      laptops: []
    }
  },
  methods: {
    getLaptops() {
      axios.get('http://localhost:5050/laptops')
      .then(response => {
        this.laptops = response.data
      })
    }
  },
  created() {
    this.getLaptops()
  }
}
</script>
