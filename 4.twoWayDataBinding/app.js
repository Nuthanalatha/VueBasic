let app = Vue.createApp({
  data() {
    return {
      email: "",
    };
  },
  methods: {
    //setName(event){
    //this.email=event.target.value
    //},
    save() {
      this.email = event.target.value;
    },
    reset() {
      this.email = "";
    },
  },
});

app.mount("#dataBinding");
