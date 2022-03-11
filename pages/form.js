import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useFormData } from "../context/hooks/useFormData";
import Form from "../components/Form/Form";
import styles from "../components/Form/Form.module.scss";
import { personalData } from "../services/FormService";

export default function form() {
  const {
    form,
    touched,
    activeMonth,
    activeYear,
    errors,
    onChange,
    onBlur,
    onFocus,
    onDate
  } = useFormData();

  const isValid = () => {
    return !Object.keys(errors).some((error) => errors[error]);
  };
  
  const sendForm = async (e) => {
    const response = await personalData(formData[0]);
    console.log("Response", response);
  };

  return (
    <div>
      <div className={styles.Form}>
        <div className={styles.Form__container}>
          <div className={styles.Page}>
            <div className={styles.Page__content}>
              <Form
                onChange={onChange}
                form={form}
                activeYear={activeYear}
                activeMonth={activeMonth}
                errors={errors}
                onBlur={onBlur}
                onFocus={onFocus}
                touched={touched}
                onDate={onDate}
              />
              <div
                className={`${styles.Page__lastSection} flex justify-between`}
              >                
                {isValid() && <button
                  name="1"
                  onClick={sendForm}
                  className={`flex items-center ${styles.Page__lastSection__btn2}`}
                >    
                  <div  className={styles.Page__lastSection__btn2__txt}>Enviar</div>
                  <Image
                    width={16}
                    height={16}
                    src="/Form/arrowR.svg"
                    className="mr-2.5"
                  />
                </button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
