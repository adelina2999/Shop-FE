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
</template>

<script>
import axios from 'axios'

export default {
  name: 'Phones',
  data () {
    return { 
      phones: []
    }
  },
  methods: {
    getPhones() {
      axios.get('http://localhost:5050/phones')
      .then(response => {
        this.phones = response.data
      })
    }
  },
  created() {
    this.getPhones()
  }
}
</script>
