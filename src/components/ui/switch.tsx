import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

interface SwitchWithIconsProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchWithIconsProps
>(({ className, leftIcon, rightIcon, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      // Remove all focus-visible:ring-* and focus-visible:ring-offset-* classes to eliminate the animated vertical line in both modes
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border border-black/20 data-[state=checked]:border-white/20",
      className
    )}
    {...props}
    ref={ref}
  >
    {/* Left icon (e.g. Sun) */}
    {leftIcon && (
      <span className="ml-1 flex items-center justify-center text-muted-foreground">
        {leftIcon}
      </span>
    )}
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
    {/* Right icon (e.g. Moon) */}
    {rightIcon && (
      <span className="mr-1 flex items-center justify-center text-muted-foreground">
        {rightIcon}
      </span>
    )}
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
