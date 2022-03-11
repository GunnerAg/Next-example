/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useEffect } from "react";
import { validators } from "../../helpers/validators";
import { getId } from "../../helpers/data";
/**
 * The initial context values.
 */
export const formDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [form, setForm] = useState(
    {
      firstname: "",
      lastname: "",
      postalAddress: {
        street: "",
        zip: "",
        city: "",
        country: "",
      },
      email: "",
      phone: "",
      birthdate: {
        day: "01",
        month: "01",
        year: "1970",
      },
      job: "",
      gender: "M",
      legalId: "",
      nationality: "",
    },
  );

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [activeYear, setActiveYear] = useState(0);
  const [activeMonth, setActiveMonth] = useState(0);

  const onChange = (e) => {
    // Copia para modificar los valores del formulario.
    const clone = JSON.parse(JSON.stringify(form));
    const { name, value } = e.target;

    name.split(".").length<=1?
    (clone[name] = value):
    (clone[name.split(".")[0]][name.split(".")[1]] = value);

    setErrors((prevState) => ({
      ...prevState,
      [name]:
        validators[name] &&
        validators[name](value),
    }));

    console.log('name is-->', name, value);
    console.log('length is?-->', name.split(".").length);
    console.log('errors are', errors);

    return setForm(clone);
  };

  const onDate = (e) => {
    const { day, month, year } = form.birthdate;
    const { name, value, id } = e.target;
    const clone = JSON.parse(JSON.stringify(form));
    console.log('ON DATE', name, value, id);
    if (id == 0) {
      const res = {day:value, month: month, year:year};
      clone.birthdate = res;
      console.log('???', clone);
    }
    if (id == 1) {
      const res = {day:day, month: getId(value) + 1, year:year};
      clone.birthdate = res;
      setActiveMonth(getId(value));
    }
    if (id == 2) {
      const res = {day:day, month: month, year:value};
      clone.birthdate = res;
      setActiveYear(Number(value - 1900));
    }
    const validAge = `${clone.birthdate.year}/${clone.birthdate.month}/${clone.birthdate.day}`;
    console.log('?????????', validAge);
    setErrors((prevState) => ({
      ...prevState,
      [name]:
        validators[name] &&
        validators[name](validAge),
    }));
    setForm(clone);
  };

  const onBlur = (event) => {
     const { name } = event.target;
     setTouched((prevTouched) => ({
       ...prevTouched,
       [name]: true,
     }));
  };

  const onFocus = (event) => {
     const { name } = event.target;
     setTouched((prevTouched) => ({
       ...prevTouched,
       [name]: false,
     }));
  };


  useEffect(() => {
    console.log('Form', form);
    console.log('Errors', errors);
  }, [form, setForm]);

  const value = {
    form,
    touched,
    activeMonth,
    activeYear,
    errors,
    setErrors,
    onChange,
    onBlur,
    onFocus,
    onDate
  };

  return (
    <formDataContext.Provider value={value}>
      {children}
    </formDataContext.Provider>
  );
};
