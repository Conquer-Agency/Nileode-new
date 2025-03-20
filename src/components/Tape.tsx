import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";
import { Fragment } from "react";

interface Props{
    rotate? : string
}

const words = [
  "Performant",
  "Reliable",
  "Responsive",
  "Robust",
  "Scalable",
  "Secure",
  "Accessible",
  "User Friendly",
  "Maintainable",
  "Interactive",
  "Search Optimized",
  "Usable",
];

export const TapeSection = ({ rotate = "-rotate-6" }: Props) => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className={cn(" bg-gradient-to-r from-blue-300 to-sky-400", rotate)}>
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4">
                    <span className="text-gray-900 uppercase font-extrabold text-3xl tracking-wide">
                      {word}
                    </span>
                    <Zap className="size-8 text-gray-900" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
