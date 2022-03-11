import { formDataContext } from "../context/context/formContext";

const years = [];

const daysArr = (x) => {
  return Array(x)
    .fill()
    .map((x, i) => i + 1);
};

const months = [
  { id: 0, name: "Enero", days: daysArr(31), daysB: daysArr(31) },
  { id: 1, name: "Febrero", days: daysArr(28), daysB: daysArr(29) },
  { id: 2, name: "Marzo", days: daysArr(31), daysB: daysArr(31) },
  { id: 3, name: "Abril", days: daysArr(30), daysB: daysArr(30) },
  { id: 4, name: "Mayo", days: daysArr(31), daysB: daysArr(31) },
  { id: 5, name: "Junio", days: daysArr(30), daysB: daysArr(30) },
  { id: 6, name: "Julio", days: daysArr(31), daysB: daysArr(31) },
  { id: 7, name: "Agosto", days: daysArr(31), daysB: daysArr(31) },
  { id: 8, name: "Septiembre", days: daysArr(30), daysB: daysArr(30) },
  { id: 9, name: "Octubre", days: daysArr(31), daysB: daysArr(31) },
  { id: 10, name: "Noviembre", days: daysArr(30), daysB: daysArr(30) },
  { id: 11, name: "Diciembre", days: daysArr(31), daysB: daysArr(31) },
];

const getId = (x) => {
  for (let i = 0; i <= months.length; i++) {
    if (months[i].name === x) {
      return i;
    }
  }
};

const getName = (x) => {
  months.forEach((m)=>{
    if(m.id  ===  Number(x)-1){
      return (m.name);
    }
  });
};

for (let i = 0; i <= 120; i++) {
  // years.push({value:Number(1900+i), bisiesto:Number(1900+i)%4 === 0});
  years.push({
    value: Number(1900 + i),
    months: [],
  });

  for (let x = 0; x < months.length; x++) {
    // years.push({value:Number(1900+i), bisiesto:Number(1900+i)%4 === 0});
    years[i].months.push({
      value: months[x]?.name,
      days: Number(1900 + i) % 4 === 0 ? months[x]?.daysB : months[x]?.days,
    });
  }
}

const countries = [
  { value: "Afgana", label: "Afgana" },
  { value: "Alemana", label: "Alemana" },
  { value: "Árabe", label: "Árabe" },
  { value: "Argentina", label: "Argentina" },
  { value: "Australiana", label: "Australiana" },
  { value: "Belga", label: "Belga" },
  { value: "Boliviana", label: "Boliviana" },
  { value: "Brasileña", label: "Brasileña" },
  { value: "Camboyana", label: "Camboyana" },
  { value: "Canadiense", label: "Canadiense" },
  { value: "Chilena", label: "Chilena" },
  { value: "China", label: "China" },
  { value: "Colombiana", label: "Colombiana" },
  { value: "Coreana", label: "Coreana" },
  { value: "Costarricense", label: "Costarricense" },
  { value: "Cubana", label: "Cubana" },
  { value: "Danesa", label: "Danesa" },
  { value: "Ecuatoriana", label: "Ecuatoriana" },
  { value: "Egipcia", label: "Egipcia" },
  { value: "Salvadoreña", label: "Salvadoreña" },
  { value: "Escocesa", label: "Escocesa" },
  { value: "Española", label: "Española" },
  { value: "Estadounidense", label: "Estadounidense" },
  { value: "Estonia", label: "Estonia" },
  { value: "Etiope", label: "Etiope" },
  { value: "Filipina", label: "Filipina" },
  { value: "Finlandesa", label: "Finlandesa" },
  { value: "Francesa", label: "Francesa" },
  { value: "Galesa", label: "Galesa" },
  { value: "Griega", label: "Griega" },
  { value: "Guatemalteca", label: "Guatemalteca" },
  { value: "Haitiana", label: "Haitiana" },
  { value: "Holandesa", label: "Holandesa" },
  { value: "Hondureña", label: "Hondureña" },
  { value: "Indonesa", label: "Indonesa" },
  { value: "Inglesa", label: "Inglesa" },
  { value: "Iraquí", label: "Iraquí" },
  { value: "Iraní", label: "Iraní" },
  { value: "Irlandesa", label: "Irlandesa" },
  { value: "Israelí", label: "Israelí" },
  { value: "Italiana", label: "Italiana" },
  { value: "Japonesa", label: "Japonesa" },
  { value: "Jordana", label: "Jordana" },
  { value: "Laosiana", label: "Laosiana" },
  { value: "Letona", label: "Letona" },
  { value: "Letonesa", label: "Letonesa" },
  { value: "Malaya", label: "Malaya" },
  { value: "Marroquí", label: "Marroquí" },
  { value: "Mexicana", label: "Mexicana" },
  { value: "Nicaragüense", label: "Nicaragüense" },
  { value: "Noruega", label: "Noruega" },
  { value: "Neozelandesa", label: "Neozelandesa" },
  { value: "Panameña", label: "Panameña" },
  { value: "Paraguaya", label: "Paraguaya" },
  { value: "Peruana", label: "Peruana" },
  { value: "Polaca", label: "Polaca" },
  { value: "Portuguesa", label: "Portuguesa" },
  { value: "Puertorriqueño", label: "Puertorriqueño" },
  { value: "Dominicana", label: "Dominicana" },
  { value: "Rumana", label: "Rumana" },
  { value: "Rusa", label: "Rusa" },
  { value: "Sueca", label: "Sueca" },
  { value: "Suiza", label: "Suiza" },
  { value: "Tailandesa", label: "Tailandesa" },
  { value: "Taiwanesa", label: "Taiwanesa" },
  { value: "Turca", label: "Turca" },
  { value: "Ucraniana", label: "Ucraniana" },
  { value: "Uruguaya", label: "Uruguaya" },
  { value: "Venezolana", label: "Venezolana" },
  { value: "Vietnamita", label: "Vietnamita" }
];

export { years, months, countries, getId, getName };
