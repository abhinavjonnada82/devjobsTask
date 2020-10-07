    <template>
    <section>    
      <div class="columns is-mobile is-desktop">
        <div  v-for="x in wholeResponse" :key="x.id">
          <div class="column">
          <div v-if="!wholeResponse.length">No Jobs Found</div>
          <div class="card" style="height: 100%">
            <header class="card-header">
            <p class="card-header-title">{{x.company}}</p>
          </header>
          <div class="card-content">
            <div class="content">{{x.title}}</div>
            <div class="content">{{x.location}}</div>
            <div class="content">{{x.company_url}}</div>
          </div>
          <footer class="card-footer">
             
            <button class="button is-primary is-medium" @click="isCardModalActive = true">
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
      </div>  
      </div>
    </section>
</template>

<script>

export default {
  name: 'Card',
  props: ['wholeResponse'],
    data() {
            return {
                isCardModalActive: false
            }
},
 methods: {
            
 },
  watch: {

  }
}
</script>