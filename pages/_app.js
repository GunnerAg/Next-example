import "../styles/global.css";
import { FormDataProvider } from "../context/context/formContext";

export default function App({ Component, pageProps }) {
  return (
    <FormDataProvider>
        <Component {...pageProps} />
    </FormDataProvider>
  );
}
