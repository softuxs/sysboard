const users = [
  {name: "Gabriela"},
  {name: "Daniel"},
  {name: "Hudson"},
  {name: "John Doe"}
];

function create(users) {
  document.querySelector("#results").innerHTML = "";
  for (const user of users) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = user.name;
    div.classList.add("user");
    div.appendChild(p);
    document.querySelector("#results").appendChild(div);
  }
}

create(users);

document.querySelector("#search").addEventListener("input", function (event) {
  var ctx = this;
  var filter = users.filter(item => {
    var regex = new RegExp(ctx.value, 'ig');;
    return regex.test(item.name);
  })

  create(filter);
});