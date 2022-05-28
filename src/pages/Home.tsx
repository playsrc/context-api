import { useState } from "react";

import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";

export default function Home() {
  const [name, setName] = useState("mateus");

  return (
    <>
      <Header name={name} />
      <Form name={name} onUpdateName={setName} />
      <Footer name={name} />
    </>
  );
}

