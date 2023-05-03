const cep = document.querySelector("#cep")

const showData = (result) => {
  for (const campos in result) {
    const idCampo = document.querySelector("#" + campos)
    if (idCampo) {
      idCampo.value = result[campos]
    }
  }
}

cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "")
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  }
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data))
    })
    .catch((e) => console.log("Deu erro: " + e, message))
})
