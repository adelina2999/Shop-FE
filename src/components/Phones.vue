<template>
  <div>
    <div class="container">
      <div class="form-group">
        <input v-model.trim="$v.phoneName.$model" :class="{ 'is-invalid':$v.phoneName.$error, 'is-valid':!$v.phoneName.$invalid }" placeholder="Enter Phone name" class="form-control" id="phoneName">
        <div class="valid-feedback">Phone name is valid</div>
        <div class="invalid-feedback">
          <span v-if="!$v.phoneName.required">Phone name is required</span>
          <span v-if="!$v.phoneName.minLength">Phone name must have at least {{ $v.phoneName.$params.minLength.min }} leters</span>
          <span v-if="!$v.phoneName.maxLength">Phone name must have at most {{ $v.phoneName.$params.maxLength.max }} leters</span>
        </div>
      </div>
      <div class="form-group">
        <input v-model.trim="$v.phoneColor.$model" :class="{ 'is-invalid':$v.phoneColor.$error, 'is-valid':!$v.phoneColor.$invalid }" placeholder="Enter Phone color" class="form-control" id="phoneColor">
        <div class="valid-feedback">Phone name is valid</div>
        <div class="invalid-feedback">
          <span v-if="!$v.phoneColor.required">Phone Color is required</span>
          <span v-if="!$v.phoneColor.minLength">Phone Color must have at least {{ $v.phoneColor.$params.minLength.min }} leters</span>
          <span v-if="!$v.phoneColor.maxLength">Phone Color must have at most {{ $v.phoneColor.$params.maxLength.max }} leters</span>
        </div>
      </div>
      <div class="form-group">
        <input type="number" v-model.number.lazy="$v.phonePrice.$model" :class="{ 'is-invalid':$v.phonePrice.$error, 'is-valid':!$v.phonePrice.$invalid }" placeholder="Enter Phone price" class="form-control" id="phonePrice">
        <div class="valid-feedback">The price is valid</div>
        <div class="invalid-feedback">
          <span v-if="!$v.phonePrice.between">Must be between {{ $v.phonePrice.$params.between.min }} and {{ $v.phonePrice.$params.between.max }}</span>
        </div>
      </div>
      <button @click="postPhone()" class="btn btn-primary">Submit</button>
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
        <tbody v-for="phone in phones" :key="phone.id">
          <tr :style="[phones.price <= 10000 ? { 'background-color': 'green' } : { 'background-color': 'red' }]" >
            <th>{{ phone.id }}</th>
            <td>{{ phone.name }}</td>
            <td>{{ phone.color }}</td>
            <td>{{ phone.price }}</td>
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
  name: 'Phones',
  data () {
    return { 
      phones: [],
      phoneName: '',
      phoneColor: '',
      phonePrice: null
    }
  },
  validations: {
    phoneName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(15)
    },
    phoneColor: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(8)
    },
    phonePrice: {
      between: between(50, 2000)
    }
  },
  methods: {
    getPhones() {
      axios.get('http://localhost:5050/phones')
      .then(response => {
        this.phones = response.data
      })
    },
    postPhone() {
      axios.post('http://localhost:5050/phones', {
        name: this.phoneName,
        color: this.phoneColor,
        price: this.phonePrice
      })
      .then(response => {
        this.getPhones()
        this.phoneName = ''
        this.phoneColor = ''
        this.phonePrice = null
      })
    }
  },
  created() {
    this.getPhones()
  }
}
</script>
