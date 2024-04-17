let buttonConnect = document.getElementById("submitNewsletter");

buttonConnect.onclick = async function(e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let data = {name,email};

  const response = await fetch('http://localhost:3003/api/store/task', {
    method: "POST",
    headers: {"Content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(data)

  });

  let content = await response.json();

  if(content.success){
    alert("Sucesso");
  } else {
    alert("Não");
  }
}