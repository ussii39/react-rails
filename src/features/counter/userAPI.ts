// A mock function to mimic making an async request for data
export function fetchCount() {
  const result = fetch("http://localhost:3000", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      return res;
    });
  return result;
}
