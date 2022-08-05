const matriculatecnico = document.getElementById("matricula-tecnico")
const nometecnico = document.getElementById("nome-tecnico")
const telefonetecnico = document.getElementById("telefone-tecnico")
const formacaotecnico = document.getElementById("formacao-tecnico")
const dataviagem = document.getElementById("data-viagem")
const origemviagem = document.getElementById("origem-viagem")
const destinoviagem = document.getElementById("destino-viagem")
const distanciakm = document.getElementById("distancia-km")
const horapartida = document.getElementById("hora-partida")
const horachegada = document.getElementById("hora-chegada")
const nummanutencao = document.getElementById("num-manutencao")
const verificacao = document.getElementById("button01")

verificacao.addEventListener("click", (e) => {
    e.preventDefault();
  
    checkInputs();
  });

function checkInputs() {

    const matriculatecnicoValue = matriculatecnico.value
    const nometecnicoValue = nometecnico.value
    const telefonetecnicoValue = telefonetecnico.value
    const formacaotecnicoValue = formacaotecnico.value
    const dataviagemValue = dataviagem.value
    const origemviagemValue = origemviagem.value
    const destinoviagemValue = destinoviagem.value
    const distanciakmValue = distanciakm.value
    const horapartidaValue = horachegada.value
    const horachegadaValue = horachegada.value
    const nummanutencaoValue = nummanutencao.value
    
  
    if (matriculatecnicoValue === "") {
      setErrorFor(matriculatecnico, "A matrícula do técnico é obrigatária!");
    } else {
      setSuccessFor(matriculatecnico);
    }
  
    if (nometecnicoValue === "") {
      setErrorFor(nometecnico, "O nome do técnico é obrigatório.");
    } else {
      setSuccessFor(nometecnico);
    }
  
    if (telefonetecnicoValue === "") {
      setErrorFor(telefonetecnico, "O telefone do técnico é obrigatório.");
    } else {
      setSuccessFor(telefonetecnico);
    }
  
    if (formacaotecnicoValue === "") {
      setErrorFor(formacaotecnico, "A formação do técnico é obrigatória.");
    } else {
      setSuccessFor(formacaotecnico);
    }
  
    if(dataviagemValue === ""){
      setErrorFor(dataviagem, "A data da viagem é obrigatório.");
    } else{
      setSuccessFor(dataviagem);
    }
  
    if(origemviagemValue === ""){
      setErrorFor(origemviagem, "A origem da chegada obrigatória.")
    } else{
        setSuccessFor(origemviagem);
      }
  
    if(destinoviagemValue === ""){
      setErrorFor(destinoviagem, "O destino da viagem é obrigatório.")
    } else {
      setSuccessFor(destinoviagem)
    }

    if(distanciakmValue === ""){
        setErrorFor(distanciakm, "A distância(Km) é obrigatório.")
      } else {
        setSuccessFor(distanciakm)
      }

    if(horachegadaValue === ""){
      setErrorFor(horachegada, "A hora da chegada é obrigatório.")
    } else {
      setSuccessFor(horachegada)
    }

    if(horapartidaValue === ""){
        setErrorFor(horapartida, "A hora é obrigatório.")
      } else {
        setSuccessFor(horapartida)
      }

    if(nummanutencaoValue === ""){
      setErrorFor(nummanutencao, "O número da manutênção é obrigatório.")
    } else {
      setSuccessFor(nummanutencao)
    }
    
    const formControls = form.querySelectorAll(".form-control");
  
    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });
  
    if (formIsValid) {
      console.log("O cadastramento está válido!");
    }
  }

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}