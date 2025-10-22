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
import NextIcon from "@/Icons/NextIcon";
import PrismicIcon from "@/Icons/PrismicIcon";
import SMIcon from "@/Icons/SMIcon";
import ArrowIcon from "@/Icons/ArrowIcon";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h3" size="md" className="mb-12 ">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h4"
      size="sm"
      className="mb-3 font-medium text-gray-900 text-lg sm:text-base md:text-sm lg:text-base"
    >
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
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-12">
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

const icons = {
  NextJS: <NextIcon />,
  Prismic: <PrismicIcon />,
  "Slice Machine": <SMIcon />,
  ArrowIcon: <ArrowIcon />,
};
