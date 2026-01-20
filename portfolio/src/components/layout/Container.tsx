import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = { children: ReactNode; className?: string };

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:max-w-[1440px] lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
