import { useName } from "../contexts/NameContext";

export default function Footer() {
  const name = useName();

  return (
    <footer>
      <h2>Footer</h2>
      <span>&#169; 2022 {name}</span>
    </footer>
  );
}

