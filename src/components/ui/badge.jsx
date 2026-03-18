import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "ui-badge--default",
  secondary: "ui-badge--secondary",
  destructive: "ui-badge--destructive",
  outline: "ui-badge--outline",
};

function Badge({
  className,
  variant = "default",
  ...props
}) {
  return (
    <div
      className={cn("ui-badge", badgeVariants[variant] || badgeVariants.default, className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants }
