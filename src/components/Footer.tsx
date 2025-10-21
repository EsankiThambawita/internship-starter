import { createClient } from "@/prismicio";
import Bounded from "./Bounded";
import Logo from "./Logo";

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

// SVG Icons
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 -2 44 44"
  >
    <path
      fill="#007EBB"
      fillRule="evenodd"
      d="M44 40h-9.725V25.938c0-3.68-1.52-6.193-4.866-6.193-2.558 0-3.981 1.696-4.643 3.33-.249.586-.21 1.403-.21 2.22V40h-9.634s.124-24.909 0-27.173h9.634v4.265c.57-1.865 3.648-4.526 8.56-4.526C39.211 12.566 44 16.474 44 24.89zM5.18 9.428h-.063C2.013 9.428 0 7.351 0 4.718 0 2.034 2.072 0 5.239 0c3.164 0 5.11 2.029 5.171 4.71 0 2.633-2.007 4.718-5.23 4.718m-4.07 3.399h8.576V40H1.11z"
    ></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    viewBox="0 0 32 32"
  >
    <rect width="28" height="28" x="2" y="2" fill="url(#a)" rx="6"></rect>
    <rect width="28" height="28" x="2" y="2" fill="url(#b)" rx="6"></rect>
    <rect width="28" height="28" x="2" y="2" fill="url(#c)" rx="6"></rect>
    <path fill="#fff" d="M23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    ></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M6 15.6c0-3.36 0-5.04.654-6.324a6 6 0 0 1 2.622-2.622C10.56 6 12.24 6 15.6 6h.8c3.36 0 5.04 0 6.324.654a6 6 0 0 1 2.622 2.622C26 10.56 26 12.24 26 15.6v.8c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C21.44 26 19.76 26 16.4 26h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 0 1-2.622-2.622C6 21.44 6 19.76 6 16.4zM15.6 8h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 0 1 1.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 0 1-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 0 1-1.748-1.748c-.16-.313-.29-.761-.36-1.638C8.001 19.278 8 18.113 8 16.4v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 0 1 1.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076"
      clipRule="evenodd"
    ></path>
    <defs>
      <radialGradient
        id="a"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-55.376 27.916 .066)scale(25.5196)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B13589"></stop>
        <stop offset="0.793" stopColor="#C62F94"></stop>
        <stop offset="1" stopColor="#8A3AC8"></stop>
      </radialGradient>
      <radialGradient
        id="b"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="rotate(-65.136 29.766 6.89)scale(22.5942)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E0E8B7"></stop>
        <stop offset="0.445" stopColor="#FB8A2E"></stop>
        <stop offset="0.715" stopColor="#E2425C"></stop>
        <stop offset="1" stopColor="#E2425C" stopOpacity="0"></stop>
      </radialGradient>
      <radialGradient
        id="c"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(38.50003 -5.5 1.1764 8.23476 .5 3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.157" stopColor="#406ADC"></stop>
        <stop offset="0.468" stopColor="#6A45BE"></stop>
        <stop offset="1" stopColor="#6A45BE" stopOpacity="0"></stop>
      </radialGradient>
    </defs>
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 -7 48 48"
  >
    <path
      fill="#CE1312"
      fillRule="evenodd"
      d="m19.044 23.27-.002-13.582 12.97 6.814zM47.52 7.334s-.47-3.33-1.908-4.798C43.786.61 41.74.601 40.803.49 34.086 0 24.011 0 24.011 0h-.022S13.914 0 7.197.49c-.939.11-2.983.12-4.81 2.045C.948 4.003.48 7.334.48 7.334S0 11.247 0 15.158v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.907 4.798c1.827 1.926 4.225 1.866 5.293 2.067C11.52 33.885 24 34 24 34s10.086-.015 16.803-.505c.938-.113 2.983-.122 4.809-2.048 1.438-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824"
    ></path>
  </svg>
);

const icons = {
  Linkedin: <LinkedinIcon />,
  Instagram: <InstagramIcon />,
  Youtube: <YoutubeIcon />,
};
