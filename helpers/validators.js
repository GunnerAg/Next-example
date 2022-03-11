function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
};

const validAge=(birthdate)=>{
  const age = getAge(birthdate);
  console.log(age);
  if (age<18){
    return false;
  } else return true;
};

const validID = (legalId) => {
  const DNI = /^((([X-Z])|([LM])){1}([-]?)((\d){7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]))$/;
  console.log('test ID', legalId, DNI.test(legalId));
  return DNI.test(legalId);
};

const validMail = (mail) => {
  const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.test(mail);
};

const validPhone = (phone) => {
  const phoneReg = /(\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}/g;
  return phoneReg.test(phone);
};

export const validators = {

  email:(value)=>{
    let message = "";
    if (!value) {
      message = "El campo email es requerido";
    } else if (!validMail(value)) {
      message = "El email introducido no es válido, debe tener el siguiente formato: email@email.com/.es";
    }
    return message;
  },

  phone:(value)=>{
    let message = "";
    if (!value) {
      message = "El campo telefono es requerido";
    } else if (!validPhone(value)) {
      message = "El número de móvil no tiene el formato correcto.";
    }
    return message;
  },

  legalId :(value)=>{
    let message = "";
    if (!value) {
      message = "El campo DNI/NIE es requerido";
    } else if (!validID(value)) {
      message = "El ID no tiene el formato correcto.";
    }
    return message;
  },

  birthdate:(value)=>{
    let message = "";
    if (!value) {
      message = "El campo edad es requerido";
    } else if (!validAge(value)) {
      message = "La edad introducida no es válida, debe ser mayor de edad.";
    }
    return message;
  },

};