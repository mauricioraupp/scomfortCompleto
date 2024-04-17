let buttonConnect = document.getElementById("submitNewsletter");

buttonConnect.onclick = async function() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let result = reg.test(email);

  if (result) {
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
  } else {
    alert("Email inserido é inválido");
  }

}

