import { forwardRef, InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const BaseInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ disabled, className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            disabled={disabled}
            {...props}
            className={cn("text-preset5 text-neutral-950 placeholder:text-neutral-500 border border-neutral-200 rounded-lg p-2 outline-none",
                "focus:ring-2 focus:ring-[#99A0AE] focus:ring-offset-2 focus:border focus:border-black",
                disabled && "bg-neutral-50",
                className)} />
    )
})

export default BaseInput;
