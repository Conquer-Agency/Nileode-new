import clsx from "clsx";
import { Scribble } from "./scribble";

interface SkaterProps {
  skater: {
    first_name: string;
    last_name: string;
    photo_background: string;
    photo_foreground: string;
    customizer_link: string;
  };
  index: number;
}

export function Team({ skater, index }: SkaterProps) {
  const colors = [
    "text-brand-blue",
    "text-brand-lime",
    "text-brand-orange",
    "text-brand-pink",
    "text-brand-purple",
  ];

  const scribbleColor = colors[index];

  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden bg-blue-200 w-full rounded-xl">
        <div className="bg-gray-100  inset-0 scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8] " />

        <Scribble className={clsx("relative", scribbleColor)} />
        <img
          src={skater.photo_foreground}
          alt={`${skater.first_name} ${skater.last_name}`}
          className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110 object-cover w-full  h-full rounded-xl"
        />
        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent" />
        <h3 className="relative grid place-self-end justify-self-start p-2 font-poppins text-white uppercase text-3xl">
          <span className="mb-[-.3em] block">{skater.first_name}</span>
          <span className="block">{skater.last_name}</span>
        </h3>
      </div>
    </div>
  );
}

// Simple ButtonLink component (create this separately)
interface ButtonLinkProps {
  href: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function ButtonLink({ href, size = "md", children }: ButtonLinkProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={href}
      className={`inline-block font-medium rounded-full bg-brand-blue text-white hover:bg-brand-darkblue transition-colors ${sizeClasses[size]}`}
    >
      {children}
    </a>
  );
}
