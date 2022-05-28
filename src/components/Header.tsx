export default function Header({ name }: { name: string }) {
  return (
    <header>
      <h1>Header</h1>
      <p>Hello {name}!</p>
    </header>
  );
}

