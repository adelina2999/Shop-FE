<template>
  <div>
    <div class="container">
      <div class="form-group">
        <input v-model="laptopName" placeholder="Enter Laptop name" class="form-control" id="laptopName">
      </div>
      <div class="form-group">
        <input v-model="laptopPrice" placeholder="Enter Laptop price" class="form-control" id="laptopPrice">
      </div>
      <div class="form-check">
        <input v-model="laptopAvailability" type="checkbox" class="form-check-input" id="laptopAvailability">
        <label class="form-check-label" for="laptopAvailability">Check laptop availability</label>
      </div>
      <button @click="postLaptop()" class="btn btn-primary">Submit</button>
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Availability</th>
          </tr>
        </thead>
        <tbody v-for="laptop in laptops" :key="laptop.id">
          <tr :style="[laptop.in_stock ? { 'background-color': 'green' } : { 'background-color': 'red' }]" >
            <th>{{ laptop.id_laptop }}</th>
            <td>{{ laptop.name }}</td>
            <td>{{ laptop.price }}</td>
            <td>{{ laptop.in_stock }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Laptops',
  data () {
    return { 
      laptops: [],
      laptopName: '',
      laptopPrice: null,
      laptopAvailability: false
    }
  },
  methods: {
    getLaptops() {
      axios.get('http://localhost:5050/laptops')
      .then(response => {
        this.laptops = response.data
      })
    },
    postLaptop() {
      axios.post('http://localhost:5050/laptops', { 
        name: this.laptopName,
        price: this.laptopPrice,
        in_stock: this.laptopAvailability
      })
      .then(response => {
        this.getLaptops()
        this.laptopName = ''
        this.laptopPrice = null
        this.laptopAvailability = false
      })
    }
  },
  created() {
    this.getLaptops()
  }
}
</script>
