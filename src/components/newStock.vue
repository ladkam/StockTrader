<template>
  <div>
    <h1>Creating {{stock.name}} stock</h1>
    <b-form @submit="onSubmit" >
      <b-form-group
        id="input-group-1"
        label="Name"
        label-for="input-1"
        description="Name that will be used"
      >
        <b-form-input
          id="input-1"
          v-model="stock.name"
          type="text"
          required
          placeholder="Enter stock name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Initial Value:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="stock.value"
          type="number"
          required
          placeholder="Enter initial value"
        ></b-form-input>
      </b-form-group>




      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        stock:{
          name:'',
          value:''
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit() {
        this.$store.state.Portfolio[this.stock.name]={value:this.stock.value,quantity:0};
      }}
  }
</script>
