import { Circle } from "lucide-react";
import type { ComponentProps } from "react";

export function Icon(props: ComponentProps<typeof Circle>) {
  return <Circle {...props} />;
}
