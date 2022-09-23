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
      // this.$refs.email.focus();
    },
  },

  //mounting phase
  beforeCreate() {
    console.log("beforeCreate executed");
  },
  created() {
    console.log("created executed");
  },
  beforeMount() {
    console.log("beforeMount executed");
  },
  mounted() {
    console.log("mounted executed");
    this.$refs.email.focus();
  },

  //updating phase
  beforeUpdate() {
    console.log("beforeUpdate executed");
  },
  updated() {
    console.log("updated executed");
  },

  //unmounting phase
  beforeUnmount() {
    console.log("beforeUnmount executed");
  },
  unmounted() {
    console.log("unmounted executed");
  },
});

app.mount("#ref");

//for unmounting

// setTimeout(() => {
//   app.unmount();
// }, 3000);
