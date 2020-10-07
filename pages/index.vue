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
    <section>
      <div v-if="!wholeResponse.length">No Jobs Found</div>
      <div v-for="x in wholeResponse" :key="x.id">
        <div class="card" style="max-width: 20rem;">
          <header class="card-header">
            <p class="card-header-title">{{x.company}}</p>
          </header>
          <div class="card-content">
            <div class="content">{{x.title}}</div>
            
            <div class="content">{{x.location}}</div>
   
            <div class="content">{{x.company_url}}</div>
          </div>
          <footer class="card-footer">
            
            <button class="button is-primary is-medium" key=""@click="isCardModalActive = true">
                View More  </button>

             <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{x.title}}</p>
                            <p class="subtitle is-6">{{x.company}}</p>
                            <p class="subtitle is-6">{{x.type}}</p>
                        </div>
                    </div>

                    <div class="content">
                      <p class="subtitle is-6">{{x.description}}</p>
                        <a>{{x.how_to_apply}}</a>
                        <br>
                        <small>{{x.created_at}}</small>
                    </div>
                </div>
            </div>
        </b-modal>
          </footer>
        </div>
        </div>
    </section>
    <br />
  </section>
</template>

<script>
import axios from "axios";
export default {
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

