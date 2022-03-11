import { useContext } from "react";
import { formDataContext } from "../context/formContext";

export function useFormData() {
  const context = useContext(formDataContext);
  if(!context){
    console.error('Error deploying App Context!!!');
  }
  return context;
};
