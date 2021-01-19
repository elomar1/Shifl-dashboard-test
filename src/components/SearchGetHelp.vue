<template>
  <div class="pos">
      <div class="searchHelp">
        
        <img src="@/assets/images/search-icon.svg" alt="">  
 <v-autocomplete
      background-color = "white"
      color="#B4CFE0"
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search, track, get help..."
      solo-inverted
     
    ></v-autocomplete>
    <!-- <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn> -->

      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        items: [],
        search: null,
        select: null,
        states: [
          'Alabama',
          'Alaska',
          'Marshall Islands',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Northern Mariana Islands',
        ],
      }
    },
    watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
    },
    methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
 
    },
  }
</script>
<style>
.searchHelp {
    display: flex;
    margin-left: 32px;
    width: 100%;
}
.v-select--is-menu-active {
     background: #ff0000 !important;   
}
/* .v-input .v-label {
    color: red !important;
} */
.searchHelp input,
.searchHelp label {
    color: #B4CFE0 !important;
    font-weight: 500;
    font-size: 14px; 
     min-width: 250px;
}
.searchHelp .v-icon{
    display: none !important;
}
.searchHelp input {
       
}
</style>
