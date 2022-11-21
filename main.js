var app = new Vue({
  el: "#app",
  data: {
    arrayMail: [],
    variabile: "",
  },
  mounted() {
    this.generaMail()
  },
  beforeUpdate() {},
  methods: {
    generaMail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            console.log(response);
            this.variabile = response.data.response;
            this.arrayMail.push(this.variabile);
          });
          
      }
      console.log(this.arrayMail);
    },
  },
});
