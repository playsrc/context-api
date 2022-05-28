import { NameProvider } from "../contexts/NameContext";

import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <NameProvider>
        <Header />
        <Form />
        <Footer />
      </NameProvider>
    </>
  );
}

