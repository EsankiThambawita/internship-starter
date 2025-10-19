import { createClient } from "../prismicio";

export default async function Header() {
  const client = createClient();

  return (
    <header>
      <nav></nav>
    </header>
  );
}
