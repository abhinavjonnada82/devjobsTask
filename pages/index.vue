<template>
  <section class="section">
    <form id="search-form" >
        <b-field label="Search">
            <b-input placeholder="Search..." v-model="name" type="search"></b-input>
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
                      <b-switch type="is-warning" v-model="showRepos"></b-switch>

            <b-button @click=clickMe()>Submit</b-button>
        </b-field>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
            return {
                name: '',
                location: '',
                radio:'',
                wholeResponse: [],
                showRepos: null
            }
},
 methods: {
         submit: function (event) {
              // `this` inside methods point to the Vue instance
              alert('Hello')
              console.log({ name: this.name, location: this.location, radio: this.radio });
             // const elem = this.$refs.myBtn
              this.clickMe()
            },
         
          clickMe: async function() {
            const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "GET" };
               const proxyurl = "https://cors-anywhere.herokuapp.com/";
                const url = "https://jobs.github.com/positions"; // site that doesn’t send Access-Control-*
                fetch(proxyurl + url, { headers }) // https://cors-anywhere.herokuapp.com/https://example.com
                .then(response => {
                    this.wholeResponse = response;
                    console.log('hellooo!', this.wholeResponse)
                  })
                .then(contents => console.log(contents))
                .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
            } 
 },

 watch: {
    showRepos: async function() {
      axios
        .get(
          'https://github-jobs-proxy.appspot.com/positions'
        )
        .then(response => {
          this.wholeResponse = response.data;
         console.log('hellooo!', this.wholeResponse)
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

