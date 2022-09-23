let app = Vue.createApp({
  //All data present here
  data() {
    return {
      greeting: "Hello World",
      learn: "<h1>Learn Vue<h1>",
      code: "Code Vue",
      person: {
        name: "Ajay",
        age: 18,
      },
    };
  },

  //functions or methods
  //inside methods option,create all the methods
  methods: {
    randomOutput() {
      let randomNum = Math.random();
      console.log("randomNum", randomNum);
      if (randomNum < 0.5) {
        //return "Learn Vue";
        return this.learn;
      } else {
        //return "Code Vue";
        return this.code;
      }
    },
  },
});

app.mount("#first");
