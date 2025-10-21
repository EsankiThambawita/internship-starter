import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { createClient } from "@/prismicio";
import {
  SliceComponentProps,
  JSXMapSerializer,
  PrismicRichText,
} from "@prismicio/react";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="">
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
 * Props for `BlogsSection`.
 */
export type BlogsSectionProps = SliceComponentProps<Content.BlogsSectionSlice>;

/**
 * Component for "BlogsSection" Slices.
 */
const BlogsSection: FC<BlogsSectionProps> = async ({ slice }) => {
  const client = createClient();

  const blogs = await Promise.all(
    slice.primary.blogs.map(async (item) => {
      if (isFilled.contentRelationship(item.blogpost) && item.blogpost.uid) {
        return await client.getByUID("blog_posts", item.blogpost.uid);
      }
      return null;
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Slice heading */}
      <PrismicRichText components={components} field={slice.primary.heading} />

      {/* Render fetched blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {blogs.map(
          (data, index) =>
            data && (
              <div
                key={index}
                className="rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {data.data.image && (
                  <PrismicNextImage
                    field={data.data.image}
                    className="rounded-md mb-4"
                  />
                )}

                {data.data.name && <p className="mb-4">{data.data.name}</p>}

                {data.data.link && (
                  <PrismicNextLink
                    field={data.data.link}
                    className="text-pink-800 font-semibold flex items-center gap-1 hover:underline"
                  >
                    {data.data.label || "Read More"}
                    <ArrowIcon />
                  </PrismicNextLink>
                )}
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default BlogsSection;

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 11 20"
  >
    <path
      fill="#c05dc8"
      fillRule="evenodd"
      d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"
      className="svgShape color000000-0 selectable"
    ></path>
  </svg>
);

const icons = {
  ArrowIcon: <ArrowIcon />,
};
