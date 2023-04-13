var destinos=['Esteros del Iberá','Cataratas','Puerto Madryn','Saltos del Mocona'];

const selected = document.getElementById("destiny");
for(let i=0; i < destinos.length; i++) {
    const opcionselected = document.createElement('option');
    opcionselected.value = destinos[i];
    opcionselected.text = destinos[i];
    selected.appendChild(opcionselected);
  }
     
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const fullName = document.getElementById("fullName");
const extraInfo = document.getElementById("extraInfo");
const inputPerson = document.getElementById("inputPerson");
const destiny = document.getElementById("destiny");
const message = document.getElementById("message");
var check = document.getElementById("check-box").value;

console.log(check)
const forms = document.querySelectorAll("form");
const btnForm = document.getElementsByClassName("btn-form");
for (let i = 0; i < btnForm.length; i++) {
  btnForm[i].addEventListener("click", formsBtn);
}

function formsBtn(valueBtn) {
  let breakFunction = 0;
  valueBtn.preventDefault();
  switch (valueBtn.target.id) {
    case "btn-next-f1":
      //valido form para seguir
        breakFunction = ValidFrom1();
          if (breakFunction == "0") {
             forms[0].classList.toggle("d-none");
             forms[1].classList.toggle("d-none");
          }
      break;
    case "btn-prev-f2":
            forms[0].classList.toggle("d-none");
            forms[1].classList.toggle("d-none");
      break;
    case "btn-submit":
      breakFunction = ValidFrom2();
          if (breakFunction == 0) {
              SubmitForms();
          }
      break;
      default:
      return;
  }
};

function SubmitForms() {
     if (check == "on") {
      check = "NO enviaremos notificaciones";
     } else {
      check = "Se enviarán notificaciones";
     }
  const nameM = fullName.value;
  const emailM = email.value;
  forms[0].reset();
  forms[1].reset();
  forms[0].classList.toggle("d-none");
  forms[1].classList.toggle("d-none");
   alert (`${nameM} ya registramos su pedido de cotización, ${check} al correo ${emailM}, Gracias por la consulta.`);
  //document.getElementById("bodyModal").innerHTML = `<p>${nameM} ya registramos su pedido de cotizacion, ${check} al correo ${emailM}, Gracias por la consulta.<p>`;
 }

  function ValidFrom1 () {
     let retorno = 0;
    if (fullName.value === "") {
      alert("El campo nombre no debe estar vacío")
      retorno = 1;
      return retorno;
    }
    if (email.value != "") {
     emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if ( !emailRegex.test(email.value)) {
          retorno = 1;
          alert("No es una dirección de mail válida")
          retorno = 1;
          return retorno;
        }
  }
    if (email.value === "") {
       retorno = 1;
       alert("Debe ingresar una dirección de email.")
       return retorno;
     }
      return retorno;
  }   
  
  function ValidFrom2 () {
    let retorno = 0;
    
    if ( isNaN(inputPerson.value)) {
          console.log(inputPerson.value);
          alert("El campo cantidad de personas debe ser numérico.")
          retorno = 1;
          return retorno;
        }
    if (inputPerson.value === "") {
          alert("El campo cantidad de personas no debe estar vacío")
          retorno = 1;
          return retorno;
    }
    if (destiny.value === "") {
      alert("El campo Destino no debe estar vacío")
      retorno = 1;
      return retorno;
    }
      return retorno;
  }