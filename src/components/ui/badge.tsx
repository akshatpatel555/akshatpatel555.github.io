import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium transition-colors",
  {
    variants: {
      size: {
        // Default, for prose contexts where a badge is the main object.
        md: "px-3 py-1 text-sm",
        // For card tag rows: at card width the default wraps to two lines and
        // reads as visual noise rather than metadata.
        sm: "px-2.5 py-0.5 text-xs",
      },
      variant: {
        default: "bg-muted text-muted-foreground",
        accent: "bg-accent/10 text-accent-tinted",
        outline: "border border-border text-muted-foreground",
        success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
        warning: "bg-amber-500/10 text-amber-800 dark:text-amber-400",
        // Provenance marker for coursework — deliberately distinct from the
        // accent used by skill tags so academic work is never read as
        // professional or client engagement.
        academic: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}
