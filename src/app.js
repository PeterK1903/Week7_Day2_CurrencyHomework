import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      ratesData: {},
      selectedRate: null
    },

    mounted(){
      this.getRatesData()
    },
    methods: {
      getRatesData: function(){
      const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(data => this.ratesData = data)
        
      }
    }
  })
})
