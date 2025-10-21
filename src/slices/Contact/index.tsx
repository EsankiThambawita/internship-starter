"use client";
import { FC, FormEvent, useState } from "react";
import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  JSXMapSerializer,
  PrismicRichText,
} from "@prismicio/react";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="mb-6 text-center">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-lg font-body text-slate-600 mx-auto mb-6 text-center">
      {children}
    </p>
  ),
};

/**
 * Props for `Contact` slice.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Contact form with dummy submission handler
 */
const Contact: FC<ContactProps> = ({ slice }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Dummy submission
    setSubmitted(true);
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto mt-12"
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <PrismicRichText components={components} field={slice.primary.body} />

      {submitted ? (
        <p className="text-green-600 font-semibold text-center mt-6">
          Thank you! Your message has been sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-950 transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </Bounded>
  );
};

export default Contact;
