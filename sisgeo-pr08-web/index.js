let div_countries = document.getElementById("divCountries");
let fun2 = () => console.log("Hi")


fetch('data.json')
.then((r) => {
  r.json().then((d) => {
    d.forEach(e => {
      console.log(e);

      let row = document.createElement("div");
      row.className = "row border";

      let name = document.createElement("p");
      name.textContent = "COUNTRY: " + e.country + ", CASES: " + e.cases;
      
      div_countries.appendChild(row);
      div_countries.appendChild(name);
    });
  });


}).catch((e) => {
  console.log(e);
});

fun2();