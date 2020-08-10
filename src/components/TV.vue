<template>
  <div>
    <div class="container">
      <div class="form-group">
        <input v-model="tvName" placeholder="Enter tv name" class="form-control" id="tvName">
      </div>
      <div class="form-group">
        <input v-model="tvColor" placeholder="Enter tv color" class="form-control" id="tvColor">
      </div>
      <div class="form-group">
        <input v-model="tvPrice" placeholder="Enter tv price" class="form-control" id="tvPrice">
      </div>
      <button @click="postTV()" class="btn btn-primary">Submit</button>
    </div>
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TVs',
  data () {
    return { 
      tvs: [],
      tvName: '',
      tvColor: '',
      tvPrice: null
    }
  },
  methods: {
    getTVs() {
      axios.get('http://localhost:5050/tv')
      .then(response => {
        this.tvs = response.data
      })
    },
    postTV() {
      axios.post('http://localhost:5050/tv', {
        name: this.tvName,
        color: this.tvColor,
        price: this.tvPrice
      })
      .then(response => {
        this.getTVs()
        this.tvName = ''
        this.tvColor = ''
        this.tvPrice = null
      })
    }
  },
  created() {
    this.getTVs()
  }
}
</script>
