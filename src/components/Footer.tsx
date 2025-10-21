import { createClient } from "@/prismicio";
import Bounded from "./Bounded";
import Logo from "@/Icons/Logo";
import LinkedinIcon from "@/Icons/LinkedinIcon";
import InstagramIcon from "@/Icons/InstagramIcon";
import YoutubeIcon from "@/Icons/YoutubeIcon";

export async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer" className="py-10 border-t border-slate-300">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-8 w-full">
        <Logo />

        {/* Contact Info */}
        <div className="flex flex-col justify-center items-center text-center gap-1">
          <p className="text-sm">hello@atdigital.lk</p>
          <p className="text-sm">(+94) 77 369 3332</p>
          {/* Copyright */}
          <p className="mt-6 text-center text-xs text-slate-500 ">
            ©{new Date().getFullYear()} {settings.data.site_title}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 items-center">
          <a
            href="https://www.linkedin.com/company/at-digital-io/posts/?feedView=all"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition-colors"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://www.instagram.com/atdigital_io/?hl=en"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/@atdigitaltube"
            aria-label="YouTube"
            className="hover:text-red-600 transition-colors"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </Bounded>
  );
}

const icons = {
  Linkedin: <LinkedinIcon />,
  Instagram: <InstagramIcon />,
  Youtube: <YoutubeIcon />,
};
