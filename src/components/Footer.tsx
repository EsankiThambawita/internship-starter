import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import Logo from "./Logo";

export async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Logo />
        <p className="text-xs">
          ©{new Date().getFullYear()} {settings.data.site_title}
        </p>
        <ul className="flex">
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink field={item.link} className="p-3">
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
}
