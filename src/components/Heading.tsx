import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "text-7xl font-bold leading-tight tracking-tight font-display text-slate-700",
        size === "sm" && "text-2xl md:text-3xl",
        size === "md" && "text-3xl md:text-4xl",
        size === "lg" && "text-4xl md:text-5xl",
        size === "xl" && "text-5xl md:text-7xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
