import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Language from "./components/program-language/Language";
import Footer from "./components/Footer";

const languageFetch = () => {
  return fetch("/data.json").then((res) => res.json());
};

function App() {
  const languagePromise = languageFetch();

  return (
    <>
      <Nav />

      <Banner />

      <Suspense fallback={<h2>Loading....</h2>}>
        <Language languagePromise={languagePromise} />
      </Suspense>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;