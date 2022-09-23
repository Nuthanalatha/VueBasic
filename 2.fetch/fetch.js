const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let dataFetch = "<p>";
      data.map((value) => {
        dataFetch += `<li>${value.title}</li>`;
      });
      dataFetch += "<p>";
      const divElement = document.getElementById("users");
      divElement.innerText = dataFetch;
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchData();
