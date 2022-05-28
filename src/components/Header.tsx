import { useName } from "../contexts/NameContext";

export default function Header() {
  const name = useName();

  return (
    <header>
      <h1>Header</h1>
      <p>Hello {name}!</p>
    </header>
  );
}

