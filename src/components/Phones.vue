<template>
  <div>
    <div class="container">
      <div class="form-group">
        <input v-model="phoneName" placeholder="Enter Phone name" class="form-control" id="phoneName">
      </div>
      <div class="form-group">
        <input v-model="phoneColor" placeholder="Enter Phone color" class="form-control" id="phoneColor">
      </div>
      <div class="form-group">
        <input v-model="phonePrice" placeholder="Enter Phone price" class="form-control" id="phonePrice">
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
