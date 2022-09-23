let app = Vue.createApp({
  data() {
    return {
      message: "hey how r u ?",
    };
  },
  methods: {
    setText() {
      //getting the value of the input
      //field by using ref
      console.log(this.$refs.userText.value);
      this.message = this.$refs.userText.value;
    },
    userFocus() {
      this.$refs.email.focus();
    },
  },
});

app.mount("#ref");
