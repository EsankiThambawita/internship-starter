import { PrismicNextLink } from "@prismicio/next";
import { createClient } from "../prismicio";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/Icons/Logo";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="header" className="py-4 md:py-6 lg:py-8">
      <div className="flex gap-4 items-center justify-between sm:flex-row flex-row">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex">
            {settings.data.navigation.map((item) => (
              <li key={item.label}>
                <PrismicNextLink field={item.link} className="p-3">
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
