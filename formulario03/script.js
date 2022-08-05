const idturma = document.getElementById("id-turma")
const nomecurso = document.getElementById("nome-curso")
const idioma = document.getElementById("idioma")
const numsala = document.getElementById("num-sala")
const horarioturma = document.getElementById("horario-turma")
const raaluno = document.getElementById("ra-aluno")
const nomealuno = document.getElementById("nome-aluno")
const datamatricula = document.getElementById("data-matricula")
const telefonealuno = document.getElementById("telefone-aluno")
const nummatricula = document.getElementById("num-matricula")
const verificacao = document.getElementById("button01")

verificacao.addEventListener("click", (e) => {
    e.preventDefault();
  
    checkInputs();
  });

function checkInputs() {

    const idturmaValue = idturma.value
    const nomecursoValue = nomecurso.value
    const idiomaValue = idioma.value
    const numsalaValue = numsala.value
    const horarioturmaValue = horarioturma.value
    const raalunoValue = raaluno.value
    const nomealunoValue = nomealuno.value
    const datamatriculaValue = datamatricula.value
    const telefonealunoValue = telefonealuno.value
    const nummatriculaValue = nummatricula.value
    
  
    if (idturmaValue === "") {
      setErrorFor(idturma, "O id da turma é obrigatária!");
    } else {
      setSuccessFor(idturma);
    }
  
    if (nomecursoValue === "") {
      setErrorFor(nomecurso, "O nome do curso é obrigatório.");
    } else {
      setSuccessFor(nomecurso);
    }
  
    if (idiomaValue === "") {
      setErrorFor(idioma, "O idioma é obrigatório.");
    } else {
      setSuccessFor(idioma);
    }
  
    if (numsalaValue === "") {
      setErrorFor(numsala, "O número da sala é obrigatória.");
    } else {
      setSuccessFor(numsala);
    }
  
    if(horarioturmaValue === ""){
      setErrorFor(horarioturma, "O horario da turma é obrigatório.");
    } else{
      setSuccessFor(horarioturma);
    }
  
    if(raalunoValue === ""){
      setErrorFor(raaluno, "O ra do aluno obrigatória.")
    } else{
        setSuccessFor(raaluno);
      }
  
    if(nomealunoValue === ""){
      setErrorFor(nomealuno, "O nome do aluno é obrigatório.")
    } else {
      setSuccessFor(nomealuno)
    }

    if(datamatriculaValue === ""){
        setErrorFor(datamatricula, "A data de matricula é obrigatório.")
      } else {
        setSuccessFor(datamatricula)
      }

    if(telefonealunoValue === ""){
      setErrorFor(telefonealuno, "O telefone do aluno é obrigatório.")
    } else {
      setSuccessFor(telefonealuno)
    }

    if(nummatriculaValue === ""){
        setErrorFor(nummatricula, "A número da matricula é obrigatório.")
      } else {
        setSuccessFor(nummatricula)
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