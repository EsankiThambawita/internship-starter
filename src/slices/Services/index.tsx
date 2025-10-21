import { FC } from "react";
import { Content, createClient } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
  JSXMapSerializer,
} from "@prismicio/react";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { PrismicNextLink } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-12">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h2" size="sm" className="mb-3 font-medium sm:text-left">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services: FC<ServicesProps> = async ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <br />
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {slice.primary.services_grid.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {item.icon && <div className="mb-5">{icons[item.icon]}</div>}
              <PrismicRichText components={components} field={item.title} />
              <div className="mb-4">
                <PrismicRichText
                  components={components}
                  field={item.description}
                />
              </div>
              {item.link && (
                <PrismicNextLink
                  field={item.link}
                  className="text-pink-700 font-semibold flex items-center gap-1 hover:underline mt-2"
                >
                  {item.label}
                  <ArrowIcon />
                </PrismicNextLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Services;

//SVG Icons
const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    fill="none"
    viewBox="0 0 24 24"
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        d="M11.214.006c-.052.005-.216.022-.364.033-3.408.308-6.6 2.147-8.624 4.974a11.9 11.9 0 0 0-2.118 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696.779.251 1.6.422 2.533.526.364.04 1.936.04 2.3 0 1.611-.179 2.977-.578 4.323-1.265.207-.105.247-.134.219-.157a212 212 0 0 1-1.955-2.62l-1.919-2.593-2.404-3.559a343 343 0 0 0-2.422-3.556c-.009-.003-.018 1.578-.023 3.51-.007 3.38-.01 3.516-.052 3.596a.43.43 0 0 1-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.44.44 0 0 1-.157-.172l-.05-.105.005-4.704.007-4.706.073-.092a.6.6 0 0 1 .174-.143c.096-.047.133-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 2 2.895 4.362l4.734 7.172 1.9 2.878.097-.063a12.3 12.3 0 0 0 2.465-2.163 11.95 11.95 0 0 0 2.825-6.135c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.748C23.24 5.75 20.032 1.963 15.683.56a12.6 12.6 0 0 0-2.498-.523c-.226-.024-1.776-.05-1.97-.03Zm4.913 7.26a.47.47 0 0 1 .237.276c.018.06.023 1.365.018 4.305l-.007 4.218-.743-1.14-.746-1.14v-3.066c0-1.983.009-3.097.023-3.151a.48.48 0 0 1 .232-.296c.097-.05.132-.054.5-.054.347 0 .408.005.486.047Z"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

const PrismicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 32 32"
  >
    <path d="M10.437 5.156H9.046A3.89 3.89 0 0 0 5.15 9.047v11.407a10.7 10.7 0 0 0 4.177 1.391 2.6 2.6 0 0 1-.281-1.115v-9.177c-.14-.14-.14-3.479 1.391-6.396zm16.547 5.281V9.046a3.88 3.88 0 0 0-3.891-3.891H11.828a10.6 10.6 0 0 0-1.391 4.172c.281-.281.699-.281 1.115-.281h9.041c.141 0 3.475 0 6.396 1.391zm-5.421 16.552h1.391a3.893 3.893 0 0 0 3.896-3.896V11.828a10.7 10.7 0 0 0-4.172-1.391c.276.276.276.693.276 1.109v9.041c0 .141 0 3.48-1.391 6.396zM5.016 21.563v1.391a3.886 3.886 0 0 0 3.891 3.896h11.265a10.6 10.6 0 0 0 1.391-4.172c-.276.276-.693.276-1.109.276h-9.041c-.136 0-3.475 0-6.396-1.391zM17.672.011H7.656C3.484.011.011 3.484.011 7.656c0 0 .276 7.371 3.197 10.849.141.276.417.416.693.692V8.912A5.14 5.14 0 0 1 9.046 3.76h2.224c.423-.552.839-.968 1.256-1.385 1.249-.973 3.197-1.807 5.145-2.364zm14.323 17.661V7.656c0-4.172-3.473-7.645-7.645-7.645 0 0-7.376.276-10.849 3.197a1.65 1.65 0 0 0-.697.693h10.291a5.137 5.137 0 0 1 5.147 5.145v2.224c.557.423.973.839 1.391 1.256.973 1.249 1.807 3.197 2.364 5.145zM14.333 31.995h10.016c4.167 0 7.645-3.479 7.645-7.651 0 0-.281-7.371-3.197-10.844-.141-.281-.417-.417-.699-.697v10.291a5.127 5.127 0 0 1-5.145 5.147h-2.224c-.417.557-.833.973-1.251 1.391-1.249.973-3.197 1.807-5.145 2.364zM.011 14.333v10.011c0 4.172 3.473 7.651 7.645 7.651 0 0 7.371-.281 10.849-3.197.276-.141.416-.417.692-.699H9.046a5.135 5.135 0 0 1-5.145-5.145V20.73c-.552-.417-.975-.833-1.391-1.251C1.401 18.23.567 16.282.01 14.334z"></path>
  </svg>
);

const SMIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="80"
    height="80"
    viewBox="0 0 32 32"
  >
    <path d="M29.8 7.2c-1.1-1.8-4-2-8.2-.6C20 5.6 18.1 5 16 5 9.9 5 5 9.9 5 16c0 .4 0 .8.1 1.2-2.8 3.1-3.8 5.7-2.7 7.4.7 1.1 1.9 1.5 3.5 1.5 3.5 0 8.8-2.2 13.4-5.2 3.5-2.2 6.6-4.8 8.5-7.3 2.9-3.3 2.7-5.3 2-6.4M4.1 23.6c-.4-.6 0-2 1.6-3.9q.9 2.4 2.7 4.2c-2.3.5-3.9.4-4.3-.3m22.3-11.2c-.6-1.7-1.5-3.2-2.8-4.4 2.6-.6 4.1-.4 4.5.2s.1 2-1.7 4.2M11.8 26.2c1.3.5 2.7.8 4.2.8 5.8 0 10.5-4.5 11-10.2-1.9 1.8-4.2 3.6-6.6 5.2-3 1.8-5.9 3.3-8.6 4.2"></path>
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 11 20"
  >
    <path
      fill="#98429f"
      fillRule="evenodd"
      d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"
      className="svgShape color000000-0 selectable"
    ></path>
  </svg>
);

const icons = {
  NextJS: <NextIcon />,
  Prismic: <PrismicIcon />,
  "Slice Machine": <SMIcon />,
  ArrowIcon: <ArrowIcon />,
};
