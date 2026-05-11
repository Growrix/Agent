import * as React from "react";

import { cx } from "../../../utils/cx";
import { Button, type ButtonProps } from "../../../primitives/Button";

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown ? Omit<T, K> : never;

export type FloatingActionProps = DistributiveOmit<ButtonProps, "variant" | "className"> & {
  className?: string;
};

export function FloatingAction({ className, ...props }: FloatingActionProps) {
  return <Button variant="fab" className={cx("ui-fab", className)} {...props} />;
}
