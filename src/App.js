import logo from "./logo.svg";
import "./App.css";
import AdviceCard from "./components/AdviceCard";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState();
  const [loading, setLoaidng] = useState(true);

  const getAdvice = async () => {
    console.log("clicked");
    setLoaidng(true);
    await axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data);
      })
      .catch((er) => console.log(er))
      .finally(() => setLoaidng(false));
  };

  const updateAdvice = () => {
    console.log('clicked update btn')
    getAdvice();
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="">
      <AdviceCard loading={loading} data={advice} changeAdvice={updateAdvice} />
      <Footer />
    </div>
  );
}

export default App;
