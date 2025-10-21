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
import { ArrowIcon } from "@/Icons/ArrowIcon";

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
