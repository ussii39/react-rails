// A mock function to mimic making an async request for data
export function listCompanyInfoAsync() {
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

export function companyDetailInfoAsync(id) {
  const result = fetch(`http://localhost:3000/company/${id}`, {
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
