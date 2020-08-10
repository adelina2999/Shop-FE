<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Color</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody v-for="tv in tvs" :key="tv.id">
        <tr :style="[tv.price <= 8000 ? { 'background-color': 'green' } : { 'background-color': 'red' }]" >
          <th>{{ tv.id }}</th>
          <td>{{ tv.name }}</td>
          <td>{{ tv.color }}</td>
          <td>{{ tv.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TVs',
  data () {
    return { 
      tvs: []
    }
  },
  methods: {
    getTVs() {
      axios.get('http://localhost:5050/tv')
      .then(response => {
        this.tvs = response.data
      })
    }
  },
  created() {
    this.getTVs()
  }
}
</script>
