let app = Vue.createApp({
  data() {
    return {
      counter: 40,
    };
  },
  methods: {
    increment(num) {
      console.log("increment executed");
      //   this.counter += 5;
      this.counter += num;
    },
    decrement(num) {
      //   this.counter -= 5;
      this.counter -= num;
    },
    handleSubmit() {
      alert("form submitted successfully");
    },
  },
});
app.mount("#events");
