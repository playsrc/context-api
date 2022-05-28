export default function Footer({ name }: { name: string }) {
  return (
    <footer>
      <h2>Footer</h2>
      <span>&#169; 2022, {name}</span>
    </footer>
  );
}

