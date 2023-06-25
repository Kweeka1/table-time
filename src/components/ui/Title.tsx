import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority"

const headingVariants = cva(
  "",
  {
    variants: {
      variant: {
        h3: "text-slate-700 text-2xl font-bold py-2",
      },
    },
    defaultVariants: {
      variant: "h3",
    },
  }
)

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  children: React.ReactNode | string
}

const Title: React.FC<TitleProps> = ({ children, className, variant, ...props }) => {
  return (
    <h2 {...props} className={cn(headingVariants({ variant, className }))}>{children}</h2>
  )
}

export default Title;