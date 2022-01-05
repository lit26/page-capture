// let pageContent = document.getElementsByTagName("body")[0];

// const requestOptions = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ page: "test" }),
// };
fetch("http://127.0.0.1:5005/api/page", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    page: document.getElementsByTagName("body")[0].innerHTML,
  }),
}).catch((err) => console.log(error));
