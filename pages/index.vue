<template>
  <section class="section">
    <b-switch @click=toggle()>Dark Mode</b-switch>
    <form id="search-form" >
        <b-field label="Search">
            <b-input placeholder="Search..." v-model="description" type="search"></b-input>
            <b-input placeholder="Location..." v-model="location"></b-input>
            <div class="block">
              <span>Full-time</span>
            <b-radio v-model="radio"
                name="name"
                native-value="Yes">
                Yes
            </b-radio>
            <b-radio v-model="radio"
                name="name"
                native-value="No">
                No
            </b-radio>
            </div>
            <b-button @click=clickMe()>Submit</b-button>
        </b-field>
    </form>
     <br />
      <Card v-bind:wholeResponse="wholeResponse"/>
  </section>
</template>

<script>
import axios from "axios";
import Card from '~/components/Card.vue';

export default {

   components: {
    Card,
  },
  data() {
            return {
                description: '',
                location: '',
                radio:'',
                wholeResponse: [],
                isCardModalActive: false
            }
},
 methods: {
          clickMe: async function() {
            let location = this.location.split(' ').join('+');
           axios
              .get(
                 `https://github-jobs-proxy.appspot.com/positions?description=${this.description}&location=${location}`
              )
              .then(response => {
                this.wholeResponse = response.data;
              console.log('hellooo!', this.wholeResponse)
              })
              .catch(error => {
                console.log(error);
              });
            },

            toggle() {
                this.$colorMode.preference =
                     this.$colorMode.value == "light" ? "dark" : "light";
    }

            
 },
  watch: {

  }
}
</script>

