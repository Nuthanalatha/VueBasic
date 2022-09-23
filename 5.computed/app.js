let app = Vue.createApp({
  data() {
    return {
      counter: 10,
      firstName: "",
    };
  },
  watch: {
    counter(value) {
      console.log("value", value);
      // or let that = this;
      if (value > 50) {
        setTimeout(() => {
          //or function()
          this.counter = 0; //or that
        }, 2000);
      }
    },
  },

  //optimise the performance
  computed: {
    fullname() {
      console.log("fullname computed executed");
      if (this.firstName === "") {
        return "";
      }
      return this.firstName + " " + "Rastogi";
    },
    doubleCounter() {
      console.log("doubleCounter executed");
      return this.counter * 2;
    },
  },
  methods: {
    increment() {
      this.counter += 5;
    },
    decrement() {
      this.counter -= 5;
    },
    //outputFullname(){
    // console.log("outputFullname executed");
    // if (this.firstName === "") {
    //   return "";
    // }
    // return this.firstName + " " + "Rastogi";
  },
});

app.mount("#dataBinding");
