<template>
  <div>
    <div class="container">
      <div class="form-group">
        <input v-model.trim="$v.laptopName.$model" :class="{ 'is-invalid':$v.laptopName.$error, 'is-valid':!$v.laptopName.$invalid }" placeholder="Enter Laptop name" class="form-control" id="laptopName">
        <div class="valid-feedback">Laptop name is valid</div>
        <div class="invalid-feedback">
          <span v-if="!$v.laptopName.required">Laptop name is required</span>
          <span v-if="!$v.laptopName.minLength">Laptop name must have at least {{ $v.laptopName.$params.minLength.min }} leters</span>
          <span v-if="!$v.laptopName.maxLength">Laptop name must have at most {{ $v.laptopName.$params.maxLength.max }} leters</span>
        </div>
      </div>
      <div class="form-group">
        <input type="number" v-model.number.lazy="$v.laptopPrice.$model" :class="{ 'is-invalid':$v.laptopPrice.$error, 'is-valid':!$v.laptopPrice.$invalid }"  placeholder="Enter Laptop price" class="form-control" id="laptopPrice">
        <div class="valid-feedback">The price is valid</div>
        <div class="invalid-feedback">
          <span v-if="!$v.laptopPrice.between">Must be between {{ $v.laptopPrice.$params.between.min }} and {{ $v.laptopPrice.$params.between.max }}</span>
        </div>
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
import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'

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
  validations: {
    laptopName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(15)
    },
    laptopPrice: {
      between: between(200, 2000)
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
